var cambiarTitulo = document.getElementById("p");

function create() {
    // createElement
    var elementNode = document.createElement("li");
    var elementNode = document.createElement("a");
    // createTextNode
    cambiarTitulo = cambiarTitulo.replace("p", "");
    var textNode = document.createTextNode('Saludos');

    elementNode.appendChild(textNode);
    document.body.appendChild(elementNode);
}