import { useSelector } from "react-redux";

const FileViewer = () => {
  const { files } = useSelector((state) => state.chat);
  return (
    <div className="w-full max-w-[60%]">
      {/* container */}
      <div className="flex justify-center items-center">
        {files[0].type === "IMAGE" ? (
          <img
            src={files[0].mediaData}
            classNmae="max-w-[80%] object-contain hview"
            alt=""
          />
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            {/* file icon image */}
            <img src={`../../../../images/files/${files[0].type}.png`} alt="" />
            {/* no preview text */}
            <h1 className="dark:text-dark_text_2 text-2xl">No preview available</h1>
            {/* file size and type */}
            <span className="dark:text-dark_text_2">
              {files[0]?.file?.size} kB - {files[0]?.type}

            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileViewer;
