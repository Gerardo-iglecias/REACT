
const nombre = 'Gerardo';
const apellido = 'Mendoza'

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${ 1 + 1 }`;
 
console.log ( nombreCompleto); 
function getSaludo(nombre) {
   return ' Hola mundo ' + nombre;



}
console.log (`este es un mensaje: ${ getSaludo ( nombre ) } `)