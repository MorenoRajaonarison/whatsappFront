import { useRef, useState } from "react";

const Picture = ({ readablePicture, setpicture, setReadablePicture }) => {
  const inputRef = useRef();
  const [errPicture, seterrPicture] = useState("");
  const handlePictureChoose = (e) => {
    let pic = e.target.files[0];
    if (
      pic.type !== "image/png" &&
      pic.type !== "image/jpeg" &&
      pic.type !== "image/webp"
    ) {
      seterrPicture(`${pic.name} format is not supported`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      //5mb
      seterrPicture(`${pic.name} is too large, maximum 5mb allowed`);
      return;
    } else {
      seterrPicture("");
      setpicture(pic);
      // reading the picture
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setReadablePicture(e.target.result);
      };
    }
  };

  const handlePictureChange = () => {
    setpicture("");
    setReadablePicture("");
  };

  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (Optional)
      </label>

      {readablePicture ? (
        <div className="mx-auto">
          <img
            src={readablePicture}
            alt="picture"
            className="w-20 h-20 object-cover rounded-full"
          />
          {/* change pic  */}
          <div
            className="mt-2 py-1 w-20 dark:bg-dark_bg_3 rounded-md text-xs flex items-center justify-center cursor-pointer"
            onClick={(e) => handlePictureChange()}
          >
            Remove
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          className="w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
        >
          Upload picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        ref={inputRef}
        hidden
        accept="image/png,image/jpeg,image/webp"
        onChange={handlePictureChoose}
      />

      {/* error */}
      <div className="mt-2">
        <p className="text-red-400">{errPicture}</p>
      </div>
    </div>
  );
};

export default Picture;
