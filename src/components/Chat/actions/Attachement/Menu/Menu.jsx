import {
  CameraIcon,
  ContactIcon,
  PollIcon,
  StickerIcon,
} from "../../../../../svg";
import DocAttach from "./DocAttach";
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
      <DocAttach />
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
      <PhotoAttach />
    </ul>
  );
};

export default Menu;
