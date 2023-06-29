const fs = require('fs')
const pelicula = require("./peliculas");

let mostrar;
function mostrarDetalles(listado){
    for (let i=0;i<listado.length;i++){
    console.log((i+1)+"."+"calificacion :"+listado[i].calificacion,"-premios: "+listado[i].premios,"-duracion: "+listado[i].duracion,"-precio: "+listado[i].precio);
    }
}
//mostrarDetalles(pelicula);

//const mostrar2=require("mensaje.txt")
const leer = fs.readFileSync("mensaje.txt","utf8")
console.log(leer);