'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const HOSTNAME = '0.0.0.0';

var app = express();
app.use(bodyParser.json());
app.get('/',(request,response) => {
	response.send('Hola mundo por 8080');
});

app.listen(PORT,HOSTNAME, () => {
	console.log('El servidor está corriendo en http://' + HOSTNAME + ':' + PORT);    
});
