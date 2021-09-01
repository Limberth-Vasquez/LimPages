var enAnimacion;
function empezar(){
	arrancar();
	enAnimacion=false;
	estampilla= document.getElementById("estampilla"); player=document.getElementById("player");
	pop1=document.getElementById("pop1");
	pop2=document.getElementById("pop2");
	pop4=document.getElementById("pop4");
	apuntador=document.getElementById("apuntador");
	tux= document.getElementById("pop2");
	infoConnotar=document.getElementById("infoConnotar");
	player2=document.getElementById("player2");
	fod=document.getElementById("logoFod"); 
	mep=document.getElementById("logoMep"); 
	indexAnim =0; 
	enmarcarRes(); sl(0);
	presentarUnidad();  
	memoria=new Array();
	levantarPestanas(); 
	
}

function getData(atri ) {return this.getAttribute(atri); }
var misDatosAnim; 
// Piizarras de la esfera: un arreglo que almacena el texto y los recursos divulgativos. Primer pizarra no. 0
var paquetes = new Array (
// ----------------------------------------  Cabecera de la pizarra de creditos, pizarra 0 --------------------------------------
"<div style='background-color:white; ' >"+
"<p class='tituloD'   >Créditos.</p>"+
"<img id='metafora'  style='' src='./recursos/contenidos0/Creditos.png' style='display:block; ' />",
//***************************************  Primera pizarra posición 1 
"<div style='background-color:white;  position:relative;'  >"+"<p class='retroMetafora'  id='retroalimentar' ></p>"+
"<p class='tituloD'   style='margin-bottom:0px; ' >Mi Primer Programa Musical</p>"+


//****************************** Icono 1 ******************************
"<div    class='icoMetaf'    data-titulo='Hola' style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='2. Bloque Tocar Tambor'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:66%; left:25%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick='connotarPotterDiario(0, \"\",  \"\" , \"\" ) ; playExplain(\"./recursos/contenidos2/AudioDiario/Tambor1.mp3  \");' "+
		"onmouseover='retroalimenta(\"2) Finalidad: Explorando el bloque de programación:<br/> tocar tambor 1 durante # pulsos \");' onmouseout='quitarRetro();' />"+
"</div>"+
//****************************** Icono 2 ******************************
"<div    class='icoMetaf'    data-titulo='Video explicativo AniConSon.mp4'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='3. Video AniConSon'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:52%; left:41%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(1, \"\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/Apariencia2.mp3  \");' "+
	    "onmouseover='retroalimenta(\"3) Finalidad: Animar un instrumento según el sonido que produce. \");' onmouseout='quitarRetro();' />"+
"</div>"+
//****************************** Icono 3 ******************************
"<div    class='icoMetaf'    data-titulo='Video explicativo TocarNotaPia.mp4'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='4. Video TocarNotaPia'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:32%; left:50%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(2, \"\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/Nota3.mp3  \");' "+
	    "onmouseover='retroalimenta(\"4) Finalidad: Tocar notas musicales en un piano. \");' onmouseout='quitarRetro();' />"+
"</div>"+
//****************************** Icono 4 *******************************

"<div   class='icoMetaf'    data-titulo='Archivo de Scratch PianoMiMelodía.' style=' text-align:center; margin:10px; ' >"+
	"<img   title='6.1 PianoMiMelodía.'  onclick='ilustrarN (\"./recursos/contenidos1/pianomelodia.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos1/descargableu1/5.1PianoMiMelodia.sb2\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos1/GrabarMelodia.mp3  \");' "+
     "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:32%; left:65%; ' "+
	"src=' ./recursos/iconosN/icoHtml.png' "+
	"onmouseover='retroalimenta(\"6.1) Finalidad: Crear nuestra propia melodía \");' onmouseout='quitarRetro();'  />"+
"</div>"+
//******************************* Icono 5 *******************************
"<div    class='icoMetaf'     style=' text-align:center; margin:0px;' >"+
	"<img  class='icoMetafora'  title='6.2) Grabar audios en Scratch'  "+
	"style='width:70px;  position:absolute; top:38%; left:79%; width:70px;  margin-top:0px;  '  src=' ./recursos/iconosN/icoImg2.png'  "+
	"onclick='ilustrar (\"./recursos/contenidos1/GrabarSonido.png\", 7, 3, anchoPizarra-50);  playExplain(\"./recursos/contenidos1/GrabarAudio.mp3  \");"+
	"digitarSobre (\"zonaDigitar\", 650,500, \"Pasos para grabar audio |en Scratch\", 100, 30, 35, -1 );  '  "+
	"onmouseover='retroalimenta(\"6.2) Estudiar la ficha cómo grabar audios en Scratch \");' onmouseout='quitarRetro();' />"+
  "</div>"+
//******************************** Icono 6 *******************************
"<div    class='icoMetaf'    data-titulo='Video explicativo TocarSonEspe.mp4'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='7. Video Tocar Son Espe'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:15%; left:89%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(6, \"\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/SonidoEsperar4.mp3  \");' "+
	    "onmouseover='retroalimenta(\"7) Finalidad: Componer un arreglo musical. \");' onmouseout='quitarRetro();' />"+
"</div>"+

"<img id='metafora'  style='' src='./recursos/contenidos2/metafora1.png' style='display:block; ' />"+
"</div>",
//************************************** Segunda pizarra del arreglo POSICION no. 2 **********************************//
"<div style='background-color:white;  position:relative;'  >"+"<p class='retroMetafora'  id='retroalimentar' ></p>"+
"<p class='tituloD'   style='margin-bottom:0px; '    >Un Loco Arreglo Musical</p>"+

//***************************** Icono 1 *******************
"<div    class='icoMetaf'    data-titulo='Importar Extensiones'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='2.1 Importar Melodías a Scratch'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:55%; left:8%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(3, \".\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/Importar5.mp3  \");' "+
	    "onmouseover='retroalimenta(\"2.1) Finalidad: Aprender a importar audio a Scratch. \");' onmouseout='quitarRetro();' />"+
"</div>"+
//**************************** Icono 2 ********************
"<div    class='icoMetaf'    data-titulo='Editar Melodía'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='3.1 Editar Melodía'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:53%; left:23%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(4, \".\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/Editando6.mp3  \");' "+
	    "onmouseover='retroalimenta(\"3.1) Finalidad: Aprender a editar una melodía con efectos de audio. \");' onmouseout='quitarRetro();' />"+
"</div>"+
//**************************** Icono 3 ********************
"<div    class='icoMetaf'    data-titulo='Grabando Efectos de Sonido'  style=' text-align:center; margin:10px;' >"+
	"<img  class='icoMetafora'  title='5. Video Explicativo Grabar-Bits.mp4'  "+
	"style='width:70px;  height:70px; margin-top:0px; position:absolute; top:48%; left:38%;'  src=' ./recursos/iconosN/icoVideo1.png'  "+
	   "onclick=' connotarPotterDiario(5, \"\",  \"\" , \"\" ) ;playExplain(\"./recursos/contenidos2/AudioDiario/Grabando7.mp3  \");' "+
	    "onmouseover='retroalimenta(\"5) Finalidad: Aprender a grabar efectos de sonido. \");' onmouseout='quitarRetro();' />"+
"</div>"+
//************************** Icono 4 ***********************
"<div    class='icoMetaf'     style=' text-align:center; margin:0px;' >"+
	"<img  class='icoMetafora'  title='6. Secuencia y Paralelismo'  "+
	"style='width:70px;  position:absolute; top:31%; left:68%; width:70px;  margin-top:0px;  '  src=' ./recursos/iconosN/icoImg2.png'  "+
	"onclick='ilustrar (\"./recursos/contenidos2/SecuenciaParalelismo.png\", 7, 3, anchoPizarra-50);  playExplain(\"./recursos/contenidos1/Secuencia.mp3  \");"+
	"digitarSobre (\"zonaDigitar\", 650,500, \"Secuencia y Paralelismo\", 100, 30, 35, -1 );  '  "+
	"onmouseover='retroalimenta(\"6) Finalidad: Aprender la diferencia entre secuencia y paralelismo. \");' onmouseout='quitarRetro();' />"+
  "</div>"+
  //************************ Icono 5 ***********************
  "<div   class='icoMetaf'    data-titulo='Archivo de Scratch PianoMiMelodía.' style=' text-align:center; margin:10px; ' >"+
	"<img   title='7. Organizar Melodía.'  onclick='ilustrarN (\"./recursos/contenidos2/ProgramarMusica.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos2/7.OrganizarMelodía.pptx\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos1/Organizar.mp3  \");' "+
     "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:31%; left:83%; ' "+
	"src=' ./recursos/iconosN/icoArchivo.png' "+
	"onmouseover='retroalimenta(\"7) Finalidad: Organizar nuestra melodía \");' onmouseout='quitarRetro();'  />"+
"</div>"+

  //***************************************** Icono Sabías que **************************
"<div    class='icoMetaf'     style=' text-align:center; margin:0px;' >"+
"<img  class='icoMetafora'  title='Sabías Qué'  "+
"style='width:70px;  position:absolute; top:62%; left:38%; width:70px;  margin-top:0px;  '  src=' ./recursos/iconosN/J4.png'  "+
"onclick='ilustrar (\"./recursos/contenidos0/SabiasQue.png\", 7, 3, anchoPizarra+100);  playExplain(\"./recursos/contenidos1/Sabias1.mp3  \");"+
"digitarSobre (\"zonaDigitar\", 650,500, \"Sabías que...\", 100, 30, 35, -1 );  '  "+
"onmouseover='retroalimenta(\"Sabías qué... \");' onmouseout='quitarRetro();' />"+
"</div>"+
//****************************************** Icono constructible ************************
"<div    class='icoMetaf'  data-titulo='Autoevaluación'  style=' text-align:center; margin:10px;' >"+
	  "<a    href='./recursos/contenidos2/secuenciador/Secuenciador.html'  target='_BLANK' >"+
	        "<img   title=Autoevaluación   "+
			        "class='icoMetafora'  style='  width:70px; height:70px; position:absolute; top:38%; left:53%;  ' "+
					"onmouseover='retroalimenta(\"Finalidad: Confirmar los conocimientos adquiridos. \");' onmouseout='quitarRetro();' "+
			        "src=' ./recursos/iconosN/icoCons.png' /></a>"+
"</div>"+

"<img id='metafora'  style='' src='./recursos/contenidos2/metafora2.png' style='display:block; ' />"+
"</div>",
//**************************************** TERCER PIZARRA EN EL ARREGLO ( posición 3 )***************************************//
"<div style='background-color:white;  position:relative;'  >"+"<p class='retroMetafora'  id='retroalimentar' ></p>"+
"<p class='tituloD'   style='margin-bottom:0px; '    >Sprint de Animación Musical</p>"+

//**************************************** Icono 1 *****************************
"<div   class='icoMetaf'    data-titulo='Archivo de Scratch Pensar, Hacer, Probar, Mejorar.' style=' text-align:center; margin:10px; ' >"+
"<img   title='3. Pensar.'  onclick='ilustrarN (\"./recursos/contenidos3/Pensar.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos3/FichaPensar.pptx\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos3/Pensar.mp3  \");' "+
 "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:69%; left:10%; ' "+
"src=' ./recursos/iconosN/icoArchivo.png' "+
"onmouseover='retroalimenta(\"3) Finalidad: Obtener la ficha Pensar. \");' onmouseout='quitarRetro();'  />"+
"</div>"+
//**************************************** Icono 2 ******************************
"<div   class='icoMetaf'    data-titulo='Archivo de Scratch Pensar, Hacer, Probar, Mejorar.' style=' text-align:center; margin:10px; ' >"+
"<img   title='5. Planear.'  onclick='ilustrarN (\"./recursos/contenidos3/Planear.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos3/FichaPlanear.pptx\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos3/Planear.mp3  \");' "+
 "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:76%; left:25%; ' "+
"src=' ./recursos/iconosN/icoArchivo.png' "+
"onmouseover='retroalimenta(\"5) Finalidad: Obtener la ficha Planear. \");' onmouseout='quitarRetro();'  />"+
"</div>"+
//**************************************** Icono 3 ******************************
"<div   class='icoMetaf'    data-titulo='Archivo de Scratch Pensar, Hacer, Probar, Mejorar.' style=' text-align:center; margin:10px; ' >"+
"<img   title='6. Probar.'  onclick='ilustrarN (\"./recursos/contenidos3/Probar.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos3/FichaProbar.pptx\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos3/Probar.mp3  \");' "+
 "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:67%; left:40%; ' "+
"src=' ./recursos/iconosN/icoArchivo.png' "+
"onmouseover='retroalimenta(\"6) Finalidad: Obtener la ficha Probar. \");' onmouseout='quitarRetro();'  />"+
"</div>"+
//**************************************** Icono 4 ******************************
"<div   class='icoMetaf'    data-titulo='Archivo de Scratch Pensar, Hacer, Probar, Mejorar.' style=' text-align:center; margin:10px; ' >"+
"<img   title='7. Mejorar.'  onclick='ilustrarN (\"./recursos/contenidos3/Mejorar.png\", 7, 5, anchoPizarra-100, \"./recursos/contenidos3/FichaMejorar.pptx\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos3/Mejorar.mp3  \");' "+
 "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:61%; left:55%; ' "+
"src=' ./recursos/iconosN/icoArchivo.png' "+
"onmouseover='retroalimenta(\"7) Finalidad: Obtener la ficha Mejorar. \");' onmouseout='quitarRetro();'  />"+
"</div>"+
//**************************************** Inono 5 *******************************
  "<div   class='icoMetaf'    data-titulo='Archivo Lista de Cotejo.' style=' text-align:center; margin:10px; ' >"+
	"<img   title='3. Lista de Cotejo.'  onclick='ilustrarN (\"./recursos/contenidos4/lista.png\", 7, 5, anchoPizarra+20, \"./recursos/contenidos4/Lista1.doc\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos4/Cotejo.mp3  \");' "+
     "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:69%; left:70%; ' "+
	"src=' ./recursos/iconosN/icoAuto.png' "+
	"onmouseover='retroalimenta(\"3) Finalidad: Obtener la lista de cotejo \");' onmouseout='quitarRetro();'  />"+
"</div>"+
"<img id='metafora'  style='' src='./recursos/contenidos2/metafora3.png' style='display:block; ' />"+
"</div>",

//**************************************** CUARTA PIZARRA EN EL ARREGLO ( Posición no. 4 )********************************//
"<div style='background-color:white;  position:relative;'  >"+"<p class='retroMetafora'  id='retroalimentar' ></p>"+
"<p class='tituloD'   style='margin-bottom:0px; '    >Compartiendo mi Animación Musical</p>"+

//************************************** Icono 1 **************************
"<div   class='icoMetaf'    data-titulo='Archivo Lista de Cotejo.' style=' text-align:center; margin:10px; ' >"+
"<img   title='1. Lista de Cotejo.'  onclick='ilustrarN (\"./recursos/contenidos4/lista2.png\", 7, 5, anchoPizarra-50, \"./recursos/contenidos4/Lista2.doc\" ,\"Descarga este archivo...\", 10); playExplain(\"./recursos/contenidos4/Cotejo.mp3  \");' "+
 "class='icoMetafora'  style='  width:70px; height:70px; border:0px solid black; position:absolute; top:53%; left:66%; ' "+
"src=' ./recursos/iconosN/icoAuto.png' "+
"onmouseover='retroalimenta(\"1) Finalidad: Obtener la lista de cotejo \");' onmouseout='quitarRetro();'  />"+
"</div>"+

"<img id='metafora'  style='' src='./recursos/contenidos2/metafora4.png' style='display:block; ' />"+
"</div>",	
//**************************************** Quinta PIZARRA EN EL ARREGLO ( Posición no. 5 )********************************//
"<div><span class='enConstruccion' >En construcción4</span></div>",	

//------------------------------------------- Encabezado de pizarra 6 -------------------------------------------------------//
"<p class='tituloD'   >Nuestra prizarra derivada (en paquetes[ 6] ).</p>"+
"<p class='consignaD' >Las pizarras derivadas nos ayudan a connotar otro espacio de subjetividad complementaria para el mensaje total de la pantalla donde se origina en la derivación.</p>"+
// ------ el icono 1 del arreglo paquetes[6]
 "<div  class='' style='text-align:center;  margin:0px; padding-top:10px; padding-bottom:10px;  height:400px; ' >"+"<p id='retroalimentar' ></p>"+
//------------------------------------------- icono 1-------------------------------------------------------//
"<div    class='icoAp'    data-titulo='(*) Regresar al nivel anterior.' style=' text-align:center; display:inline-flex; margin:10px;' >"+
	"<img  class='icoDescarga'  title='*'  "+
	"style='width:100px;  height:100px; margin-top:0px;'  src=' ./recursos/iconosN/icoVolver.png'  "+
	"onclick='  s(2); sl(2);   '   "+
	"onmouseover='retroalimenta(\"*) Finalidad: ... . \");' onmouseout='quitarRetro();' />"+
"</div>"+

"</div>",
// Pizarra no. 6
"<div><span class='enConstruccion' >En construcción6</span></div>",
// Pizarra no. 7
"<div><span class='enConstruccion' >En construcción7</span></div>",
// Pizarra no. 8
"<div><span class='enConstruccion' >En construcción8</span></div>",
// Pizarra no. 9
"<div><span class='enConstruccion' >En construcción9</span></div>",
// Pizarra no. 10
"<div><span class='enConstruccion' >En construcción10</span></div>"
);

