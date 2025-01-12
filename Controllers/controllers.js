const File = require("../Models/File");

exports.uploadImage = async (req, res) => {
  const fileObg = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObg);
    console.log(file);
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    File.downloadContent++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};
