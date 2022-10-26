// CONFIGURACION DEL SERVIDOR
const express = require('express')
const app = express()
const Port = 8780
const server = app.listen(Port, (request, response)=>{
    console.log('Primer servidor con express')
})

// MANEJO DE ERRORES AL CARGAR SERVIDOR
server.on('error' , error => console.error(`Error al levantar en el servidor ${error}`))

// FILE SYSTEM
const fs = require('fs')

//CLASES
let array = [];
let array2 = []

class Producto{
    constructor(title, price, image){
      this.title = title;
      this.price = price;
      this.image = image;
      array.push(this);
      this.id = array.length;
    }
}

class Contenedor{
    constructor(nameFile){
      this.nameFile = nameFile;
    }

    getAll() {
        fs.promises.readFile(this.nameFile, 'utf-8')
        .then(contenido => {
          array2.push(contenido);
          return array2;
        })
        .catch(err => console.log(err))
    }

    async save(){
        try{
          await fs.promises.writeFile(this.nameFile,  JSON.stringify(array));
          this.getAll()
        }
        catch(err){
          console.log(err)
        }
    }

}

//ARCHIVO.txt CON STOCK DE PRODUCTOS
let newProduct = new Producto('Celular iphone 11', 600, './image');
let newProduct2 = new Producto('Celular iphone 13', 1100, './image');
let newProduct3 = new Producto('Celular samsung s22', 800, './image');
let newObject = new Contenedor('./productos.txt' );

newObject.save(newProduct, newProduct2, newProduct3);

// GETS
app.get('/', (request, response)=>{
    response.send (`
    <h1>Mi primer servidor con Express</h1>
    <nav>
        <div>
            <a href="/">Home</a>
            <a href="/products">products</a>
            <a href="/productRandom">productRandom</a>
        </div>
    </nav>`)
})
    
app.get('/products', (request, response)=>{
    response.send(`
    <nav>
        <div>
            <a href="/">Home</a>
            <a href="/products">products</a>
            <a href="/productRandom">productRandom</a>
        </div>
    </nav>
    <div>
        <p> este es tu stock de productos${JSON.stringify(array)}</p>
    </div>`)
})
    
app.get('/productRandom', (request, response)=>{
    response.send(`
    <nav>
        <div>
            <a href="/">Home</a>
            <a href="/products">products</a>
            <a href="/productRandom">productRandom</a>
        </div>
    </nav>
    <div>
        <p> este es un producto aleatorio de tu stock ${JSON.stringify(array[Math.floor(Math.random() * array.length)])}</p>
    </div>`)
})

    






























