// ------- variables de hilera para simplificar las reglas de puntuacion de comillas. 
var mensajexx1 = "<div style=\"background-color:black; min-width:600px; border:1px solid white;\">Explore los 3 primeros temas <br/>y luego inicie su propia App original.  <br/>Para los que desen continuar con los siguientes temas <br/>lograrán construir un pequeño juego.</div>"
var mensajexx2 = "<div style=\"background-color:black; min-width:600px; border:1px solid white;\">Recursos y materiales para explorar en profundidad.</div>"
var mensajexx3="<div style=\"background-color:black; min-width:600px; border:1px solid white;\">"+
                "Que bello es el espacio con sus estrellas. <br/>¿Algún día viajaremos a ellas?</div> ";
				
// Hilera para sección lateral de la pantalla de recursos.
var mensajexx4="<div></div>";

// ---- Arreglo para miniWebs:  2, 3, 4 y 5 miniwebs indispensables. Mientras 0, 1 y 6 en adelante estan disponibles para el diseñador.
var elementosHTML = new Array (
// Aqui se ha colocado una sección con un  web interactivo que operaría como un submenú para alguna de las opciones con la
// 0
"<img   title='Para ilustrar con imagen y pie de imagen en un elemento HTML.'    "+
      "onmouseover='perfilarInformar(\"Esta es la retroalimentación de perfilarInformar\" );' "+
	  " onmouseout='perfilarRestaurar();' "+
              "style='width:400px; height:400px; border:1px solid black; ' src=' ./recursos/contenidos2/espacio.jpg' />",
// 1 **************************** 1    1ER WEB EXPERIMENTAL ANIMADO. *******************************************************
"<div style='position:relative;   style='color:black;  '    >"+
"<span onclick='  playExplain(\"./recursos/contenidos4/miniWebAn/evaluacion.mp3\");  animar(\"bloque\", 100,160, 390, \"accion1Bloque 0.5s\" );    animar(\"enviar\", 30,113, 150, \"accion1Evaluar 2.5s\" );  '  style='position:absolute; top:7%; left:4%; '  "+
       "onmouseover='  perfilarInformar(\"1) Nuestro bloque evaluador que vigila a la variable CANSANCIO, <br/>y se activa con el mensaje evaluar.\");  destellar(\"bloque\" ,  \"sacudir 1.5s\" );  destellar(\"enviar\" ,  \"rebotar 1.0s\" ); '  onmouseout='perfilarRestaurar();    ' >"+
         "<span class='ideas' style=' font-size:22px;' title='Un condicional y un operador de comparación.'>&nbsp1) Evaluación <br/> para vigilar...&nbsp</span></span>"+

"<span onclick='animar(\"decir\", 135, 279, 300,\"accion1Decir 0.5s\");   playExplain(\"./recursos/contenidos4/miniWebAn/salida.mp3\"); '   style='position:absolute; top:8%; right:20%; ' "+
           "onmouseover='perfilarInformar(\"2) La variable CANSANCIO aumenta hasta alcanzar el umbral,<br/> entonces el simulador deber pasar a su estado final.\");   destellar(\"decir\",  \"sacudir 1s\"); '  onmouseout='perfilarRestaurar();' >"+
         "<span class='ideas' style=' font-size:22px;' title='Al detectar la superación del umbral (100) el actuador anuncia su estado.'>&nbsp2) Una salida <br/>de datos.&nbsp</span></span>"+

"<span onclick='animar(\"terminar\", 135, 335, 300,\"accion1Terminar 1.5s\");     playExplain(\"./recursos/contenidos4/miniWebAn/accionarTerminar.mp3\"); '   style='position:absolute; top:36%; right:9%; ' "+
           "onmouseover='perfilarInformar(\"3)  La variable TERMINAR cumple el papel de una bandera para avisar <br/>a otros procesos del simulador, que Isabelita esta agotada .\");  destellar(\"terminar\",  \"sacudir 1s\"); '  onmouseout='perfilarRestaurar();' >"+
         "<span class='ideas' style=' font-size:22px;' title='Observen otro uso posible de las variables.' >&nbsp3) Accionar la <br/>variable bandera.</span></span>"+

"<span onclick='animar(\"terminarNo\", 530, 350, 340,\"accion1TerminarNo 1.5s\");  playExplain(\"./recursos/contenidos4/miniWebAn/fijaterminar.mp3\"); '   style='position:absolute; top:62%; right:10%; ' "+
           "onmouseover='perfilarInformar(\"4)  La variable TERMINAR toma su valor inicial <i>no</i> .<br/><br/>\");  destellar(\"terminarNo\", \"sacudir 1s\"); '  onmouseout='perfilarRestaurar();' >"+
         "<span class='ideas' style=' font-size:22px;' title='O sea que damos el valor inicial.' >&nbsp4) Inicializar la bandera.</span></span>"+
"<img style='' src='./recursos/contenidos4/circulo.png' style='display:block; ' />"+

"<img title='BLOQUE EVALUADOR'  width='350' id='bloque' src='./recursos/contenidos4/miniWebAn/bloqueEvaluar.png' style='display:none; ' />"+
"<img title='Anunciando el estado de finalización.' width='300' id='decir'  src='./recursos/contenidos4/miniWebAn/decir.png' style='display:none; ' />"+
"<img title='Cambio en la variable bandera TERMINAR.' width='300' id='terminar' src='./recursos/contenidos4/miniWebAn/terminar.png' style='display:none; ' />"+
"<img title='Iniciamos con el valor para la variable bandera.' width='300' id='terminarNo'  src='./recursos/contenidos4/miniWebAn/fijaTerminarNo.png' style='display:none; ' />"+
"<img title='El mensaje que activa al evaluador.' width='300' id='enviar'  src='./recursos/contenidos4/miniWebAn/enviar.png' style='display:block; ' />"+
"</div>",

// -- 2 ----   Sección para lanzar una pregunta con el proc. verDatos que puede iniciar el procesamiento del dato.  Indispensable.
"<div style='height:450px ; text-align:center;'    >"+
  "<p    id='textoIndagar'> </p>"+
  "<textarea style='font-size:23px; color:white; background-color:rgb(4,43,79); '  rows='5'   cols='30'  placeholder='Escriba aquí su respuesta ...'   name='anotacion' ></textarea><br/>"+
  "<p style='margin:0px;'><img title='clic para almacenar la respuesta.' onclick='verDatos();' class='icoDescarga' style='border-radius:7px; float:right; margin-right:15px;'  src='./recursos/iconosN/enter.png'  width='100px'  />"+
"</p></div>",

// --- 3 ----   Sección para desplegar las preguntas y respuestas (Pantalla recursos) Indispensable
"<div style='' >"+
     "<p  id='recolector'  >"+"Hola Efra</p>"+
"</div>",

// --- 4 ----   Sección para desplegar las preguntas y respuestas (Pantalla recursos) Indispensable
"<div style='height:410px; ' >"+
     "<p  id='recolectorMM'  >"+
	 "<img id ='ilustracionIMM' /></p>" +
"</div>",

// --- 5 ----   Sección para desplegar una entrada de un diario basada en las películas de Harry Potter.
"<table id='paginaPotter'  style='height:400px; ' ><tr>"+
     "<td id='primerColumnaP' >"+
	    "<p  id='parrafo1'  class='parrafoPotter' ></p>"+
	    "<p  id='parrafo2'  class='parrafoPotter' ></p>"+
	"</td>"+
	"<td   id='segundaColumnaP'    >"+
	   "<p  data-retro=''  id='ilustraPotter' >Zzzzzzzz<br/><br/><br/><br/><br/><br/>...</p>"+
	"</td></tr></table>"+
"</div>",
// ---- Aquí abajo se pueden colocar nuevos fragmentos WEB perfilables 

// ---  6---- Ejemplo corto de miniWeb programado
//  TweenMax.fromTo (  "#ilustracion"  , 0.5 , { y:600 } , {y:800}  });
// MiniWeb con animación programada de GreenSock

"<div style='position:relative;   style='color:black;  '    >"+
// Aqui empieza la caracterización de la palabra activadora
"<span onclick='  playExplain(\"./recursos/contenidos4/miniWebAn/evaluacion.mp3\"); visibilizar(\"bloque2\"); "+
       " TweenMax.fromTo ( \" #bloque2\"   ,  0.5 , {x:0, y:-500, rotation:720 }, {x:50, y:300, rotation:0}  ); '  style='position:absolute; top:10%; left:10%; '  "+
          "onmouseover='  sacudir (\"#bloque2\", 350);  perfilarInformar(\"<br/>1) Nuestro bloque evaluador que vigila a la variable CANSANCIO.\");   '  onmouseout='perfilarRestaurar();    ' >"+
         "<span class='ideas' style=' font-size:22px;' title='Un condicional y un operador de comparación.'>&nbsp1) Evaluación <br/>&nbsp&nbsppara vigilar...&nbsp</span></span>"+
// Termina la caracaterización del icono gráfico del miniWeb animado
"<span onclick='  playExplain(\"./recursos/contenidos4/miniWebAn/evaluacion.mp3\"); visibilizar(\"decir2\"); "+
       " TweenMax.fromTo ( \" #decir2\"   , 0.5 , {x:0, y:0  }, {x:100, y:400 }  ); '  style='position:absolute; top:10%; left:60%; '  "+
          "onmouseover=' sacudir(\"#decir2\", 300 ) ;  perfilarInformar(\"<br/>1) Aqui vemos otro botón grafico capaz de detonar la animación.\");     '  onmouseout='perfilarRestaurar();    ' >"+
         "<p  data-info='Observe el mensaje emitido al alcanzar el umbral.'  class=' icoMiniWeb' >"+
		       "<img src='./recursos/contenidos0/caracol.png' width='100'    class='icoDescarga' style='border: 1px solid white' /></p></span>"+
// Imagen que aparecer en el fondo del miniWeb
     "<img style='' src='./recursos/contenidos4/circulo.png' style='display:block; ' />"+
// Imagenes que serán animadas al clic y al pasar el mouse
     "<img title='BLOQUE EVALUADOR'   id='bloque2'  style='position:absolute; top:-100px; left:50px; display:none;'  width='350' src='./recursos/contenidos4/miniWebAn/bloqueEvaluar.png'  />"+
	"<img title='Anunciando el estado de finalización.' width='300' id='decir2'  src='./recursos/contenidos4/miniWebAn/decir.png' style='position:absolute; top:-100px; left:50px; display:none;'  ' />"+
"</div>",
// ---- no. 7
   "<div id='nuevoMiniWeb' >"+" </div>"
);

