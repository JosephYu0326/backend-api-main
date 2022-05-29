const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

router.post('/',upload.none(), async function(req, res, next) {
    console.log(req.body)
    const {exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude} = req.body
    const sql = "INSERT INTO exhibition(exhibitionName,exhibitionStartDate,exhibitionEndDate,Location,Longitude,Latitude) VALUES (?,?,?,?,?,?) "
    const [datas] = await db.query(sql,[exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude])
    console.log(datas)
    res.send(datas)
    
  });


  module.exports = router;