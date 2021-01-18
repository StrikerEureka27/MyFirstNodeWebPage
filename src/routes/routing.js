const express = require('express');
const router = express.Router();



router.get('/', (req, res)=> { 
    //Enviando archivo html a la ruta por defecto!
    //res.sendFile(path.join(__dirname , 'views/index.html'));
    res.render('index.html')
 })

 router.get('/Contact', (req, res)=>{
    res.render('contact.html')
 })

 module.exports = router;