// --- Arreglo de URL de imágenes para referencias índice en diarios Harry Potter con la función defSignificacion  
 var significacionesPotter = new Array (
	"./recursos/contenidos1/bloquetambor.png ",
	"./recursos/contenidos1/siguientedisfraz.png " ,
	"./recursos/contenidos1/cambiardisfraz.png" ,
	"./recursos/contenidos1/tocarnota.png ",
	"./recursos/contenidos1/tocarsonido.png");

// function defSignificacion( indSig, anPix, mix, miy)    
var diarioHarryPotter= new Array (
	["Bloque: tocar tambor # durante # pulsos", 50 , "Exploremos el bloque de programación:<br/>"+
	    "<span class='potterPalabra' title='Clic para ver...'  onclick='defSignificacion(0, 400, 3 , 60 );'   >&nbsptocar tambor # durante # pulsos&nbsp</span>, probemos que sucede al cambiar los dos parámetros (números) que tiene este bloque.  ", 
	        "Observemos el video que nos muestra este bloque de programación.", "A", "./recursos/contenidos1/videosu1/TocarTamb.mp4" ] , 
	["Animando un Instrumento Musical", 50 , "Utilicemos de la paleta apariencia el bloque"+
	    "<span class='potterPalabra' title='Clic para ver...'  onclick='defSignificacion(1, 400, 3 , 60 );'   >&nbspsiguiente disfraz&nbsp</span> o <span class='potterPalabra' title='Clic para ver...'  onclick='defSignificacion(2, 400, 3 , 60 );'   >&nbspcambiar disfraz a&nbsp</span> para animar el objeto instrumento musical. ", 
		    "Sincronicemos el sonido con el movimiento.", "A", "./recursos/contenidos1/videosu1/AniConSon.mp4"  ] ,
	["Bloque: tocar nota # durante # pulsos", 50 , "Exploremos el bloque de programación:<br/>"+
		"<span class='potterPalabra' title='Clic para ver...'  onclick='defSignificacion(3, 400, 3 , 60 );'   >&nbsptocar nota # durante # pulsos&nbsp</span>, descubramos como cambiar diferentes notas musicales.  ", 
			"Vamos a programar las teclas de nuestro teclado para que al pulsarlas suene la nota musical.", "A", "./recursos/contenidos1/videosu1/TocarNotaPia.mp4"],
	["Importar Audio a Scratch.", 40, "Utilizando el editor de sonido de Scratch es posible importar un audio de una fuente externa en formato mp3 y convertirlo automáticamente en formato wav." , 
	"Analicemos que son <span class='amarilloTexto'>extensiones</span> de los archivos de audio y cómo se diferencian.", "A" , "./recursos/contenidos1/videosu1/ImportarExtensiones.mp4"],
	["Editando Melodía.", 40, "Este video demuestra cómo importar a Scratch una melodía, editar una sección, guardarla y utilizarla en un nuevo proyecto." , 
	"Al editar esta melodía reforzaremos la práctica <span class='amarilloTexto'>remezclar.</span>", "A" , "./recursos/contenidos1/videosu1/EditarMelod.mp4"],
	["Grabando Efectos de Sonido.", 40, "¿Te gustaría grabar tus propios efectos de sonido?<br/><br/>Te has preguntado: <br/><br/> ¿Cómo la voz se almacena en un archivo en la computadora?" , 
	"¿Cómo se logra reproducir después de guardado?", "A" , "./recursos/contenidos1/videosu1/GrabarBits.mp4"] ,
	["Bloque: tocar sonido y esperar", 50 , "Exploremos el bloque de programación: <br/> "+
	"<span class='potterPalabra' title='Clic para ver...'  onclick='defSignificacion(4, 400, 3 , 60 );'   >&nbsptocar sonido y esperar&nbsp</span>" +
	"<br/><br/>Utilicemos comandos de la paleta de control.  ", 
	"Observemos el video que nos enseña este bloque de programación.", "A", "./recursos/contenidos1/videosu1/TocarSonEspe.mp4"]
);

