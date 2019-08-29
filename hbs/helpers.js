
const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    //convierto el string a un array
    let palabras = text.split(' ');

    //slice(1), toda la palabra despues de la primera posicion
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //transformando array a string
    return palabras.join(' ')

});