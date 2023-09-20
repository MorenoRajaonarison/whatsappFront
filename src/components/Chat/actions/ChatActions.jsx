import { ClipLoader } from "react-spinners";
import { sendMessage } from "../../../features/chatSlice";
import { SendIcon } from "../../../svg";
import Attachement from "./Attachement/Attachement";
import EmojiPickerApp from "./EmojiPicker";
import Input from "./Input";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatActions = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showAttachment, setShowAttachment] = useState(false);
  const [loading, setLoading] = useState(false)
  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const textRef = useRef();
  const values = {
    message,
    convoId: activeConversation._id,
    files: [],
    token: user.access_token,
  };
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    await dispatch(sendMessage(values));
    setMessage("");
    setLoading(false)
  };

  return (
    <form
      onSubmit={(e) => sendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/* container */}
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPickerApp
            message={message}
            setMessage={setMessage}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowAttachment={setShowAttachment}
            textRef={textRef}
          />
          <Attachement showAttachment={showAttachment} setShowAttachment={setShowAttachment} setShowPicker={setShowPicker}/>
        </ul>
        {/* input */}
        <Input message={message} setMessage={setMessage} textRef={textRef} />
        {/* sendBtn */}
        <button type="submit" className="btn">
          {status === "loading" && loading ? (
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
