var alistaIndex = document.querySelectorAll('input[type=number]'),
alistaIndex2 = [0,0,0],
aBotellasAlaSemana = document.querySelectorAll('input[type=number]'),
aBotellas = ['| ','| ','| ','| ','| ','| ','| '],
aProduccionSemana = [];

var nplantaGanadora=0, nMayorProduccionSemanalPlanta=0, produccionSemanaFabrica = 0, banderaNumPlantas =1;/*se incializa en uno para validar(el valor le cambia)*/

document.querySelector('#btnRegistrar').addEventListener('click',registrarBotellas);

function registrarBotellas(){

        if(validarIPP_IPF_Plantas()===false && validarDiasBotellas()===false){
            if(alistaIndex2[0]==0 && aBotellas[0] =='| '){
                capturarDatos();
                imprimir_alistaIndex();
                capturarDatosBotellas();
                mostrarBotellasRegistro();
                banderaNumPlantas --;
                limpiarRegistroBotellasXPlanta();
                  if(banderaNumPlantas===0){
                    mostrarResultado();
                  }
            }else if(banderaNumPlantas > 0){
                    capturarDatosBotellas();
                    mostrarBotellasRegistro();
                    banderaNumPlantas --;
                    limpiarRegistroBotellasXPlanta();
                    if(banderaNumPlantas===0){
                      mostrarResultado();
                    }
            }
        }else if(banderaNumPlantas===0){
          limpiarRegistros();
        }
}
function limpiarRegistroBotellasXPlanta(){
  document.querySelector('#numPlantas').value = '';
  document.querySelector('#day1').value = '';
  document.querySelector('#day2').value = '';
  document.querySelector('#day3').value = '';
  document.querySelector('#day4').value = '';
  document.querySelector('#day5').value = '';
  document.querySelector('#day6').value = '';
}
function limpiarRegistros(){
   /*borra alistaIndex2*/
    document.querySelector('#IPF').value = '';
    document.querySelector('#IPP').value = '';
    document.querySelector('#numPlanta').value = '';
    /*bolla outputs*/
    document.querySelector('#salida1').value = '';
    document.querySelector('#salida2').value = '';
    document.querySelector('#salida3').value = '';
    document.querySelector('#salida4').value = '';
    /*borra aProduccionSemana*/
    limpiarRegistroBotellasXPlanta();
    /*borra aBotellas*/
    document.querySelector('#oplan').value = '';
    document.querySelector('#oday1').value = '';
    document.querySelector('#oday2').value = '';
    document.querySelector('#oday3').value = '';
    document.querySelector('#oday4').value = '';
    document.querySelector('#oday5').value = '';
    document.querySelector('#oday6').value = '';
   nplantaGanadora=0; nMayorProduccionSemanalPlanta=0; produccionSemanaFabrica = 0; banderaNumPlantas =1;
    alistaIndex = document.querySelectorAll('input[type=number]');
    alistaIndex2 = [0,0,0];
    aBotellasAlaSemana = document.querySelectorAll('input[type=number]');
    aBotellas = ['| ','| ','| ','| ','| ','| ','| '];
    aProduccionSemana = [];
}
function capturarDatos(){
    var nIPF = document.querySelector('#IPF').value,
        nIPP = document.querySelector('#IPP').value,
        nPlantas = document.querySelector('#numPlanta').value;
    alistaIndex2[0]=nIPF;
    alistaIndex2[1]=nIPP;
    alistaIndex2[2]=nPlantas;
    banderaNumPlantas = Number(alistaIndex2[2]);
    /*alistaIndex2.push(nIPF,nIPP,nPlantas);*/
}

function imprimir_alistaIndex(){
  document.querySelector('#IPF').value = alistaIndex2[0];
  document.querySelector('#IPP').value = alistaIndex2[1];
  document.querySelector('#numPlanta').value=alistaIndex2[2];
}

function validarIPP_IPF_Plantas(){
  var bExisteError = false;

        for(var i =0; i<alistaIndex.length;i++){
          var minimo = Number(alistaIndex[i].min);
          var valor = Number(alistaIndex[i].value);
            if(valor < minimo){
              alistaIndex[i].classList.add('error');
              bExisteError =true;
            } else {
              alistaIndex[i].classList.remove('error');
            }
        }

  return bExisteError;
}


