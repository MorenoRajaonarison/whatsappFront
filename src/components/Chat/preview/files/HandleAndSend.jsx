import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Add from "./Add";
import { SendIcon } from "../../../../svg";
import { uploadFiles } from "../../../../utils/upload";
import { sendMessage } from "../../../../features/chatSlice";
import { useSocket } from "../../../../context/socketContext";

const HandleAndSend = ({ setActiveIndex, activeIndex, message }) => {
  const dispatch = useDispatch()
  const socket = useSocket()
  const { files, activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const sendMsgHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // upload files
    const uploadedFiles = await uploadFiles(files);
    // send the message
    const values = {
      token: user.access_token,
      message,
      convoId: activeConversation._id,
      files: uploadedFiles.length>0 ? uploadedFiles: [],
    };
    let newMsg = await dispatch(sendMessage(values))
    socket.emit("sendMessage", newMsg.payload)
    setLoading(false)
  };

  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2 ">
      <span></span>
      <div className="flex gap-x-2 items-center">
        {files.map((file, i) => (
          <div
            key={i}
            className={`w-14 h-14 border dark:border-white rounded-md overflow-hidden cursor-pointer mt-2 ${
              activeIndex === i && "border-[3px] !border-green_1"
            }`}
            onClick={() => setActiveIndex(i)}
          >
            {file.type === "IMAGE" ? (
              <img
                src={file.fileData}
                className="w-full h-full object-cover"
                alt=""
              />
            ) : (
              <img
                src={`../../../../images/files/${file.type}.png`}
                className="w-8 h-8 mt-1"
                alt=""
              />
            )}
          </div>
        ))}
        {/* add another file */}
        <Add setActiveIndex={setActiveIndex} />
      </div>
      {/* send btn */}
      <div
        onClick={sendMsgHandler}
        className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
      >
        <SendIcon className="fill-white" />
      </div>
    </div>
  );
};

export default HandleAndSend;
