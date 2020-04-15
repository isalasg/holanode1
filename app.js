'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const PORT = 8080;
const HOSTNAME = '0.0.0.0';

var app = express();
app.get('/',(request,response) => {
	app.use(bodyParser.json());
	response.send('<h1 style="color: red;">Hola mundo, desde puerto 8080</h1>');
});
app.get('/prueba',(request,response) => {
	app.use(express.static(__dirname + '/prueba'));
	response.sendFile(path.join(__dirname));
});

const server = http.createServer(app);
server.listen(PORT, () => console.log('App running on: http://localhost:${PORT}'));

/*
app.listen(PORT,HOSTNAME, () => {
	console.log('El servidor se está ejecutando en://' + HOSTNAME + ':' + PORT);    
});
*/
