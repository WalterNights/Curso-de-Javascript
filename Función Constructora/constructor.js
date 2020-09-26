//Funcion Constructora (Template construido)

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Instancia para generar nuevos Objetos

var autoNuevo = new auto("Tesla", "Model 3", 2020);