// --  Estructura de datos para las indagaciones multimediales:  hay que usar registrarIndagacionMM (n,men,tipoIndagacion ), n >= 0.
// -- si tipo = 1 then interrogar al final (al cerrar el recurso) else esperar tipo milisegs para interrogar
var indagacionesMM = new Array (
   [ "P E N S A R" , "./recursos/contenidos0/snail.png" , "./recursos/contenidos0/pregunta1MM.mp3" ] ,
   ["Titulo del diario", "50%" , "Parrafo no 1. del arritulo", ""] , [] 
);

// -- Zona de preguntas y comentarios introductorios para las preguntas que la esfera propone al aprendiz. (denominadas: Indagaciones.)
// -- se debe usar registrarIndagacion(nAct, nPregunta , tipoIndagacion);  si tipo = 1 then interrogar al final else esperar tipo milisegs para interrogar
var indagaciones = new Array (      
[ "Esta es una pequeña introducción para la pregunta: Medite en lo que aprendido en esta actividad y conteste lo siguiente: <br/><br/>¿Esta es pregunta 1 de (A1)?" , "¿Esta es pregunta 2 de (A1)?" , "¿Esta es pregunta 3 de (A1)?" ],
[ "Ahora que has usado un sensor en la tarjeta PicoBoard, tienes una idea mas concreta del papel que éstos cumplen.<br/><br/>¿Donde has visto sensores en la vida real y cuál es la función que cumplen?" , 
      "¿Esta es pregunta 2 de (A2)?" , "¿Esta es pregunta 3 de (A2)?" ]
); 

