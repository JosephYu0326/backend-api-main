const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

router.post('/',upload.none(), async function(req, res, next) {
    console.log(req.body)
    const sql = "INSERT INTO categories(CategoryID,CategoryName,Description) VALUES (?,?,?)";
    const [datas] = await db.query(sql,[10,req.body.categoryName,req.body.description])
    console.log(datas)
    res.send("新增資料")
    
  });


  module.exports = router;
