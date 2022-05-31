const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const ext={
    'image/jpeg':'.jpg',
    'image/png':'.png',
    'image/gif':'.gif',
}
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '/public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        cb(null,new Date().getTime()+ext[file.mimetype])
    }
})
const fileFilter = (res,file,cb)=>{
    cb(null, !!ext[file.mimetype]);
  }
const upload = multer({storage:fileFilter})
router.post('/',upload.single("image"), async function(req, res, next) {
    console.log(req.body)

    res.send("上傳成功")
    
  });


  module.exports = router;