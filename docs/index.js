import cipher from './cipher.js';
//trae el boton cifrar y le da una funcion
document.getElementById("code").addEventListener("click", resultado)
function resultado() {
    //trae el valor del mensaje y el numero para el desplazamiento ingresado por el usuario
    //y muestra el resultado de encode en la interfaz 
    let mensaje = document.getElementById("mensaje").value
    let desplazamiento = parseInt(document.getElementById("numcod").value);
    document.getElementById("codigo").innerHTML = cipher.encode(desplazamiento, mensaje)
    }
 //trae el boton descifrar y le da una funcion 
document.getElementById("decode").addEventListener("click", resultado2);
    function resultado2() {
    //trae el valor del mensaje codificado y el numero para el desplazamiento ingresado por el usuario
    //y muestra el resultado de decode en la interfaz
    let mensaje = document.getElementById("mensaje2").value
    let desplazamiento = parseInt(document.getElementById("numdecod").value)
    document.getElementById("codigo2").innerHTML = cipher.decode(desplazamiento, mensaje)
    }

