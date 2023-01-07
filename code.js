var mensaje = document.querySelector(".mensaje");
var mensajeEncriptado = document.querySelector("#area");
var btnEncriptar = document.querySelector(".btnencriptar");
var btnDesencriptar = document.querySelector(".btndesencriptar");

var titulo = document.querySelector(".titulo");
var imagen = document.querySelector(".img");
var btncopy = document.querySelector(".btncopiar");

function encriptar(){
    var msg = mensaje.value.toLowerCase();
    var msgEncriptado = msg.replaceAll("e", "enter");
    var msgEncriptado = msgEncriptado.replaceAll("i", "imes");
    var msgEncriptado = msgEncriptado.replaceAll("o", "ober");
    var msgEncriptado = msgEncriptado.replaceAll("a", "ai");
    var msgEncriptado = msgEncriptado.replaceAll("u", "ufat");

    mensajeEncriptado.value = msgEncriptado;
    titulo.style.display = "none";
    imagen.style.display = "none";
    btncopy.style.display = "inherit";
    btncopy.style.display = "show";
}

function desencriptar(){
    var msg = mensaje.value.toLowerCase();
    var msgEncriptado = msg.replaceAll("enter", "e");
    var msgEncriptado = msgEncriptado.replaceAll("imes", "i");
    var msgEncriptado = msgEncriptado.replaceAll("ober", "o");
    var msgEncriptado = msgEncriptado.replaceAll("ai", "a");
    var msgEncriptado = msgEncriptado.replaceAll("ufat", "u");

    mensajeEncriptado.value = msgEncriptado;
    titulo.style.display = "none";
    imagen.style.display = "none";
    btncopy.style.display = "inherit";
    btncopy.style.display = "show";
}

function copiar(){
    var msgenc = mensajeEncriptado.value;
    navigator.clipboard.writeText(msgenc);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btncopy.onclick = copiar;