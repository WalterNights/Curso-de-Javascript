function buscar()
        {
            // Obtenemos el valor de la cadena a buscar
            var cadena=document.getElementById("search").value;
 
            // Obtenemos el valor del textarea donde reemplazar el texto
            var textarea=document.getElementById("ta").value;
 
            // Creamos una nueva expresion regular en la que especificamos
            // la cadena a buscar con los parametros gi
            //  g=(global search) Busca en todo el texto
            //  i=(Case-insensitive) No diferencia de mayusculas y minusculas
            var re=new RegExp(cadena,"gi");
 
            // obtenemos en un array todas las coincidencias
            var coincidencias=textarea.match(re);
 
            if(coincidencias)
            {
                document.getElementById("coincidencias").innerHTML="se han encontrado "+coincidencias.length+" coincidencias";
 
                // Hacemos el reemplazo por un campo vacio, y lo mostramos en el
                // div con id=resultado
                document.getElementById("ta").value=textarea.replace(re,'');
 
            }else{
                document.getElementById("coincidencias").innerHTML="NO se ha encontrado ninguna coincidencia";
            }
        }