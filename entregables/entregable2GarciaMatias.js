const fs = require('fs')

let array = [];
let array2 = [];

class Producto{
  constructor(title, price, image){
    this.title = title;
    this.price = price;
    this.thumbnail = image;
    array.push(this);
    this.id = array.length;
  }
}

class Contenedor{
    constructor(nameFile){
      this.nameFile = nameFile;
    }

    async save(obj){
      try{
        await fs.promises.writeFile(this.nameFile,  JSON.stringify(array))
        console.log(obj.id)
      }
      catch(err){
        console.log(err)
      }
    }

    getAll() {
        fs.promises.readFile(this.nameFile, 'utf-8')
        .then(contenido => {
          array2.push(contenido);
          console.log(array2)
          return array2;
        })
        .catch(err => console.log(err))
    }

    async deleteAll() {
      try{
        await fs.promises.unlink(this.nameFile);
        array.splice(0, array.length);
        await fs.promises.writeFile(this.nameFile, JSON.stringify(array))
      }
      catch(err){
        console.log('Ha ocurrido un error', err)
      }
    }

    async getById(number){
     try{
      let newArray =  array.filter(el => el.id === number);
      console.log(newArray);
     }
     catch(err){
      console.log('Ha ocurrido un error', err)
     }
    }

    async deleteById(number) {
      let newArray =  array.filter(el => el.id === number);
      await fs.promises.writeFile(this.nameFile, JSON.stringify(newArray));
    }

}

let newObject = new Contenedor('./archivoPrueba.json' );

let newProduct = new Producto('Celular', 1500, './image');
let newProduct2 = new Producto('Celular2', 17700, './image');
newObject.save(newProduct);
newObject.save(newProduct2);








