const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

router.get('/',upload.none(), async function(req, res, next) {
    console.log(req.body)
    const sql = "select exhibitionID,exhibitionName,date_format(exhibitionStartDate,'%Y-%m-%d') AS exhibitionStartDate,date_format(exhibitionEndDate,'%Y-%m-%d') As exhibitionEndDate,Location,Longitude,Latitude from exhibition";
    const [datas] = await db.query(sql)
    console.log(datas)
    res.json(datas)
    
  });
router.delete('/:id',upload.none(), async function(req, res, next) {
    let output = {
      ok:false
    }
    const id = req.params.id
    const sql = "DELETE FROM exhibition WHERE exhibitionID=?";
    const [datas] = await db.query(sql,[id])
    if(datas.affectedRows === 1){
      output.ok = true;
   }
 res.json(output) ;
    
  });


  module.exports = router;