'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

// Conexión Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://UserSebas:Eulogio1@base-de-datos-en-mongodb-ed8xm.mongodb.net/test1?retryWrites=true&w=majority', {  useNewUrlParser: true })
		.then(() => {
			console.log("La conexión a la base de datos se realizo correctamente");
		
			// Crear servidor
			app.listen(port, () => {
				console.log("Servidor corriendo en http://localhost:3800");
			});
		})
		.catch(err => console.log(err));