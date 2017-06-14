var express = require('express');
var app = express();
var server = require('http').Server(app); 
var io = require('socket.io')(server); 
var rutas = require('./routes/routes');
var Personajes = require('./models/schema').personajes;
var Partidas = require('./models/schema').partidas;
var session = require('express-session');
var info;
app.set('view engine', 'ejs');

app.use(session({secret: 'ssshhhhh'}));

app.use(express.static('public'));

//Rutas
app.use("/", rutas);


//Envia la informacion de la partida
io.on("connection", function(socket){
	socket.on("datos", function(nombre, clase){
		info = new Partidas({usuario: nombre, clase: clase, puntuacion: 0});
		console.log(info);
		socket.emit("DataUser", info);
	});
});

//Indicamos el puerto en el cual correra nuestro server
server.listen(8080, function(){
	console.log('Servidor corriendo en el puerto: 8080');
});