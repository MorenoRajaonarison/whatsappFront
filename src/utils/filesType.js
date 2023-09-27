export function filesType(type) {
  switch (type) {
    case "text/plain":
      return "TXT";
    case "application/pdf":
      return "PDF";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "DOCX";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "PPTX";
    case "application/vnd.ms-excel":
      return "XLS";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "XLSX";
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
