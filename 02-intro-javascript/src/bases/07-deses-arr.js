
  //desestructuracion de arreglos

const personajes = ['goku', 'vegeta','Trunks'];

/* esta es la forma tradicional de recorrer una arreglo
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personages[2] ); */

// esta es la forma de hacerlo con la desestructuracion de arrreglos
   // ----super tip para renombrar poner el cursor sobre la palabra y preciona Fn + f2 y cambara el nombre en todos los lugares 
const [  , , p3 ] = personajes;// podemos acceder a alguna parae del arreglo indicado con la , los lugares que no no interesan 

console.log( p3 );



const retornaArreglo = () =>{
  return ['ABC', 123];
}
/*
const arr = retornaArreglo ();

console.log(arr) */

const [ letras, numeros ] = retornaArreglo ();

console.log(letras, numeros)

//tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre
const usState = (valor) =>{
    return [valor, ()=>{ console.log('Hola Mundo') } ];// todo lo que comiense con use o set ahora son palabras reservadas
}

//const arr = useState('suek');

//console.log(arr); mandamos a traer todo el arreglo 
//arr[1](); //estamos mandando a traer la segunda posision del arreglo 


const [nombre, setNombre] = usState( 'goku' )//a vlor le estamos asignanado gocu 1. el primer valor del arreglo se llamara nombre 2. se llamara setNombre

console.log( nombre );
setNombre();