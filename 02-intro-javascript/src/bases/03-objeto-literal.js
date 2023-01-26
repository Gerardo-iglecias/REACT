const persona = {//esto seria un objeto
 nombre: 'Tony',
 apellido: 'Stark',
 edad: 45,
 direccion: {//esto es una anidacion un objeto dentro de otro objeto 
   cuidad: 'New York',
   zip: 553221321,
   lat: 14.3232,
   lng: 34.9233321

   }
};

//console.table( persona ) muestra el resultado en forma de tabla 


//const persona2 = persona; // se esta asignando en memoria el objeto persona a persona2

const persona2 ={ ... persona  } //forma correcta de clonar(extrae las propiedades de persona y se las asigna a persona2)
persona2.nombre = 'Peter';// si cambiamos el nombre a persona2 cambia tambien en persona lo que o eberia por que persona2 solo es copia pero declaramos mal la copia lo que hace es hacer referencia a persona y decir que seran iguales  

console.log( persona ); // es lomismo que poner persona:persona que crea un objeto persona que apunta a los atributos de persona 
console.log( persona2 ) 