var nombre = "Walter";
var apellido = "Hernandez";
var nombre2 = "WALTER";

var nombreEnMayuscula = nombre.toUpperCase();

var apellidoEnMinuscula = apellido.toLowerCase();

var LaPrimeraLetraDeMiNombre = nombre.charAt(0);

var cuantasLetrasTieneMiNombre = nombre.length;

//Intepolacion de texto
var nombreCompleto = `${nombre} ${apellido}`;

var nombreEnMinusculasApellidoEnMayusculas = `${nombre2.toLowerCase()} ${apellido.toUpperCase()}`;

var str = nombre.substr(0, 4);