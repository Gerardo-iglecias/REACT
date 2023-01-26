//funciones 
//no se recomienda declarar funciones de esta manera ya que se puede sobre escribir 

//function saludar (nombre){
//return `hola, ${nombre}`;
//}

//saludar = 30 aqui se estra sobreescribiendo la funcion saludar ahora seria 30
/*
const saludar = function ( nombre ) { //lo ideal es crear una constante para a la que se le asigna una funcion para que no sepuedasobreescribir el valor de saludar 
  return `Hola, ${nombre}`;
}
*/
//saludar = 20; //ahora ya no nos permite cambiar el valor de saludar 

/* funcion de flecha => */
 
const saludar2 = (nombre) => {// asi se declaran las funciones de flecha
return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; //esta es una ventaja no necesitamos el reurn 
const saludar4 = () =>'Hola mundo';// funcion saludar que no resive ninguna argumento 

// console.log(saludar('Goku'))

console.log(saludar2 ('Vegeta') );
console.log(saludar3 ('Goku') );
console.log(saludar4 ());

const getUser = () => ({ //los parentecis indican que es un metodo si no se colocan en este tipo de declarar la funcion nos dara un Parsig error que indica que escribimos algo mal 
   
  uid:'ABC123',
  username: 'gerard_iglecias'
  
});

const user = getUser();
console.log(user);

// Tarea

function getUsuarioActivo(nombre){
return {
    uid:'ABCD567',
    username: nombre
  }
};

const ususarioActivo = getUsuarioActivo('fernando');
console.log( ususarioActivo );


//con funcion de => (flecha)

const getUsuarioActivo1 = (nombre) => { 
      return {uid:'ABCD567',
      username: nombre
      }
};

const usuarioActivo1 = getUsuarioActivo1 ('Fernando');
console.log(usuarioActivo1);

//retornanado un objeto inplicito 

const getUsuarioActivo2 = (nombre) => ({ 
  uid:'ABCD567',
  username: nombre
});

const usuarioActivo2 = getUsuarioActivo2 ('Ferch');
console.log(usuarioActivo2);