//Desestruturacion
//Asignacion Desestructurante 

const persona = {
  nombre: 'Tony',
  edad:45,
  clave:'Ironman',
  rango:'Soldado'
}

const { nombre, clave, edad } = persona; //con desestructuracion -no importa el orden en el que se extrigan 
 //const {nombre:nombre2} = persona; // se puede renombrar 
//console.log(nombre2)// se tiene que llmar al nuevo nombre 

   //esta es la forma abitual de como extremos datos 

//console.log(persona.nombre ); 
//console.log(persona.edad ); 
//console.log(persona.clave );

/*

//con desestructuracion

   console.log( nombre );
   console.log( clave );
   console.log( edad );

   */

   const  userContext = ({ clave, nombre, edad, rango = 'capitan'}) => {// se le puede asignar una nueva propiedad si no esta deifinida en el objeto pero si esta definida tomara la del objeto

      //console.log( nombre, edad, rango); una froma de acer desestructurqcion con funcion de flecha

      return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:3.1416,
            lng:-12.435
        }
      }

  }

 // retornaPersona(persona);

 //const avenger = userContext (persona);

 // console.log(avenger);
  const { nombreClave , anios, latlng:{lat, lng} } = userContext( persona ) // asignando la desestructurante 

 console.log(nombreClave, anios);

console.log(lat , lng)

  