// orientaciones en general: Columna Lateral derecha que acompaña a la pizarras.

// --- orientación cero dispone la columna lateral derecha durante la animación anuncio de la esfera. (Procedimiento: presentarUnidad.)
var orientacion0 = new Array ( "<span style='font-size:20px; '>Bienvenidos.<br/><br/>En esta unidad utilizaremos la computadora y sus dispositivos de entrada y salida, para producir y modificar archivos de audio, mientras aplicamos la metodología de resolución de problemas para desarrollar una representación digital programada.</span>",

"Resultados de aprendizaje: "+
   "<br/><br/>1. Utilizar la computadora y sus dispositivos de entrada y salida para la producción y modificación de archivos para la programación de productos multimedia.<br/><br/> "+
   "2. Aplicar la metodología de resolución de problemas en las soluciones programadas que ejecuta y depura.",
   
   "Ideas poderosas:"+
   "<br/><br/>Procesamiento de datos: Como entradas y salidas al procesar archivos de audio. "+
    "<br/><br/>Programación: A través del uso de estructuras de control, eventos, secuencia y paralelismo.");
// ver especialmente las hipervinculaciones de las palabras calientes.
var orientacion1 = new Array ( "Al explorar estas actividades conoceremos:<br/><br/>En recursos 2, 3, 4, 6.1 y 6.2 la paleta de sonidos de Scratch, los dispositivos digitales de <span class='amarilloTexto'>&nbspentrada&nbsp</span> y <span class='amarilloTexto'>&nbspsalida&nbsp</span> para grabar audios.<br/><br/>En recursos 3 y 7 <br/> <span class='amarilloTexto'>&nbspestructuras de control&nbsp</span> para sincronizar efectos entre audios y objetos.</span><br/><br/>",
"Recursos orientados al docente:<br/><br/>"+
"1. <a title='Clic para descargar.' href='./recursos/contenidos1/descargableu1/1.EjMiPrimeraCreacion.sb2' download ><span class='amarilloTexto'>Primera creación</span></a><br/><br/>"+
"5. <a title='Clic para descargar.' href='./recursos/contenidos1/descargableu1/4.2CancionEstrellita.sb2' download ><span class='amarilloTexto'>Canción estrellita</span></a><br/><br/>"+
" <a title='Clic para descargar.' href='./recursos/contenidos1/GuiaReferenciaScratch2.0.pdf' download ><span class='amarilloTexto'>Guía de referencia Scratch 2.0</span></a><br/><br/>"

);

