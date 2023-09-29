import { useRef } from "react";
import { useDispatch } from "react-redux";
import { PhotoIcon } from "../../../../../svg";
import { addFiles } from "../../../../../features/chatSlice";
import { ALLOWED_MEDIA_TYPES, MAX_FILE_SIZE, filesType } from "../../../../../utils/filesType";


const PhotoAttach = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const isValidMedia = (media) => {
    return (
      ALLOWED_MEDIA_TYPES.includes(media.type) && media.size <= MAX_FILE_SIZE
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
