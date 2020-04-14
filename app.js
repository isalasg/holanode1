'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const HOSTNAME = '0.0.0.0';

var app = express();
app.use(bodyParser.json());
app.get('/',(request,response) => {
	response.send('<h1 style="color: red;">Hola mundo, desde puerto 8080</h1>');
});

app.listen(PORT,HOSTNAME, () => {
	console.log('El servidor se está ejecutando en://' + HOSTNAME + ':' + PORT);    
});
