import { SendIcon } from "../../../svg";
import Attachement from "./Attachement";
import EmojiPicker from "./EmojiPicker";
import Input from "./Input";

const ChatActions = () => {
  return (
    <div className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none">
      {/* container */}
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachement />
        </ul>
        {/* input */}
        <Input />
        {/* sendBtn */}
        <button className="btn">
          <SendIcon className="dark:fill-dark_svg_1" />
        </button>
      </div>
    </div>
  );
};

export default ChatActions;
