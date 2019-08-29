const http = require('http');
//req: solicitudes
//res: respuesta que le enviaremos
http.createServer( (req, res) => {

	/*Me da una salida tipo una pagina de web 
	res.write('hola mundo');*/

	//Salida Json
	res.writeHead(200, {'Content-Type': 'application/json'});
	let salida = {
		nombre: 'Jesus',
		edad: 22,
		url: req.url
	}
	res.write(JSON.stringify(salida));
	res.end();

})
.listen(8080);

console.log('Escuchando el puerto 8080');