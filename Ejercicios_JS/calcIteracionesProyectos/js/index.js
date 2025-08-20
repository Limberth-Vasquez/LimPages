'use strict';

function CalcularAl2Porciento() {
    let txtCalificacionMoodle = document.getElementById('txtCalificacionMoodle');
    let valor = txtCalificacionMoodle.value;

    if (valor == '' || valor == null || valor == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error, ingrese la nota del quiz!'
        });
        //alert('Error, ingrese un valor');

        return;
    }

    if (valor < 0 || valor > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error, el valor debe ser mayor a 0 y menor a 100!'
        });
        //alert('Error, el valor debe ser mayor a 0 y menor a 100');
        return;
    } else {
        var resultado = ((valor * 2) / 100).toFixed(4);
        document.getElementById('Resultado').innerHTML = 'Resultado en base a 2% es:' + resultado;
    }
}

function CalcularIteracion() {

    let inputPorcentaje = document.getElementById('txtPorcentaje');
    let inputProfe1 = document.getElementById('txtCalificacionIteracionProfe1');
    let inputProfe2 = document.getElementById('txtCalificacionIteracionProfe2');
    let txtGrupo = document.getElementById('txtGrupo');

    let grupo = txtGrupo.value;
    let porcentajeVal = Number(inputPorcentaje.value);
    let profe1Val = Number(inputProfe1.value);
    let profe2Val = Number(inputProfe2.value);

    if (!validarIteracionCalculo(porcentajeVal, profe1Val, profe2Val)) {
        return;
    }
    let SumaProfes = profe1Val + profe2Val;
    let PromProfes = (SumaProfes / 2);
    var resultadoPorcentual = ((PromProfes * porcentajeVal) / 100).toFixed(4);
    var resultadoNota = (resultadoPorcentual * 100) / porcentajeVal;
    let respuesta = 'Resultado de la iteración para el grupo \n' +
        grupo + ' es: \n' + resultadoPorcentual + ', equivale en nota a: ' + resultadoNota;
    document.getElementById('ResultadoIteracion').innerHTML = respuesta;

}

function validarIteracionCalculo(porcentajeVal, profe1Val, profe2Val) {
    if (porcentajeVal == undefined || porcentajeVal == null || porcentajeVal == '' || porcentajeVal <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese un porcentaje!'
        });
        return false;
    }
    if (porcentajeVal > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese un porcentaje menor a 100!'
        });
        return false;
    }
    if (profe1Val == undefined || profe1Val == null || profe1Val == '' || profe1Val <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese la nota del profe 1!'
        });
        return false;
    }
    if (profe1Val > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese un calificacion para el profe 1 menor a 100!'
        });
        return false;
    }
    if (profe2Val == undefined || profe2Val == null || profe2Val == '' || profe2Val <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese la nota del profe 2!'
        });
        return false;
    }
    if (profe2Val > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese un calificacion para el profe 2 menor a 100!'
        });
        return false;
    }
    return true;
}