var orientacion2 = new Array ( "Mientras realizamos estas actividades aprenderemos:<br/><br/>En recursos 2.1, 3.1 y 5 cómo se capturan los <span class='amarilloTexto'>&nbspdatos&nbsp</span>, se procesan y almacenan en archivos con extensiones diferentes.<br/><br/>"+
   "Programar <span class='amarilloTexto'>&nbspefectos&nbsp</span> de  forma secuencial o en paralelo.<br/><br/>"+
	 "Planificar el orden en que queremos programar efectos musicales.<br/>",
	 "Recursos orientados al docente.<br/><br/>"+
	 "1. <a title='Clic para descargar.' href='./recursos/contenidos1/descargableu1/1. EjMelodiaModificada.sb2' download ><span class='amarilloTexto'>Melodía modificada</span></a><br/><br/>"+
	 "2.2. <a title='Clic para descargar.' href='./recursos/contenidos1/2.2ListaEnlaces.doc' download ><span class='amarilloTexto'>Lista de enlaces</span></a><br/><br/>"+
	 "3.2. <a title='Clic para descargar.' href='./recursos/contenidos2/creative.zip' download ><span class='amarilloTexto'>Música creative Commons</span></a><br/><br/>"+
	 "4. <a title='Clic para descargar.' href='./recursos/contenidos2/4.RegistroReflexiones.doc' download ><span class='amarilloTexto'>Registrar opiniones</span></a><br/><br/>"+
	 "9. <a title='Clic para descargar.' href='./recursos/contenidos2/APA.ppt' download ><span class='amarilloTexto'>Referencia APA</span></a><br/><br/>"
	
	 );
