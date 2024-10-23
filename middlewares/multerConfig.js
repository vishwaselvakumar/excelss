const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../modals/s3Config');

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET,
        key: function (req, file, cb) {
            const folderName = 'excel/';
            const fileName = `${folderName}${Date.now().toString()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
});

module.exports = upload;
