let p = new Promise((resolve, reject)=>{
    // cuerpo de la promesa
    //async //hacer una petición a API
    let a = 1+3
    // si se cumple o no el código vamos a poder resolver o rejectar la promesa
    if(a=3){
        resolve("success")
    }else{
        reject("Failed")
    }
})
// callback es una función que se recibe por parámetros dentro de otra función

// cuando la promesa se resuelve, se usa then
p.then((message)=>{
    console.log("estas en el then " + message)
}).catch(()=> console.log("estas en el catch " + message))
// con el catch atrapamos las promesas no resueltas
// finally() : cuando queremos ver que se han completado las promesas resueltas
// como las rejectadas

// --------------------------------------------------------------------------------
/*
xhr o xmlHTTPRequest
fetch
axios
axios(async/await)=> permite no usar la sintaxis de promise
superagent
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(json => console.log(json))


// map()
// es una función a la cual le podemos pasar un callback
const items=[
    {nombre:"bicicleta", precio:500},
    {nombre:"Monitor", precio:300},
    {nombre:"Celular", precio:80},
    {nombre:"Teclado", precio:50},
    {nombre:"Mouse", precio:30},
    {nombre:"Headset", precio:20},
    {nombre:"Laptop", precio:700},
]

// el primer parámetro de map es el objeto en cada una de las iteraciones, el 
// el segundo el índice en el recorrido
const returnItems = items.map((cualquierCosa, indice)=>{
    return `[${indice+1}] Item:${cualquierCosa.nombre} Precio: ${cualquierCosa.precio}`
})
// callback: función que puede ser pasada por parámetro dentro de otra función
// map(()=>)
// las funciones en js son ciudadanos de primer nivel
// podemos pasarlas por parámetros, podemos devolver funciones, asignar a variables 
// funciones
// map va a recorrer el array pero no lo va a mutar
console.log(returnItems)
// map recorrió el array y devolvió la propiedad que le quisimos pasar
// en cada iteración obtengo valor de un item en particular
// la diferencia con el forEach es que no se puede retornar algo
// no permite retornar datos
console.log(items)
// map no muta el array original
// [${indice+1}] =para que el índice no arranque en 0
