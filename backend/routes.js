const express = require("express");
const router = express.Router();
const upload = require("./upload");

router.post("/upload", upload.single("song"), (req, res) => {
  res.json({
    message: "Song uploaded successfully",
    file: req.file
  });
});

router.get("/", (req, res) => {
  res.send("Mholking Music backend is running");
});

module.exports = router;
