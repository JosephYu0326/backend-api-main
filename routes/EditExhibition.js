const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();



router.get('/:id',upload.none(), async function(req, res, next) {

  const id =req.params.id
  console.log(id)
  const sql = "select exhibitionID,exhibitionName,date_format(exhibitionStartDate,'%Y-%m-%d') AS exhibitionStartDate,date_format(exhibitionEndDate,'%Y-%m-%d') As exhibitionEndDate,Location,Longitude,Latitude from exhibition where exhibitionID = ?";
  const [datas] = await db.query(sql,[id])
  console.log(datas)
  res.json(datas)
  
});

router.put('/:id',upload.none(), async function(req, res, next) {
  let output = {
    ok:false
  }
  const {exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude} = req.body

  const id =req.params.id
  console.log(id)
  const sql = "UPDATE exhibition SET exhibitionName=?,exhibitionStartDate=?,exhibitionEndDate=?,Location=?,Longitude=?,Latitude=? WHERE exhibitionID = ? ";
  const [datas] = await db.query(sql,[exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude,id])
  if(datas.affectedRows === 1){
    output.ok = true;
 }
res.json(output) ;
  
});



// router.post('/',upload.none(), async function(req, res, next) {
//     console.log(req.body)
//     const {exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude} = req.body
//     const sql = "INSERT INTO exhibition(exhibitionName,exhibitionStartDate,exhibitionEndDate,Location,Longitude,Latitude) VALUES (?,?,?,?,?,?) "
//     const [datas] = await db.query(sql,[exhibitionName,exhibitionStartDate,exhibitionEndDate,exhibitionLocation,exhibitionLongitude,exhibitionLatitude])
//     console.log(datas)
//     res.send(datas)
    
//   });


  module.exports = router;