const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig');
const uploadController = require('../controllers/uploadCont.js');

// Upload endpoint
router.post('/upload', upload.single('file'), uploadController.uploadFiles);

module.exports = router;
