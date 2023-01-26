//Areglos en JS

//const arreglo = new Array(100); no se recomienda crear arreglos asi solo cuando quieres definir el tamaño que aun asi puedes expandirlo con push(1)

const arreglo = [1,2,3,4]; //las llaves [] son referencia arreglos
//arreglo.push(1) //asi se asignan espacios al arreglo aun que no es recomendable por que modifica el objeto(arreglo) principal 
//arreglo.push(2)
//arreglo.push(3)
//arreglo.push(4)

let arreglo2 = [...arreglo, 5];//...(operador spret) extrae los espacios del arreglo asignadolos al espacio en memoria del arreglo dos (copia)
//arreglo2.push( 5 ); esto asigna el espacio 5 a los dos arreglos que no deberia suceder 

const arreglo3 = arreglo2.map( function(numero) {//map es un metodo crea un nuevo arreglo y utiliza una funcion para recorrer el arreglo2 y realizar lo que se especifica en la funcion (covac)
return numero *2;// retorna el valor si no se agrega retorna undefined

});//recorre el arreglo2 y hace la funcion a cada elemento del arreglo


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );