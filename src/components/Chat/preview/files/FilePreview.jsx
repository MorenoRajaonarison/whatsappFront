import React from "react";
import Header from "./Header";
import FileViewer from "./FileViewer";
import HandleAndSend from "./HandleAndSend";
import Input from "./Input";

const FilePreview = () => {
  return (
    <div className="relatibe py-2 w-full flex items-center justify-center">
      {/* container */}
      <div className="w-full flex flex-col items-center">
        {/* header */}
        <Header />
        {/* view of selected file */}
        <FileViewer />
        <div className="w-full flex flex-col items-center">
          {/* message input */}
          <Input />
          {/* send and manipulate files */}
          <HandleAndSend />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
