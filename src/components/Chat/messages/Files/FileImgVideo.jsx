import React from "react";

const FileImgVideo = ({ url, type }) => {
  return (
    <div>
      {type === "IMAGE" ? (
        <img src={url} alt="" />
      ) : (
        <video src={url} controls></video>
      )}
    </div>
  );
};

export default FileImgVideo;
