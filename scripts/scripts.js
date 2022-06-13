const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
var imagen = document.querySelector(".Muñeco");
var botonCopiar = document.querySelector(".BotonCopiar");
botonCopiar.style.visibility = "hidden";
var ningumMensajeEncontrado = document.querySelector(".NingunMensajeEncontrado");
ningumMensajeEncontrado.style.visibility = "visible";
var textoDeseaDesencriptar = document.querySelector(".TextoDeseaDesencriptar");
textoDeseaDesencriptar.style.visibility = "visible";

/*__________Solución al reseteo de pagina_________*/

document.querySelector(".input-text-area").value = "";
document.querySelector(".input-text").value = "";

/*__________Encriptar__________*/

function btnencriptar() {

    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    imagen.style.visibility = "hidden";
    ningumMensajeEncontrado.style.visibility = "hidden";
    textoDeseaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";

}

function encriptar(stringParaEncriptar) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    stringParaEncriptar = stringParaEncriptar.toLowerCase();

    if (stringParaEncriptar.length == 0) {
        alert("No hay nada que encriptar");
        document.getElementById(id).style.display = 'flex';
        return stringParaEncriptar = ""
    }

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;

}

/*_________Desencriptar__________ */

function btnDesencriptar() {

    var textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    imagen.style.visibility = "hidden";
    ningumMensajeEncontrado.style.visibility = "hidden";
    textoDeseaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";

}

function desencriptar(stringParaDesencriptar) {

    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringParaDesencriptar.includes(matrizCodigo[i][0])) {
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar;

}

/*__________Copiar__________ */

function btnCopiar() {

    var content = document.getElementById('input-text-area');

    content.select();
    document.execCommand('copy');

    alert("Su mensaje ha sido copiado");

}