const { rejects } = require('assert');
const express = require('express');
const { dirname, resolve } = require('path');

// Path nos permite manejar y concatenar rutas de mejor manera
const path = require('path');
// Creo mi objeto de tipo express
const app = express();
//var unirest = require("unirest");


// Express settings
app.set('MyFirstNodePage', 'Striker Development');
app.set('Port', 3000);
app.set('views', path.join(__dirname, '/views'))
app.set('View Engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Middlewares  

//Routing
app.use(require('./routes/routing.js')); //Modularizando el codigo


//Static Files
// Agrego mi carpeta public donde tendre todos mis documentos accesibles
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server 
app.listen(app.get('Port'), () => {
    console.log('Server running on port:', app.get('Port'));
});

