var miAuto = { //Objeto
    marca: "Toyota", //Caracteristicas del objeto
    modelo: "Corolla", //Caracteristica tipo string
    annio: 2020 //Caracteristica tipo number
};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){ //Una funcion dentro de un objeto, se le llama Metodo
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//La forma de llamar un objeto es con un . y luego la caracteristica

miAuto.marca

//La forma de llamar un metodo es igual que la anterior pero teniendo en cuenta que es una funcion, y debemos finalizar con ()

miAuto.detalleDelAuto();