function validarDiasBotellas(){
    var bExisteError = false;
        for(var i =0; i<aBotellasAlaSemana.length;i++){
          var minimo=Number(aBotellasAlaSemana[i].min);
          var valor=Number(aBotellasAlaSemana[i].value);
              if(valor < minimo || valor===0){
                aBotellasAlaSemana[i].classList.add('error');
                bExisteError =true;
              } else {
                aBotellasAlaSemana[i].classList.remove('error');
              }
        }
  return bExisteError;
}

function capturarDatosBotellas(){
  var
  nPlanta = document.querySelector('#numPlantas').value,
  nDia1 = document.querySelector('#day1').value,
  nDia2 = document.querySelector('#day2').value,
  nDia3 = document.querySelector('#day3').value,
  nDia4 = document.querySelector('#day4').value,
  nDia5 = document.querySelector('#day5').value,
  nDia6 = document.querySelector('#day6').value;
  /*aBotellas.push(nPlanta,nDia1,nDia2,nDia3,nDia4,nDia5,nDia6);*/
  aBotellas[0] = aBotellas[0] +nPlanta+ '  |  ';
  aBotellas[1] = aBotellas[1] + nDia1 + '  |  ';
  aBotellas[2] = aBotellas[2] + nDia2 + '  |  ';
  aBotellas[3] = aBotellas[3] + nDia3 + '  |  ';
  aBotellas[4] = aBotellas[4] + nDia4 + '  |  ';
  aBotellas[5] = aBotellas[5] + nDia5 + '  |  ';
  aBotellas[6] = aBotellas[6] + nDia6 + '  |  ';

    if(aProduccionSemana.length == 0){
      aProduccionSemana[0] = Number(nPlanta);
      aProduccionSemana[1] = Number(Number(nDia1)+Number(nDia2)+Number(nDia3)+Number(nDia4)+Number(nDia5)+Number(nDia6));
    }else{
      aProduccionSemana[aProduccionSemana.length] =  Number(nPlanta);
      aProduccionSemana[aProduccionSemana.length] =  Number(Number(nDia1)+Number(nDia2)+Number(nDia3)+Number(nDia4)+Number(nDia5)+Number(nDia6));
    }
}

function mostrarBotellasRegistro(){
  document.querySelector('#oplan').value = aBotellas[0];
  document.querySelector('#oday1').value = aBotellas[1];
  document.querySelector('#oday2').value = aBotellas[2];
  document.querySelector('#oday3').value = aBotellas[3];
  document.querySelector('#oday4').value = aBotellas[4];
  document.querySelector('#oday5').value = aBotellas[5];
  document.querySelector('#oday6').value = aBotellas[6];

}

function mostrarResultado(){

  for(var i=1; i<= aProduccionSemana.length;i+=2){
    produccionSemanaFabrica += aProduccionSemana[i];/*calcula el IPF*/
    if(nMayorProduccionSemanalPlanta<aProduccionSemana[i]){
      nMayorProduccionSemanalPlanta=Number(aProduccionSemana[i]);/*captura la mayor produccion semanal*/
      nplantaGanadora = aProduccionSemana[i-1];/*indica la planta quecon la mayor produccion*/
    }
  }
/*respuestas*/
  var
  sclasificacionFabrica = 'La clasificación de la fábrica es: ',
  splantaClasificacion = 'La clasificación de la planta ' + nplantaGanadora +' es: '  ,
  smayorProdSemanal = 'La mayor producción semanal: ' + nMayorProduccionSemanalPlanta + ' botellas',
  splantaGanadora = 'Y fue producida por la planta: ' + nplantaGanadora;
  /*respuestas*/
/*clasifica el IPF*/
      if(produccionSemanaFabrica > alistaIndex2[0]){
          sclasificacionFabrica += 'Muy buena' ;
      }else if (produccionSemanaFabrica ===alistaIndex2[0]) {
          sclasificacionFabrica += 'Regular'
        }else {
          sclasificacionFabrica += 'Deficiente';
        }

        if(nMayorProduccionSemanalPlanta >alistaIndex2[1]){
            splantaClasificacion += 'Excelente';
        }else if (nMayorProduccionSemanalPlanta == alistaIndex2[1]) {
            splantaClasificacion += 'Buena'
          }else {
            splantaClasificacion += 'Mala';
          }
/*clasifica el IPF*/
      document.querySelector('#salida1'). value = splantaClasificacion;
      document.querySelector('#salida2'). value = smayorProdSemanal;
      document.querySelector('#salida3'). value = splantaGanadora;
      document.querySelector('#salida4'). value = sclasificacionFabrica;
}
