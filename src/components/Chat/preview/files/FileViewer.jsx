import { useSelector } from "react-redux";

const FileViewer = ({ activeIndex }) => {
  const { files } = useSelector((state) => state.chat);
  return (
    <div className="w-full max-w-[60%]">
      {/* container */}
      <div className="flex justify-center items-center">
        {files[activeIndex].type === "IMAGE" ? (
          <img
            src={files[activeIndex].fileData}
            className="max-w-[80%] object-contain hview"
            alt=""
          />
        ) : files[activeIndex].type === "VIDEO" ? (
          <video src={files[activeIndex].fileData} controls></video>
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            {/* file icon image */}
            <img
              src={`../../../../images/files/${files[activeIndex].type}.png`}
              alt=""
            />
            {/* no preview text */}
            <h1 className="dark:text-dark_text_2 text-2xl">
              No preview available
            </h1>
            {/* file size and type */}
            <span className="dark:text-dark_text_2">
              {files[activeIndex]?.file?.size} kB - {files[activeIndex]?.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileViewer;
