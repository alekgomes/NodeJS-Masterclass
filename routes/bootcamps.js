const express = require("express");
const router = express.Router();

// Não é mais necessário usar /api/v1/bootcamps
// pois estamos montando a rota (lá no server.js) já com esse prefixo

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Get single bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
