import { useRef } from "react";
import { useDispatch } from "react-redux";
import { DocumentIcon } from "../../../../../svg";
import { addFiles } from "../../../../../features/chatSlice";
import {
  ALLOWED_DOC_TYPES,
  MAX_FILE_SIZE,
  filesType,
} from "../../../../../utils/filesType";

const DocAttach = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const isValidDoc = (doc) => {
    return ALLOWED_DOC_TYPES.includes(doc.type) && doc.size <= MAX_FILE_SIZE;
  };

  const handleDocRead = (doc, result) => {
    dispatch(addFiles({ file: doc, fileData: result, type: filesType(doc) }));
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
