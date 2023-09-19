import { ClipLoader } from "react-spinners";
import { sendMessage } from "../../../features/chatSlice";
import { SendIcon } from "../../../svg";
import Attachement from "./Attachement";
import EmojiPicker from "./EmojiPicker";
import Input from "./Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatActions = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const values = {
    message,
    convoId: activeConversation._id,
    files: [],
    token: user.access_token,
  };
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    await dispatch(sendMessage(values));
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => sendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/* container */}
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachement />
        </ul>
        {/* input */}
        <Input message={message} setMessage={setMessage} />
        {/* sendBtn */}
        <button type="submit" className="btn">
          {status === "loading" ? (
            <ClipLoader color="#e9edef" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatActions;
