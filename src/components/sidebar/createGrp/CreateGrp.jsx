import { useState } from "react";
import UnderlineInput from "./UnderlineInput";
import MultiSelect from "./MultiSelect";
import { useSelector } from "react-redux";

const CreateGrp = () => {
  const [name, setName] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [selectedUsers, setselectedUsers] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.chat);

  const handleSearch = async (e) => {};

  return (
    <div className="createGroupAnimation relative flex0030 h-full z-40">
      {/* container */}
      <div className="mt-4">
        <button className="btn w-6 h-6 border">🙂</button>
        {/* grp name input */}
        <UnderlineInput name={name} setName={setName} />
        {/* multiple select */}
        <MultiSelect
          selectedUsers={selectedUsers}
          searchResults={searchResults}
          setselectedUsers={setselectedUsers}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default CreateGrp;
