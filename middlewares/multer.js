const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  if (
  file.mimetype === "image/png" ||
  file.mimetype === "image/jpg" ||
  file.mimetype === "image/jpeg" ||
  file.mimetype == "pdf/pdf"
  ) {
  cb(null, true);
  } else {
  cb(new Error("File format should be PNG,JPG,JPEG,PDf"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;