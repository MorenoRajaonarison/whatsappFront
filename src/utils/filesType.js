export function filesType(doc) {
  switch (doc.type) {
    case "text/plain":
      return "TXT";
    case "application/pdf":
      return "PDF";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "DOCX";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "PPTX";
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "XLS";
    case "application/x-rar-compressed":
      return "RAR";
    case "application/zip":
      return "ZIP";
    case "audio/mpeg":
    case "audio/wav":
      return "AUDIO";
    case "video/mp4":
    case "video/mpg":
    case "video/webm":
      return "VIDEO";
    case "image/png":
    case "image/jpeg":
    case "image/gif":
    case "image/webp":
      return "IMAGE";
    default:
      return "IMAGE";
  }
}

export const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10MB
export const ALLOWED_DOC_TYPES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/vnd.ms-excel", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/pdf",
  "text/plain", // .txt
  "application/zip", // .zip
  "application/x-rar-compressed", // .rar
];

export const ALLOWED_MEDIA_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "video/mp4",
  "video/mpg",
  "video/webm",
];
