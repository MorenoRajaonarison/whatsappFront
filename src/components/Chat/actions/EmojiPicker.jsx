import EmojiPicker from "emoji-picker-react";
import { CloseIcon, EmojiIcon } from "../../../svg";
import { useState, useEffect } from "react";

const EmojiPickerApp = ({ textRef, message, setMessage }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    textRef.current.selectionStart = cursorPosition;
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  
  const handleEmojiClick = (emojiData, e) => {
    const { emoji } = emojiData;
    const ref = textRef.current;
    ref.focus();
    const start = ref.selectionStart;
    const end = ref.selectionEnd;
    ref.setRangeText(emoji, start, end, 'end');
    setMessage(ref.value);
  };

  return (
    <li>
      <button
        className="btn"
        type="button"
        onClick={() => setShowPicker(!showPicker)}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </button>
      {/* emoji picker */}
      <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px]">
        {showPicker && (
          <EmojiPicker theme="dark" onEmojiClick={handleEmojiClick} />
        )}
      </div>
    </li>
  );
};

export default EmojiPickerApp;
