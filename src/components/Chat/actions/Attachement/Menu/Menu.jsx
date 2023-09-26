import { CameraIcon, ContactIcon, DocumentIcon,  PollIcon, StickerIcon } from "../../../../../svg";
import PhotoAttach from "./PhotoAttach";

const Menu = () => {

  return (
    <ul className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button className="rounded-full">
          <PollIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#0eabf4] rounded-full">
          <ContactIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#5f66cd] rounded-full">
          <DocumentIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#d3396d] rounded-full">
          <CameraIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full">
          <StickerIcon />
        </button>
      </li>
      <PhotoAttach/>
    </ul>
  );
};

export default Menu;
