var seleccionMarca = document.getElementById("marcaHTML");
var seleccionModelo = document.getElementById("modeloHTML");
var seleccionyear = document.getElementById("yearHTML");
var listaSeleccionada = document.getElementById("listaAuto");
var botonRandom = document.getElementById("botonRandom");

//Funcion Constructora

function auto(Marca1, Modelo1, Year1){
    this.Marca = Marca1;
    this.Modelo = Modelo1;
    this.Año = Year1;
}

//Seleccion Manual de las caracteristicas del Auto

document.getElementById('textoMarca').addEventListener("change", marcaSeleccionada);
document.getElementById('textoModelo').addEventListener("change", modeloSeleccionado);
document.getElementById('textoYear').addEventListener("change", yearSeleccionado);

//Seleccion Random de las caracteristicas del Auto

botonRandom.addEventListener("click", randomBoton);

//Funciones del selector Manual de las caracteristicas del Auto

function marcaSeleccionada(){
    var marca0 = document.getElementById('textoMarca').value;
    if (marca0 != '')
    {
        document.getElementById('marcaResultado').innerHTML = marca0;
    }
    else
    {
        document.getElementById('marcaResultado').innerHTML = "Agrega la marca.";
    }  
}

function modeloSeleccionado(){    
    var modelo0 = document.getElementById('textoModelo').value;
    if (modelo0 != '')
    {
        document.getElementById('modeloResultado').innerHTML = modelo0;
    }
    else
    {
        document.getElementById('modeloResultado').innerHTML = "Agrega el modelo.";
    }
}

function yearSeleccionado(){
    var year0 = document.getElementById('textoYear').value;
    if (year0 != '')
    {
        document.getElementById('yearResultado').innerHTML = year0;
    }
    else
    {
        document.getElementById('yearResultado').innerHTML = "Agrega el año.";
    }
}

//Funcion del selector Random de las caracteristicas del Auto

var marcaAlAzar =["Toyota", "Chevrolet", "Mazda", "Renault", "wolsvagen"];
var modeloAlAzar =["classic", "Vintage", "Sport", "4x4", "Luxury"];
var yearAlAzar =["1980", "1990", "2018", "2019", "2020"];

function randomBoton(){
    for (var i = 0; i <= 15; i++){
        var marcaRandom = Math.floor(Math.random()* marcaAlAzar.length);
        var Marca2 = marcaAlAzar[marcaRandom];

        var modeloRandom = Math.floor(Math.random()* marcaAlAzar.length);
        var Modelo2 = modeloAlAzar[modeloRandom];

        var yearRandom = Math.floor(Math.random()* yearAlAzar.length);
        var Year2 = yearAlAzar[yearRandom];

        var nuevoAuto = new auto(Marca2, Modelo2, Year2);
        console.log(nuevoAuto);
    
        document.getElementById('remplazarMarca').innerHTML = Marca2;
        document.getElementById('remplazarModelo').innerHTML = Modelo2;
        document.getElementById('remplazarYear').innerHTML = Year2;
    }
}