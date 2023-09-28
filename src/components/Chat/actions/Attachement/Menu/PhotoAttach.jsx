import { useRef } from "react";
import { useDispatch } from "react-redux";
import { PhotoIcon } from "../../../../../svg";
import { addFiles } from "../../../../../features/chatSlice";
import { filesType } from "../../../../../utils/filesType";

const MAX_MEDIA_SIZE = 1024 * 1024 * 5; // 5MB
const ALLOWED_MEDIA_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "video/mp4",
  "video/mpg",
  "video/webm",
];

const PhotoAttach = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const isValidMedia = (media) => {
    return (
      ALLOWED_MEDIA_TYPES.includes(media.type) && media.size <= MAX_MEDIA_SIZE
    );
  };

  const handleMediaRead = (media, result) => {
    dispatch(addFiles({ file: media, fileData: result, type: filesType(media) }));
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
    <li>
      <button
        type="button"
        className="bg-[#bf59cf] rounded-full"
        onClick={() => inputRef.current.click()}
      >
        <PhotoIcon />
      </button>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept={ALLOWED_MEDIA_TYPES.join(", ")}
        onChange={mediaHandler}
      />
    </li>
  );
};

export default PhotoAttach;
