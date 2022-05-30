const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage:storage})
router.post('/',upload.single("image"), async function(req, res, next) {
    console.log(req.file.filename)

    res.send("上傳成功")
    
  });


  module.exports = router;