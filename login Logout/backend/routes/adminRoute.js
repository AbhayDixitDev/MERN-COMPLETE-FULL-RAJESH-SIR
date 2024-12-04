// adminRoute.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");

// Step 1: Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Set unique filename
  }
});

// Step 2: Create multer upload instance
const upload = multer({ storage: storage });

// Step 3: Use multer middleware in route
router.post("/products/add", upload.single("image"), adminController.addProduct);

module.exports = router;
