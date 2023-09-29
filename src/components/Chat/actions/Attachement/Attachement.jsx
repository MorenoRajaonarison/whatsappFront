import { useState } from "react";
import { AttachmentIcon } from "../../../../svg";
import Menu from "./Menu/Menu";

const Attachement = ({ setShowAttachment, showAttachment, setShowPicker }) => {
  const [show, setShow] = useState(false);
  return (
    <li className="relative">
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowPicker(false);
          setShowAttachment(!showAttachment);
        }}
      >
        <AttachmentIcon className="dark:fill-dark_svg_1" />
      </button>
      {/* menu */}
      {showAttachment && <Menu />}
    </li>
  );
};

export default Attachement;
