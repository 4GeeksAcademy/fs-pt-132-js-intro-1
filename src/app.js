import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// tipos de datos

//number --> 1, 0.1, -5, 657465468765476
console.log('tipo de 1 ',typeof 1)
console.log('tipo de 0.5 ',typeof 0.5) //float

//texto --> todo lo que este entre comillas, "", '', ``
console.log('tipo de "0.5" ',typeof "0.5") 
console.log('tipo de pepe ',typeof 'pepe') 
console.log('tipo de pepe raro ',typeof `pepe
  es
  el
  mejor
  `) 
// `` --> significan texto pre-formateado

// undefined ---> no esta definido
// null --> esta vacio
// NaN --> not a number
console.log(5/'n')
//console.log('b'+'a'+ + 'a' )

//boolean  --> solo aceptan 1/0 == true / false

//objetos -> tipo de dato

//objetos --> {} y sean pares de llave: valor van a ser objetos
const person = {
  name: 'pepe',
  age: 25,
  alive: true,
}

//los objetos DESCRIBEN ALGO

//si quiero una coleccion de datos, que esten relacionados entre si o no tengan nada que ver uno con otro
// ARRAY definido por []
// 
console.log('{}',typeof {})
console.log('[]',typeof [])
console.log(Array.isArray({}))
console.log(Array.isArray([]))

// 
//[1,2,3,4,5,6, 'pepe', 'lola', true, false, {name: 'que hago aqui?'}, [1,2,3]]


//variables

//var age = 5 // NO SE HACE YA, NO SE USA VAR

//SCOPE --> alcance que tiene algo

let age = 5
 // se les puede reasginar valor
// declaracion de variable
 let pepe
 //asignacion de valor
 pepe = 'pepe'
 //inicializacion de una variable
 let lola = 'lola'
console.log("lola o marta?", lola)
 lola = 'marta'
console.log('let pepe', pepe)
console.log("lola o marta?", lola)

const version = 1
console.log(version)
// se usa mas de lo que crees

const personObj = {
  name: 'pepe',
  age: 25,
  alive: true,
}

personObj.name = 'matia' // perfecto

console.log(personObj)

const arr = [1,2,3]
console.log(arr);
arr[0]=6 // se puede hacer
//arr = [6,2,3] // NO SE PUEDE
console.log(arr);

//las const van a permitir que se MODIFIQUE TODO SU CONTENIDO pero NO PERMITE QUE SE LE REASIGNE VALOR
//          text   variable            
console.log('age', age)


// operaciones matematicas
/*
+ 2+2
- 2-2
* 2*2
/ 2/2
** 2**2
% ---> modus ---> devolver el resto de la division
*/
console.log('2/2',2/2)
console.log('3/2',3/2)
console.log('2%2',2%2)
console.log('3%2',3%2)
console.log(3**3)
console.log(3)

// OPERADORES LOGICOS ---> se resuelven COMO BOOLEAN
/*
>
<
>=
<=
== --> igual a 
=== ---> ESTRICTAMENTE igual a
! -> negacion
!! --> doble negacion (es una afirmacion  :guiño: :guiño:)
y --> && --> AND --> para que sea true, ambas condiciones se deben de cumplir
o --> || --> OR ---> para que sea true, UNA de las condiciones se debe de cumplir
*/

console.log(3<2)
console.log(3<3)
console.log(3<=3)
console.log(3==3) // true
console.log(3=='3') // true
console.log(3===3) // true ---> === es el mas usado -> ES exactamente igual
console.log(3==='3') // false 
console.log(true)
console.log(!true)

console.log(3!=='3') // true --> NO ES exactamente igual
console.log(4!=4) // no es igual
console.log(!!true) // si yo quiero saber el valor de un booleano  

console.log(10<15 && 9>3) // se cumplen las dos, es verdadero
console.log(10<1 && 9>3) // se cumple una o ninguna, es falso
console.log(10<1 || 9>3) // se cumple una, es verdadero



//funciones


//funcion clasica

function nombreFuncionClasica (parametros) {
  //bloque de codigo
  return  //retorno de la funcion
}

//funcion flecha --> mas nueva
const nombreFuncionFlecha = (params) => {
  //bloque de codigo
  return //retorno de la funcion
}


const dosMasDos = () => {
  return  (
    2+2
  ) // recomendado
}
//para ejecutar una funcion, TIENE que ponerse ()
console.log(dosMasDos) // llamando la funcion 
console.log(dosMasDos()) // ejecutando la funcion


const tresMasTres = () => {
  console.log('dentro de funcion ',3+3)
} // --> como no tiene return su return es indefinido

console.log('console.log solitario',tresMasTres());  // 'console.log solitario', undefined
tresMasTres() // la funcion se va a ejecutar, dentro de la funncion tenemos console.log dentro de funcion 6


const resumida = () => 2+2 // one liner

const noSePuedeHacerEnUnaLinea = () => {
  let subtotal = 5+9
  let total = subtotal *25
  return total
}

//camelCase --> primeraPalabraMinusculaRestoCapitalizada
//las funciones DEBEN ser reutilizables
// const aumentarEnDos = (num) => {
//   const result = num+2
//   return result
// }
// const aumentarEnDos = (num) => {
//   return num+2
// }
const total = 0 // variable global porque NO pertenece a ninguna funcion O pertenece a la funcion padre que ejecuta otras funciones
const aumentarEnDos = (num) =>{
  //todo lo que esta dentro de la funcion, SOLO EXISTE DENTRO DE LA FUNCION
   const total = num+2
  return total
}
console.log('total fuera de funcion', total)
console.log(aumentarEnDos(75))
console.log('total fuera de funcion', total)
console.log(aumentarEnDos(total))
console.log('total fuera de funcion', total)

//declaracion let age 
//asignacion age = 55

//el argumento de una funcion lo podemos pensar como una variable que se declara en la funcion y se le asigna el valor al ejecutar la funcion

const sumaCualquierDosNumero = (num1, num2) => {
  return num1 + num2
}

console.log(sumaCualquierDosNumero(5,5))
console.log(sumaCualquierDosNumero(52,14))

const sayHi = (name) => {
  return `Hola ${name}. Como estas?` 
}

console.log(sayHi('pepe'))
console.log(sayHi(11))


console.log(sumaCualquierDosNumero(aumentarEnDos(75), sumaCualquierDosNumero(17,83)))
console.log(sumaCualquierDosNumero(aumentarEnDos(75), sumaCualquierDosNumero(17,83)) + 'mm')
