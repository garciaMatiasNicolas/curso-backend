// ENTREGABLE 1 //

const misLibros = [{nombre:"Viaje al centro de la tierra", autor:"Julio Verne", año: 1864 }, {nombre:"Ciudades de papel", autor: "Jhoon Green", año: 2008}]

class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = misLibros;
        this.mascotas = [];
    }

    getFullName(){
        console.log (`Tu nombre completo es ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombre){
        this.mascotas.push(nombre)
        console.log(this.mascotas)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    getBooksNames(){
        let array = []
        this.libros.forEach((el)=>{
            array.push(el.nombre)
        })
        console.log(array)
    }

}

const usuario = new Usuario("Matias", "Garcia", misLibros);

console.log(usuario);
usuario.getFullName();
usuario.addMascota("Nala");
usuario.addMascota("Rocco")
usuario.countMascotas();
usuario.getBooksNames();