var orientacion3 = new Array ( "Vamos a poner en práctica lo aprendido:<br/><br/>"+
   "En recursos 2.1, 2.2, 2.3 y 2.4 plantilla de metodología de <span class='amarilloTexto'>&nbspresolución de problemas&nbsp</span> para desarrollar una representación digital programada.<br/><br/>"+
   "En recurso 3 autoevaluación del plan de proyecto.<br/>",
   "Recursos orientados al docente.<br/><br/>"+
	 "1. <a title='Clic para descargar.' href='./recursos/contenidos1/Ejemplos.zip' download ><span class='amarilloTexto'>Carpeta de ejemplos</span></a><br/><br/>"+
	 "2. <a title='Clic para descargar.' href='./recursos/contenidos3/Ficha1PensarPlanear.Probar.Mejorar.pptx' download ><span class='amarilloTexto'>Ficha1 Pensar Planear Probar Mejorar</span></a><br/><br/>"
	 
	 );
var orientacion4 = new Array ("Vamos a compartir las representaciones musicales elaboradas por los estudiantes:<br/><br/>"+
	"Recurso de autoevaluación del proyecto.<br/><br/>"+
	"Seleccione una estrategia para compartir los proyectos.<br/><br/>"+
	"En la exposición esté pendiente del vocabulario <span class='amarilloTexto'>&nbsptécnico&nbsp</span>.",
	"Recursos orientados al docente.<br/><br/>"+
	"2. <a title='Clic para descargar.' href='./recursos/contenidos4/Lista.doc' download ><span class='amarilloTexto'>Lista de cotejo</span></a><br/><br/>"
	
	);
var orientacion5 = new Array ("");
var orientacion6 = new Array (["Sección lateral de derivación no. 6"]);
var orientacion7 = new Array ("");
var orientacion8 = new Array ("");
var orientacion9 = new Array ("");
var orientacion10 = new Array ("");

//  Zona para la formalización de los contenidos del clip: 
//a) secuencia de imágenes(mini pizarra) y relacion con las porciones de audio, el ancho y la posición.
//b) Definición de los cintillos que aparecen al pie de cada imagen

// ----  ´primer clip de imagenes 
var clipInteractivo01 = new Array (
  //        imagenURL	,                  px ancho, minAu, maxAu, dx, dy,
	"./recursos/contenidos2/clipprog1/ima1.png", 1080, 0,     24000 ,  6,  14,
	"./recursos/contenidos2/clipprog1/ima2.png", 1080, 24000,  48000 ,6,  14,
	"./recursos/contenidos2/clipprog1/ima3.png", 1080, 48000,  85000 , 6,  14,
	"./recursos/contenidos2/clipprog1/ima4.png", 1080, 85000,  97000 , 6,  14
 );

var  cintillos01 = new Array (
" &nbsp Analicemos un comic, de como lanzar objetos con el sensor.&nbsp",
" &nbspDefinición de las variables principales y las tareas de inicialización del programa.&nbsp",
" &nbspUn algoritmo: una idea intuitiva.&nbsp",
" &nbspUn algoritmo: una idea intuitiva.&nbsp"
);
// --- Clip del mecanismo de indagación automatizada.
var clipInteractivo02 = new Array (
  //        imagenURL	,                  px ancho, minAu, maxAu, dx, dy,
	"./recursos/contenidos0/clipIndagar/img1.png", 500, 0,     15398 ,  32,  15,
	"./recursos/contenidos0/clipIndagar/img2.png", 500, 15398,  33586 ,32,  15,
	"./recursos/contenidos0/clipIndagar/img3.png", 500, 33586,  53279 , 32,  15,
	"./recursos/contenidos0/clipIndagar/img4.png", 500, 53280,  65529 , 32,  15,
	"./recursos/contenidos0/clipIndagar/img5.png", 1000, 65529,  89474 , 3,  25
 );

var  cintillos02 = new Array (
"1 / 5 ----> inicio.",
"2 / 5 ",
"3 / 5 ",
"4 / 5 ",
"5 / 5 ----> final."
);

//  Ejemplo de clipInteractivo que orienta una codificación.
var clipCode01 = new Array (
  //        imagenURL	,         px ancho,         minAu , maxAu , dx, dy,
	"./recursos/contenidos1/clipprog2/ima1.png", 750, 0,      18000 , 15, 25,
	"./recursos/contenidos1/clipprog2/ima2.png", 750, 18000,  33000 , 15, 25,
	"./recursos/contenidos1/clipprog2/ima3.png", 750, 33000,  52000 , 15, 25
 );
 var cintillosCodigo01 = new Array (
"<p class='pizarraCode' >&nbsp void loop () { <br/> <br/>&nbsp&nbsp} </p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/>&nbsp&nbsp&nbsp&nbspvelocidad=0; <br/> &nbsp&nbsp&nbsp&nbspwhile(Serial.available()<=0)&nbsp&nbsp{ }<br/>&nbsp&nbsp} </p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/>&nbsp&nbsp&nbsp&nbspvelocidad=0; <br/> &nbsp&nbsp&nbsp&nbspwhile(Serial.available()<=0)&nbsp&nbsp{ }<br/>"+
      " &nbsp&nbsp&nbsp&nbspif (Serial.available() > 0) {<br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbspvelocidad=Serial.parseInt();<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspanalogWrite(pinMotor, velocidad);}<br/>&nbsp&nbsp} </p>"
 );

 var clipCode04 = new Array (
  //        imagenURL	,         px ancho,         minAu , maxAu , dx, dy,
	"./recursos/contenidos4/clipcomportamiento/ima1.png", 750, 0,      77032,  15, 10,
	"./recursos/contenidos4/clipcomportamiento/ima2.png", 750, 77032,  192000, 15, 10,
	"./recursos/contenidos4/clipcomportamiento/ima3.png", 750, 192000, 260339, 15, 10,
	"./recursos/contenidos4/clipcomportamiento/ima4.png", 750, 260339, 444600, 15, 10
 );

 var cintillosCodigo04 = new Array (
"<p class='pizarraCode' >&nbspvoid loop () <span class='destacarCode' >{&nbsp&nbsp&nbsp&nbsp}</span> <br/><br/></p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/>&nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > lecturaBoton=HIGH; </span><br/> &nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > while(lecturaBoton == HIGH)&nbsp&nbsp{ </span> <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > lecturaBoton=digitalRead(pinBoton); </span><br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > delay(50); }</span><br/>&nbsp&nbsp} </p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/>&nbsp&nbsp&nbsp&nbsplecturaBoton=HIGH; <br/> &nbsp&nbsp&nbsp&nbspwhile(lecturaBoton == HIGH)&nbsp&nbsp{  <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsplecturaBoton=digitalRead(pinBoton);<br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbspdelay(50); }<br/>&nbsp&nbsp&nbsp&nbsp<span class='destacarCode' >estado= 1 - estado;</span><br/>&nbsp&nbsp} </p>",

"<p class='pizarraCode' >&nbsp void loop () { <br/>&nbsp&nbsp&nbsp&nbsp...<br/> &nbsp&nbsp&nbsp&nbspestado =  1 - estado; <br/>"+
      " &nbsp&nbsp&nbsp&nbsp<span class='destacarCode' >if (estado==1 ) {</span><br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > analogWrite( pinMotor, 90);&nbsp&nbsp&nbsp}</span><br/>"+
"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span  class='destacarCode'  > else { analogWrite( pinMotor, 0);&nbsp&nbsp}</span><br/>&nbsp&nbsp&nbsp}</p>"
 );

