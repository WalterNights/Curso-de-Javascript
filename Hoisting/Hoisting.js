//esto es un hoisting

console.log(miNombre);

var miNombre = "Walter";


hey();

funtion hey(){
    console.log("Hola " + miNombre);
}