const fs = require('fs');
// const path = require('path');

// EJERCICIO ENTREGABLE


// EJERCICIOS DE LA CLASE
// PRIMER EJERCICIO (FS SYNC)

let fecha = new Date();
let files = fs.writeFileSync('./fyh.txt', JSON.stringify(fecha));
let readFiles = fs.readFileSync('./fyh.txt', 'utf-8');
console.log(readFiles)

// SEGUNDO EJERCICIO (FS ASYNC)

const info = 
{
    contenidoStr : 'Hola Mundo de NodeJs',
    contenidoObj : {name: 'Matias', age: 20, job: 'Developer'},
    size: 20

}

const read = ()=> {
    fs.readFile('./test/package.json', 'utf8', (err, data)=>{
      err ? console.log('Ups, algo no funciono') : console.log(data)
    })
}

const guardar = ()=>{
    fs.writeFile('./test/info.txt', JSON.stringify(info), (err)=>{
        err ? console.log('Ups, algo no funciono') : console.log('Texto guardado con exito');
    })
}

read();
guardar();