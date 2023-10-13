import { useSelector } from "react-redux";
import { CloseIcon } from "../../../../svg";

const Header = ({ activeIndex, clearFileHandler }) => {
  const { files } = useSelector((state) => state.chat);

  return (
    <div className="w-full pl-4">
      {/* container */}
      <div className="w-full flex items-center justify-between">
        <div
          className="translate-x-4 cursor-pointer"
          onClick={clearFileHandler}
        >
          <CloseIcon className="dark:fill-dark_svg_1" />
        </div>
        {/* filename */}
        <h1 className="dark:text-dark_text_1 text-[15px]">
          {files[activeIndex]?.file?.name}
        </h1>
        {/* empty tag */}
        <span></span>
      </div>
    </div>
  );
};

export default Header;
