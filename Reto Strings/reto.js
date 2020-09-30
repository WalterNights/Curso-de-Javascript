var ingreseTexto = document.getElementById("ingreseTexto");
var botonDeIngreso = document.getElementById("botonIngresar");

var mostrarUno = document.getElementById("imprimirUno");
var mostrarDos = document.getElementById("imprimirDos");
var mostrarTres = document.getElementById("imprimirTres");

var caracteresLimite = 45;
var ingreseTexto2 = document.getElementById("ingreseTexto");
var textPirnt = document.getElementById("limiteDeLetras");
var limiteText = document.getElementById("limiteTexto");

textPirnt.innerHTML = caracteresLimite;
ingreseTexto2.addEventListener('keydown', mostrarLetras);

botonDeIngreso.addEventListener("click", mostrarTexto);

function mostrarTexto(){
    var textoQueSeIngreso = document.getElementById("ingreseTexto").value;
    document.getElementById("imprimirTexto").innerHTML = textoQueSeIngreso;
    for (var i = 0; i < textoQueSeIngreso.length; i++){
        var lasLetras = (textoQueSeIngreso.length);
        document.getElementById("cuantasLetras").innerHTML = lasLetras;
        var ultimaLetra = textoQueSeIngreso.slice(-1);
        document.getElementById("laUltimaLetraEs").innerHTML = `${ultimaLetra.toUpperCase()}`;
        mostrarUno.style.display = "flex";
        mostrarDos.style.display = "flex";
        mostrarTres.style.display = "flex";
    }
};

function mostrarLetras(){
    var letras = ingreseTexto2.value.length;
    if (letras >= caracteresLimite){
        limiteText.style.color = "red";
    } else{
        textPirnt.innerHTML = caracteresLimite - letras -1;
        limiteText.style.color = "inherit";
    }
}
