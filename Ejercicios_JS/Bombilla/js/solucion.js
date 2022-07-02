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