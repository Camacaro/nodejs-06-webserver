const express = require('express');
const app = express();

const hbs = require('hbs');

//importacion de helpers
require('./hbs/helpers');

//obtener puerto del ambiente, sino hay sera 3000
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales' );
//middleware
//leere todos los archivo , son accedidos al publico
app.use( express.static( __dirname+'/public') );

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  	res.render('home', {
  		nombre: 'Jesus',
  		year: new Date().getFullYear()
  	})
});

app.get('/about', (req, res) => {
  	res.render('about', {
  		year: new Date().getFullYear()
  	})
});
 
/*app.get('/', (req, res) => {
  //res.send('Hello World')
  let salida = {
		nombre: 'Jesus',
		edad: 22,
		url: req.url
	}
	res.send(salida);

});*/

app.get('/data', (req, res) => {
  	res.send('Hello data')
});
 
app.listen(port, () => {
	console.log(`Escuchando peticiones del puerto ${port}`);
});