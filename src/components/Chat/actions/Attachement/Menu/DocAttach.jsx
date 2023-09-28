import { useRef } from "react";
import { useDispatch } from "react-redux";
import { DocumentIcon } from "../../../../../svg";
import { addFiles } from "../../../../../features/chatSlice";
import { filesType } from "../../../../../utils/filesType";

const MAX_DOC_SIZE = 1024 * 1024 * 10; // 10MB
const ALLOWED_DOC_TYPES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/vnd.ms-excel", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/pdf",
  "text/plain", // .txt
  "application/zip", // .zip
  "application/x-rar-compressed", // .rar
];

const DocAttach = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const isValidDoc = (doc) => {
    return ALLOWED_DOC_TYPES.includes(doc.type) && doc.size <= MAX_DOC_SIZE;
  };

  const handleDocRead = (doc, result) => {
    console.log(filesType(doc));
    dispatch(addFiles({ file: doc, docData: result, type: filesType(doc) }));
  };

  const docHandler = (e) => {
    const selectedDocs = [...e.target.files].filter(isValidDoc);

    selectedDocs.forEach((doc) => {
      const reader = new FileReader();
      reader.readAsDataURL(doc);
      reader.onload = (e) => handleDocRead(doc, e.target.result);
    });
  };

  return (
    <li>
      <button
        type="button"
        className="bg-[#bf59cf] rounded-full"
        onClick={() => inputRef.current.click()}
      >
        <DocumentIcon />
      </button>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept={ALLOWED_DOC_TYPES.join(", ")}
        onChange={docHandler}
      />
    </li>
  );
};

export default DocAttach;
