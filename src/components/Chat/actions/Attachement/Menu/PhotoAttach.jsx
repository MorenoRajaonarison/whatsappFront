import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhotoIcon } from "../../../../../svg";
import { addFiles } from "../../../../../features/chatSlice";

const MAX_IMAGE_SIZE = 1024 * 1024 * 5; // 5MB
const ALLOWED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
];

const PhotoAttach = () => {
  const { files } = useSelector((state) => state.chat);
  console.log(files);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const isValidImage = (img) => {
    return ALLOWED_IMAGE_TYPES.includes(img.type) && img.size <= MAX_IMAGE_SIZE;
  };

  const handleFileRead = (img, result) => {
    dispatch(addFiles({ file: img, imgData: result, type: "image" }));
  };

  const imageHandler = (e) => {
    const files = [...e.target.files].filter(isValidImage);

    files.forEach((img) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (e) => handleFileRead(img, e.target.result);
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
        ref={inputRef}
        accept={ALLOWED_IMAGE_TYPES.join(", ")}
        onChange={imageHandler}
      />
    </li>
  );
};

export default PhotoAttach;
