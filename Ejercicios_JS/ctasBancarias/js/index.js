'use strict';

var nSaldoA = 0;
var nSaldoB = 0;

document.querySelector('#btnTransferirA').addEventListener('click', hacerTransferenciaA);
document.querySelector('#btnTransferirB').addEventListener('click', hacerTransferenciaB);

imprimirSaldos();

function imprimirSaldos(){
    document.querySelector('#txtSaldoFavorA').value = nSaldoA;
    document.querySelector('#txtSaldoFavorB').value = nSaldoB;
}

function hacerTransferenciaA(){
    var inputMonto = '', sMonto = 0;
    inputMonto =  document.querySelector('#txtTransaccionA');
    sMonto = Number(inputMonto.value);

    if (sMonto >= 1) {
        if (nSaldoA == 0) {
            nSaldoA = sMonto;
            inputMonto.classList.remove('error');
            imprimirSaldos();
        } else if(sMonto <= nSaldoA){
            nSaldoA -= sMonto;
            nSaldoB += sMonto;
            inputMonto.classList.remove('error');
            imprimirSaldos();
        } else {      
            inputMonto.classList.add('error');          
            imprimirMensajeError('Fondos Insuficientes!!');
        }
    }else{
        inputMonto.classList.add('error');
        imprimirMensajeError('Ingrese una cantidad mayor a 0');
    }   

}
function hacerTransferenciaB(){
    var inputMonto = '';
    var sMonto = 0;
    inputMonto = document.getElementById('txtTransaccionB');
    sMonto = Number(inputMonto.value);

    if (sMonto >= 1) {
        if (nSaldoB == 0) {
            nSaldoB = sMonto;
            inputMonto.classList.remove('error');
            imprimirSaldos();
        } else if(sMonto <= nSaldoB){
            nSaldoB =  nSaldoB - sMonto;
            nSaldoA = nSaldoA + sMonto;  
            inputMonto.classList.remove('error');          
            imprimirSaldos();
        }else{            
            inputMonto.classList.add('error');
            imprimirMensajeError('Fondos Insuficientes!!');
        }
    } else{        
        inputMonto.classList.add('error');
        imprimirMensajeError('Ingrese una cantidad mayor a 0');
    } 
}

function imprimirMensajeError(pmensaje){

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: pmensaje
      })
}
