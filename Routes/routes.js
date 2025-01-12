const express = require("express");
const { uploadImage, downloadImage } = require("../Controllers/controllers");
const upload = require("../Utils/upload");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

module.exports = router;
