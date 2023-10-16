import { useState } from "react";
import UnderlineInput from "./UnderlineInput";
import MultiSelect from "./MultiSelect";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { createGrpConvo } from "../../../features/chatSlice";
import { ArrowBack, Done } from "@mui/icons-material";

const CreateGrp = ({ setShowCreateGrp }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [selectedUsers, setselectedUsers] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.chat);

  const handleSearch = async (e) => {
    if (e.target.value && e.key === "Enter") {
      setsearchResults([]);
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/user?search=${e.target.value}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );
        if (data.length > 0) {
          let tmpArr = [];
          data.forEach((user) => {
            let tmp = {
              value: user._id,
              label: user.name,
              picture: user.picture,
            };
            tmpArr.push(tmp);
          });
          setsearchResults(tmpArr);
        } else {
          setsearchResults([]);
        }
      } catch (error) {
        console.log(error.response.data.error.message);
      }
    } else {
      setsearchResults([]);
    }
  };

  const createGrpHandler = async () => {
    if (status !== "loading") {
      let users = [];
      selectedUsers.forEach((u) => {
        users.push(u.value);
      });
      let values = {
        name,
        users,
        token: user.access_token,
      };
      dispatch(createGrpConvo(values));
      setShowCreateGrp(false);
    }
  };
  return (
    <div className="createGroupAnimation relative flex0030 h-full z-40">
      {/* container */}
      <div className="mt-4">
        <button
          className="btn w-6 h-6 border"
          onClick={() => setShowCreateGrp(false)}
        >
          <ArrowBack sx={{ color: "#fff" }} />
        </button>
        {/* grp name input */}
        <UnderlineInput name={name} setName={setName} />
        {/* multiple select */}
        <MultiSelect
          selectedUsers={selectedUsers}
          searchResults={searchResults}
          setselectedUsers={setselectedUsers}
          handleSearch={handleSearch}
        />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2">
          <button
            className="btn bg-green_1 scale-150 hover:bg-green-500"
            onClick={() => createGrpHandler()}
          >
            {status === "loading" ? (
              <ClipLoader color="#e9efef" size={25} />
            ) : (
              <Done />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGrp;
