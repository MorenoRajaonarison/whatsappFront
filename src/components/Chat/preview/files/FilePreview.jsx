import { useState } from "react";
import Header from "./Header";
import FileViewer from "./FileViewer";
import HandleAndSend from "./HandleAndSend";
import Input from "./Input";

const FilePreview = () => {
  const [message, setMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-2 w-full flex items-center h-screen">
      {/* container */}
      <div className="w-full flex flex-col items-center h-full justify-between">
        {/* header */}
        <Header activeIndex={activeIndex} />
        {/* view of selected file */}
        <FileViewer activeIndex={activeIndex} />
        <div className="w-full flex flex-col items-center translate-y-minus-50">
          {/* message input */}
          <Input message={message} setMessage={setMessage} />
          {/* send and manipulate files */}
          <HandleAndSend
            message={message}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
