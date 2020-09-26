var user; //variable del usuario aun no espesificada
var pc = Math.floor(Math.random()* (3 + 1 -1) +1); //la función Math.floor asigna un número aleatorio entre 1 y 3 a la var pc
var piedra = 1;
var papel = 2;
var tijeras = 3;
var score = 0;

//document.getElemetById(); toma las variables de los botones del HTML

var piedraButton = document.getElementById("piedra"); 
var papelButton = document.getElementById("papel");
var tijerasButton = document.getElementById("tijeras");
var playButton = document.getElementById("play");
var resetButton = document.getElementById("reset");
var finalWinner = document.getElementById("ganador");
var ganasteVentana = document.getElementById("resultado-ganaste");
var perdisteVentana = document.getElementById("resultado-perdiste");
var empateVentana = document.getElementById("resultado-empate")
var escojeTitulo = document.getElementById("escoje");
var seleccionPiedra = document.getElementById("opcionPiedra");
var seleccionPapel = document.getElementById("opcionPapel");
var seleccionTijeras = document.getElementById("opcionTijeras");
var seleccionPiedraPc = document.getElementById("opcionPiedraPc");
var seleccionPapelPc = document.getElementById("opcionPapelPc");
var seleccionTijerasPc = document.getElementById("opcionTijerasPc");

//addEventListener(); permite activar una funcion dependiendo del evento ejecutado

piedraButton.addEventListener("click", piedraUsuario);
papelButton.addEventListener("click", papelUsurario);
tijerasButton.addEventListener("click", tijerasUsuario);
playButton.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);

//Funciones para asignar el valor al usuario anteriormente mencionadas

function piedraUsuario(){
    user = 1;
    console.log(" elejiste piedra")
    papelButton.style.display = "none";
    tijerasButton.style.display = "none";
    playButton.style.display = "block";
    escojeTitulo.style.display = "none";
    seleccionPiedra.style.display = "block";
}
function papelUsurario(){
    user = 2;
    console.log(" elejiste papel")
    piedraButton.style.display = "none";
    tijerasButton.style.display = "none";
    playButton.style.display = "block";
    escojeTitulo.style.display = "none";
    seleccionPapel.style.display = "block";
}
function tijerasUsuario(){
    user = 3;
    console.log(" elejiste tijeras")
    piedraButton.style.display = "none";
    papelButton.style.display = "none"
    playButton.style.display = "block";
    escojeTitulo.style.display = "none";
    seleccionTijeras.style.display = "block";
}

//Funcion para darle repetir al juego asidnando otro valor aleatorio al pc

function resetGame(){
    pc = Math.floor(Math.random()* (3 + 1 -1) +1);
    piedraButton.style.display = "block";
    papelButton.style.display = "block";
    tijerasButton.style.display = "block";
    playButton.style.display = "none"
    resetButton.style.display = "none";
    perdisteVentana.style.display = "none";
    ganasteVentana.style.display = "none";
    empateVentana.style.display = "none";
    escojeTitulo.style.display = "block";
    seleccionPiedra.style.display = "none";
    seleccionPapel.style.display = "none"
    seleccionTijeras.style.display = "none";
    seleccionPiedraPc.style.display = "none";
    seleccionPapelPc.style.display = "none";
    seleccionTijerasPc.style.display = "none";
}

function playGame(){
    switch (true){
        case (user == pc): 
            empateVentana.style.display = "block";
            break;
        case (user == 1 && pc == 3 || user == 2 && pc == 1 || user == 3 && pc == 2):
            ganasteVentana.style.display = "block";
            break;
        default:
            perdisteVentana.style.display = "block";
    }
    piedraButton.style.display = "none";
    papelButton.style.display = "none"
    tijerasButton.style.display = "none"
    playButton.style.display = "none"
    resetButton.style.display = "block";
    escojeTitulo.style.display = "none";
    switch(pc){
        case 1:
            seleccionPiedraPc.style.display = "block";
            break;
        case 2:
            seleccionPapelPc.style.display = "block";
            break;
        case 3:
            seleccionTijerasPc.style.display = "block";
            break;
        default:
    }
}

function score(){
    if (user == 1 && pc == 3){
        score++; 
        console.log(score);
    }
}
