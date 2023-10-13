import moment from "moment";
import React from "react";
import FileImgVideo from "./FileImgVideo";
import FileOther from "./FileOther";

const FileMsg = ({ fileMsg, me, message }) => {
  const { file, type } = fileMsg;
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        me ? "ml-auto justify-end" : ""
      }`}
    >
      {/* message container */}
      <div className="relative">
        {/* sender user msg */}
        {!me && message.conversation.isGroup && (
          <div className="absolute top-0.5 left-[-37px]">
            <img
              src={message.sender.picture}
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
        <div
          className={`relative h-full dark:text-dark_text_1 rounded-lg ${
            me ? "border-[3px] border-green_3" : "dark:bg-dark_bg_2"
          } ${
            me && file.public_id.split(".")[1] === "png"
              ? "bg-white"
              : "bg-green_3"
          }`}
        >
          {/* message */}
          <p
            className={`h-full text-sm ${
              type !== "IMAGE" && type !== "VIDEO" && "pb-4"
            }`}
          >
            {type === "IMAGE" || type === "VIDEO" ? (
              <FileImgVideo url={file.secure_url} type={type} />
            ) : (
              <FileOther file={file} type={type} />
            )}
          </p>
          {/* date */}
          <span className="absolute right-1.5 bottom-1.5 text-xs  text-text-dark_text_5 leading-none">
            {moment(message.createdAt).format("HH:mm")}
          </span>
          {/* traingle */}
          {/* {!me ? (
        <span>
          <TraingleIcon className="dark:fill-dark_bg_2 rotate-[60deg absolute top-[-5px] -left-1.5]" />
        </span>
      ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default FileMsg;
