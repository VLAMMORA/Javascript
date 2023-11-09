// console.log("Funcionando")


// var nombre = "Mi nombre es Marcelo "

// console.log(nombre)


// // alert(nombre)


// //Function
// function Sumar() {
    
//     alert("Funcionando")

    
// }

// function Holaaa() {
//     console.log("Me diste click")
// }

//Javascript 
// 1-Tipos de datos
// 2-Arreglos 
// 3-Objetos 
// 4-Ciclos
// 5-Condicionales
// 6-Funciones 


//tipos de datos

var mascota = "gato" // String texto

var edad = 34 //integer numerica

console.log(mascota)

console.log(edad)

//array arreglo 


// Arrays [] para representar datos Multiples 
var mascotas= ["Gato","perro","conejo","ballena",25]  //array arreglo muchos 

console.log(mascotas[4])
//Para Mostrar la informacion de un array, se coloca el nombre del array y [posicion] se cuenta a partir de 0. mascotas[4]

// Objeto definir caracteristicas que algo que represente la vida real {} llaves , corchetes 

var Celular ={
    marca: "Samsung",
    color: "Negro",
    cantidad_camaras: 2,
    cantidad_pantalla:1

}
//Para Mostrar la informacion de un objeto, se coloca el nombre del objeto y .Celular.marca
console.log(Celular.marca)  
console.log(Celular.color)

//Clase 3 JS 
//Contatenar - Unir texto 
var nombre = "Pepito "

console.log("Mi nombre es "+  nombre)

//Opcion 1
console.log("El estudiante"+" "+nombre+"es bueno es javascript")
//Opcion 2 
console.log("El estudiante",nombre,"es bueno es javascript")
//Opcion 3 

console.log(`El estudiante va a usar backticks ${nombre} al estudiante le gusto o no le guste esta opcion   `)

//Clase 3 Mostrar informacion en un de un ciclo o bucle en un elemento HTML

//Ciclos 
// Arrays [] para representar datos Multiples 
var mascotas= ["Gato","perro","conejo","ballena",25]  //array arreglo muchos 

console.log(mascotas[0])

console.log(mascotas[3])


//Foreach

//Escribi foreach y tab 
//Reemplazar la palabra array con el arreglo que han creado 
mascotas.forEach(element => {
    //Aqui se pone el codigo 
    console.log(element)
    //mostrar el 2 
    // mostrar todos al limite de elementos 
});


var Estudiantes = ["Daniel","Ariel","Chris","Checho","Adrian","Carlos","Melani"]

//Posicion 3 
//Elementos 7

console.log(Estudiantes[3])

Estudiantes.forEach(element => {
    console.log(element)
});

//Capturamos el elemento de HTML por medio del ID 
var midiv = document.getElementById("clientes")

console.log(midiv)
//Con Inner HTML podemos ingresar texto 
midiv.innerHTML = "Hola mundo "

var VLA = document.getElementById("VLA")

VLA.innerHTML = "Academia de tecnologia"

var cursos = ["Cisco","SQL","Frontend"]

cursos.forEach(element => {
    console.log(element)
});

var Lista = document.getElementById("Lista")

cursos.forEach(element => {
    console.log(element)
    Lista.innerHTML += element
});