var  cintillosCode01 = new Array (
"<p class='pizarraCode' >"+"&nbsp#include &ltAdafruit_CircuitPlayground.h&gt&nbsp</p>",
"<p class='pizarraCode' >&nbsp void setup() { <br/> &nbsp&nbsp CircuitPlayground.begin();  <br/> &nbsp&nbsp}"+"</p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/> &nbsp&nbsp CircuitPlayground.redLED(true); "+" <br/> &nbsp&nbsp delay(2000);</p>",
"<p class='pizarraCode' >&nbsp void loop () { <br/> &nbsp&nbsp CircuitPlayground.redLED(true); "+" <br/> &nbsp&nbsp delay(2000);"+
"<br/> &nbsp&nbsp CircuitPlayground.redLED(false);"+"<br/> &nbsp&nbsp delay(2000); "+"<br/>&nbsp&nbsp}"+"</p> "
);

var clipPizarra01 = new Array (
  //        imagenURL	,         px ancho,         minAu , maxAu , dx, dy,
	"./recursos/contenidos2/deno1.png", 200, 255,  2612 ,  30,  45 ,
	"./recursos/contenidos2/deno2.png", 200, 3000,  6000 , 20, 50,
	"./recursos/contenidos2/deno3.png", 200, 6800,  10000 , 40,  65,
	"./recursos/contenidos2/deno4.png", 200, 11300,  15000 , 34, 48
 );

 var  cintillosPizarra01 = new Array (
"", "", "", ""
);

//------------------------ zona de programación de animaciones.
var objeto;
function presentarUnidad() {
	enAnimacion=true;
	sl(0); document.getElementById("deposito").innerHTML="";
	enmarcarRes(); 
	document.getElementById("imagen").style.zIndex=10; 
	titulo=document.getElementById("tituloAn");  
	tamArduinoFinal= parseInt(alturaPizarra/1.5); 
	anchoBarra= anchoPizarra-100; 
	var tl = new TimelineLite(); 
	tl.fromTo( "#laminaH", 0.2, { left:-600, top:290, opacity:0 }, {left:120, top:290 , opacity:1, width: anchoBarra } ) 
	 .fromTo( "#laminaV", 0.2, {left:180,  top:1550, opacity:0 }  , { left:180, top:374, opacity:1 } , "-=0.1"   )
	 .fromTo( "#imagen", 1 , {left:900,  top:300, opacity:1, width:115 }  , { left:175, top:300, opacity:1, width:115, ease:Back.easeOut }  )
      .to( "#imagen", 0.2 , {rotation:90 } , "retroceso"  )
      .to( "#imagen", 0.2 , {rotation:90,  top:475 } , "retroceso+=0.2"  )
	  .to( "#laminaH", 0 , {opacity:0 } , "saleLateral"  )
	  .to( "#laminaV", 0 , {opacity:0  }   )
	  .to( "#imagen", 1 , {rotation:0, top:"-=150" , left:"-=25" , width:tamArduinoFinal,  ease:Elastic.easeOut}   )
	  .fromTo( "#textoLateral2", 0.25, {left:0, opacity:0 , top:-300}  , { left:"40%", opacity:1, top:300, width:"30%" } ,"entradaFinal"  )
	  .to ( titulo , 0.5, { opacity:1 , left:"15%", top:200, width:anchoBarra } ,"entradaFinal" )
	  .fromTo ("#orientacion", 0.7 , {opacity:0 , height:0, color:"gray" } , {opacity:1 , height:alturaPizarra-100, color:"white", ease:Bounce.easeOut } , "saleLateral" );
	setTimeout (function esperaAn() {enAnimacion=false;} , 3500);
	}

function ocultarPresentacion(){
	 document.getElementById("tituloAn").style.top="-500px";
	 document.getElementById("textoLateral2").style.top="-500px";
      document.getElementById("imagen").style.top="-1200px";
      document.getElementById("laminaH").style.top="-200px";
	  document.getElementById("laminaV").style.top="-200px";
	  document.getElementById("icoAu").style.top="-200px";
}


// ensayo para  animación en un miniWeb 28 Ago 2018
function alistarVideo(){
	var cintax = document.getElementById("cinta");
	cintax.style.position="absolute";
	cintax.style.display="none";
	TweenMax.to( cintax, 0 , { left:0, top:300, scale:1.0 }  );  
}

function sacarme() {
     var cintax = document.getElementById("cinta");
	 cintax.style.position="absolute";
	 cintax.style.display="block";
	TweenMax.to( cintax, 1, {scale:0.3, left:300, top:-100 }  );  
	setTimeout( alistarVideo , 4000); 
}
//  ---------------- Métodos para el proceso de auto-indagación para afirmar mas conscientemente el aprendizaje.  

//------------------------------------------------------------------
window.onload=empezar;
