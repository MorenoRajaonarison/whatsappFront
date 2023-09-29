import { useRef } from "react";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../../../svg";
import {
  ALLOWED_DOC_TYPES,
  ALLOWED_MEDIA_TYPES,
  MAX_FILE_SIZE,
  filesType,
} from "../../../../utils/filesType";
import { addFiles } from "../../../../features/chatSlice";

const Add = ({ setActiveIndex }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const isValidMedia = (media) => {
    return (
      [...ALLOWED_MEDIA_TYPES, ...ALLOWED_DOC_TYPES].includes(media.type) &&
      media.size <= MAX_FILE_SIZE
    );
  };

  const handleMediaRead = (media, result) => {
    dispatch(
      addFiles({ file: media, fileData: result, type: filesType(media) })
    );
  };

  const mediaHandler = (e) => {
    const selectedMedia = [...e.target.files].filter(isValidMedia);

    selectedMedia.forEach((media) => {
      const reader = new FileReader();
      reader.readAsDataURL(media);
      reader.onload = (e) => handleMediaRead(media, e.target.result);
    });
  };
  return (
    <>
      <div
        onClick={() => inputRef.current.click()}
        className="w-14 h-14 mt-2 border dark:border-white rounded-md flex items-center justify-center cursor-pointer"
      >
        <span className="rotate-45">
          <CloseIcon className="dark:fill-dark_svg_1" />
        </span>
      </div>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept={ [...ALLOWED_MEDIA_TYPES, ...ALLOWED_DOC_TYPES].join(", ")}
        onChange={mediaHandler}
      />
    </>
  );
};

export default Add;
