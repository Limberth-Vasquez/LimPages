'use strict';

let btnEncender = document.getElementById('btnEncender');
let btnApagar = document.getElementById('btnApagar');
let imgBombilla = document.getElementById('myImage');


btnEncender.addEventListener('click', Encender);
btnApagar.addEventListener('click', Apagar);

function Encender() {
    imgBombilla.src = './img/pic_bulbon.gif';
}

function Apagar() {
    imgBombilla.src = './img/pic_bulboff.gif';
}

getFechaHoy();
function getFechaHoy() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    let fechaHoy = document.getElementById('copyright');
    fechaHoy.innerText = 'Copyright © ' + today + ' All Right Reserved | Limberth Vasquez Quesada';
}