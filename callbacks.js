const operacion = (param1, param2, cb) => cb(param1, param2);

const suma = (param1, param2) => param1 + param2 ; 

let x = operacion(5, 5, suma);
console.log(x)


const mostrarLetras = (texto) => {
    let array = texto.split('')
    for (const el of array) {
        (()=>{console.log(el)}, 3000
        )
    }
}

mostrarLetras("hola mundo")