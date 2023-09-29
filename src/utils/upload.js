import axios from "axios";

const cloudSecret = process.env.REACT_APP_CLOUD_SECRET;
const cloudName = process.env.REACT_APP_CLOUD_NAME;

export const uploadFiles = async (files) => {
  let formData = new FormData();
  formData.append("upload_preset", cloudSecret);
  let uploaded = [];
  for (const f of files) {
    const { file, type } = f;
    formData.append("file", file);
    let res = await uploadToCloudinary(formData);
    uploaded.push({
      file: res,
      type,
    });
  }
  return uploaded
};

const uploadToCloudinary = async (formData) => {
  return new Promise(async (resolve) => {
    return await axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`, formData)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => console.log(err));
  });
};
