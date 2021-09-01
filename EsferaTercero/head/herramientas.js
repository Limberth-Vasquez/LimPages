//-----------------------------------------------------------------------------------------------------------------
// presentador interactivo: Herramienta 1.

var punteroPPT, pausarPPT, clipPPT, elFrame, t1, t2, longPPT, subtitulosPPT, procesoX, tux, laCharla;
var pptPlayer;
function setPosPlayer (left, top){
	pptPlayer=document.getElementById("newPlayer");
    pptPlayer.style.position="absolute";
    pptPlayer.style.top= top+"%";
    pptPlayer.style.left= left+"%";
}

function ppt ( elClip, elAudio, losSubT) {
	player2=document.getElementById("player2");
	player2.pause();
	document.getElementById("newPlayer").style.display="block";
	subtitulosPPT=losSubT;
    longPPT= (elClip.length)/6;
    laCharla = elAudio;
	clipPPT=elClip;
	player.setAttribute("src", elAudio);
	elFrame=  document.getElementById("pop1");
	pausarPPT=false;
	punteroPPT=0;
	tux= document.getElementById("pop2");
    walk();
}

function walk () {
	player.pause();
	if (pausarPPT)  
	{
	console.log("terminamos el clip");
	return;
	};
	//console.log("walk:  StarFrame (punteroPPT): "+punteroPPT);
	setFrame (punteroPPT);
}

function setFrame (pos){
    elFrame.innerHTML="<img id='fuente' style='margin:0px; ' src="+"'"+clipPPT[pos*6]+"'"+" width="+ "'"+ (clipPPT[1+(pos*6)])  +"'"+"onload="+"'"+"verCuadro();"+"'"+"/>"+
	   "<p id='yo' class='cintilloPPT' onload='this.style.position=\"absolute\";  this.style.top= document.getElementById(\"deposito\").getBoundingClientRect().bottom + \"px\";  '  "+
	   "style='margin:0px; position:absolute;'  >"+subtitulosPPT[punteroPPT]+"</p>";
	 elFrame.style.backgroundColor="rgb(0,13,38)";
	 TweenMax.from( elFrame , 0.5 , { x:400,  scale:0.5, opacity:0 ,ease:Bounce.easeOut 		});
}

function verCuadro() {
   t1=clipPPT[2+(6*punteroPPT)];
   t2=clipPPT[3+(6*punteroPPT)];
   player.setAttribute("src", laCharla);
   //console.log("VerCuadro tiempos t1 y t2: "+ t1 + " , "+t2);
    elFrame.style.display="block";
    elFrame.style.left = ""+ clipPPT[4+(6*punteroPPT)] +"%";
	elFrame.style.top = ""+ clipPPT[5+(6*punteroPPT)] +"%";
	elFrame.style.width = ""+ (10+clipPPT[1+(6*punteroPPT)]) +"px";
	elFrame.style.visibility = "visible";
    player.onloadeddata  =function ()
    {
    try {player.currentTime=0.0+(t1/1000); player.play(); } catch(err){alert("no se pudo afinar currentTime");};
    }
  	//console.log("tiempo Actual ="+ player.currentTime);
	procesoX= setTimeout( function(){  player.pause(); } , t2 - t1 );
}

function indicarFinX() {
	tux= document.getElementById("pop2");
	tux.innerHTML="<span style='font-size:23px; font-weight:bold; color:darkgray; margin:0px;' >fin</span>";
     tux.style.position="absolute";
	tux.style.left=(pptPlayer.getBoundingClientRect().left+10)+"px";
	tux.style.top=(pptPlayer.getBoundingClientRect().top+pptPlayer.getBoundingClientRect().height)+"px";
	tux.style.visibility="visible";
	player.pause(); player.setAttribute("scr","");
	tux.setAttribute("title","Pulse cerrar (X).");
	tux.style.opacity=1;
	tux.style.margin="0px";
   player.setAttribute("src", "");
   punteroPPT=0;
}

function advancePPT (){
	tux.style.visibility="hidden";
	clearTimeout(procesoX);
	//player.setAttribute("src", "");
	punteroPPT++;
	if (  (punteroPPT) == (longPPT) )  {  indicarFinX();  setFrame (punteroPPT); }
	 else {    setFrame (punteroPPT); }
}

function backPPT (){
	clearTimeout(procesoX);
    player.setAttribute("src", "");
	punteroPPT+=-1;
	if ((punteroPPT  ) < 0 ) {  punteroPPT=0; return;}
	tux= document.getElementById("pop2");
	tux.style.visibility="hidden";
    setFrame (punteroPPT);
}

function offPPT () {
	indagarAlCierre();
    clearTimeout(procesoX);
	player.pause();
	pausarPPT=true;
	document.getElementById("newPlayer").style.display="none";
    document.getElementById("pop1").style.display="none";
	player.setAttribute("src","");
	tux.style.visibility="hidden";
}

function ilustrarN(url, px, py, ancho, urlDescarga, hilera, duracion){
	ilustrar(url,px,py,ancho);
	lugar= alturaPizarra-50; 
	lineax = document.createElement("p");
	iconox = document.createElement("p");
	lineax.innerHTML="<p style='margin:0px; width:100%; text-align:center; background-color:black; color:white; font-size:24px; position: absolute; bottom:-12px; left:0%; z-index: 500; '  >"+hilera+"</p>"
   iconox.innerHTML= "<a href=" + '\"' +urlDescarga + '\"' +" download ><img id='efra' class='icoDescarga' title='Clic para descargar.' src='./recursos/iconosN/icoArchivo.png' "+
	   " style=' width:70px; position: absolute; bottom:60px; right:10px; z-index: 500; cursor: pointer;'/></a>";
   base.appendChild(lineax);
   base.appendChild(iconox);
   TweenMax.fromTo( "#efra" , 1.5 , { left:"50%", width:100,  bottom:40, rotation:-720 }, { left:"80%",  rotation:0, bottom:40 } );
   b=TweenMax.fromTo( "#efra" , 0.5 , {  width:80 } , { width:70, ease: Bounce.easeInOut} , 1 );
   vecesRep= duracion / 0.5; 
   b.repeat(-1); 
}

var base, estampilla; 
//---------------------------------------------------------------------------------
function ilustrar (url, px, py, ancho) { 
	base=document.getElementById("contenedorEstampilla");
	base.style.zIndex="53"; 
	estampilla = document.createElement("img");   
	estampilla.setAttribute("class", "animame");
	estampilla.setAttribute("id", "imgO");
	estampilla.setAttribute("src",url);
	base.style.position="absolute";
	base.style.top=py+"%";
	base.style.left=px+"%";
	estampilla.style.width="0px";
	estampilla.style.opacity="0";
	estampilla.style.backgroundColor="white";
	estampilla.style.borderRadius="30px"; 
	base.appendChild(estampilla);
	estampilla.style.display="block";
	base.innerHTML+=
	"<span onclick='cerrarilu(); '><img title='Clic para cerrarme.' src='./recursos/iconos/equis.png' "+
	" style=' width:25px; position: absolute; top:0.2%; right:0.2%; z-index: 500; cursor: pointer;'/></span>";
	//estampilla.onmouseout=function () { cerrarilu()} 
	// TweenMax.from( estampilla, 6 , {  width:ancho });
	TweenMax.to( "#imgO" , 0.5 , {  width:ancho ,borderRadius:"0px" ,  opacity:1 });
}

function cerrarilu(){  
   indagarAlCierre(); 
   base.innerHTML="" 
   apuntador.style.display="none";
   document.getElementById("player2").pause();
   player.pause();
   if (enPotterDiario=="falso") { 
		document.getElementById("zonaDigitar").style.display="none"; 
         document.getElementById("zonaDigitar").innerHTML="";    } 
	else {enPotterDiario="falso";}
   clearInterval(f);
}

function ilustrarAtributo (hil) {
   estampilla.setAttribute("title", hil);
}

function operar(id, estado){ document.getElementById(id).style.display=estado; }
function ocultarEnT (obj, accion, tiempo) {  setTimeout(function(){ operar   (obj, accion); }, tiempo);}
function activarEnT (obj, accion, tiempo) {  setTimeout(function(){ operar   (obj, accion); }, tiempo);}

var player2;
function playExplain ( urlMP3 ) {
	if (enAnimacion) {return;}
	player2=document.getElementById("player2");
    player2.setAttribute("src", urlMP3);
	player2.play();
}



function cerrarPop1() {
	indagarAlCierre();
  //document.getElementById("ilustracion").style.visibility="hidden";
   //document.getElementById("pie").style.visibility="hidden";
   estampilla.setAttribute("src","");
   estampilla.style.display="none";
   apuntador.style.display="none";
   clearTimeout(indicadorCola);
}

function resetComponentes() {
	 //ventanita.style.visibility="hidden";
	estampilla.setAttribute("src","");
	estampilla.style.display="none";
	document.getElementById("pop2").style.visibility="hidden";
	document.getElementById("pop1").style.visibility="hidden";
	document.getElementById("ilustracion").style.visibility="hidden";
	document.getElementById("pie").style.visibility="hidden";
	player.pause(); player.setAttribute("src","");
	clearTimeout(indicadorCola);
}

var ventanita, indicador;
var estaPresentando=false;

function denotar(urlImagen, texto, mix , miy, ancho) {
	if (ventanaVideo.innerHTML!="" ){return;}
	resetComponentes();
	quitarApuntador();
	// player.pause(); player.setAttribute("src","");
	ventanita=document.getElementById("pop1");
	document.getElementById("ilustracion").setAttribute("src",urlImagen);
	document.getElementById("pie").innerHTML=texto;
	ventanita.style.left=""+mix+"%";
	ventanita.style.top=""+miy+"%";
    ventanita.style.width=""+ancho+"px";
    document.getElementById("ilustracion").style.visibility="visible";
    document.getElementById("ilustracion").setAttribute("width", ancho);
    document.getElementById("pie").style.visibility="visible";
    ventanita.style.visibility="visible";
    ventanita.innerHTML+="<span onclick='cerrarPop1();'><img title='Clic para cerrar.' src='../recursos/iconos/equis.png' "+
	" style=' width:17px; position: absolute; top: 9px; right: 9px; z-index: 500; cursor: pointer;'/></span>";
}

var ventanita, indicador, pieRespaldo, infoPerfilar, infoConnotar;
var estaPresentando=false;

function connotar (urlim,posTop,posLeft,tam){
    infoConnotar.style.left=""+posLeft+"%";
	infoConnotar.style.top=""+posTop+"%";
	infoConnotar.setAttribute("width",""+tam+"") ;
	infoConnotar.setAttribute("src", urlim);
	infoConnotar.style.display="block";
}

//--- perfilarInformar  coloca un texto mensaje emergente en un componente infoPerfilar div del html que inicia display:none; y colocado encima del componente
function perfilarInformar (mensa) {
   infoPerfilar.style.left=ventanita.style.left;
   infoPerfilar.style.width=anchoRespaldo;
   infoPerfilar.innerHTML=mensa;  infoPerfilar.style.display="block";
}
 var ilustraDep, anchoDep;
function perfilarRestaurar () {infoPerfilar.innerHTML="";
    infoPerfilar.style.display="none"; 
	//player2.pause();
    infoConnotar.style.display="none";
	}
var anchoRespaldo;
 // perfilar usa pop3 para alojar un elemento HTML que esta en un arreglo de elemento HTML
 var fueraAnimacion; 
function perfilar (indElemento, texto, mix , miy, ancho) {
	//if (ventanaVideo.innerHTML!="" ){return;}
	//resetComponentes();
	fueraAnimacion=false; 
	quitarApuntador();
	// player.pause(); player.setAttribute("src","");
	ventanita=document.getElementById("pop3");
	//ventanita.setAttribute("onmouseout", "cerrarPop();");
	infoPerfilar=document.getElementById("infoPerfilar");
	document.getElementById("ilustracion").innerHTML=elementosHTML[indElemento];
    ilustraDep=document.getElementById("ilustracion");
    anchoDep= document.getElementById("ilustracion").getBoundingClientRect().width;
	document.getElementById("pie").innerHTML=texto;
	pieRespaldo=texto;
	ventanita.style.left=""+mix+"%";  infoPerfilar.style.left=""+mix+"%"; 
	ventanita.style.top=""+miy+"%";  infoPerfilar.style.top=""+(miy-6)+"%" ; 
   anchoRespaldo=+ancho+"px"; 
	//ventanita.style.width=""+ancho+"px";
    document.getElementById("ilustracion").style.visibility="visible";
    document.getElementById("ilustracion").style.width=ancho+"px";
    document.getElementById("pie").style.visibility="visible";
    document.getElementById("pie").style.width=""+ancho+"px";
    document.getElementById("pie").innerHTML=pieRespaldo;
    ventanita.style.visibility="visible";
    document.getElementById("ilustracion").innerHTML+=
    "<span onclick='cerrarPop();'><img title='Clic para cerrar.' src='./recursos/iconos/equis.png' "+
	" style=' width:25px; position: absolute; top:1%; right:0.5%; z-index: 500; cursor: pointer;'/></span>";
   TweenMax.from(  "#ilustracion"  , 0.5 , { y:600,  scale:0.5 , opacity:0.5		});
}

function cerrarPop() {
	setTimeout (function verificarxx () {indagarAlCierre();}, 250); 
	fueraAnimacion=true;
	player.pause(); player.setAttribute("src","");  player2.pause();
	player2.style.display="none"; 
	document.getElementById("pop1").style.visibility="hidden";
	document.getElementById("pop2").style.visibility="hidden";
	document.getElementById("pop3").style.visibility="hidden";
	document.getElementById("ilustracion").style.visibility="hidden";
	document.getElementById("pie").style.visibility="hidden";
	document.getElementById("ilustracion").innerHTML="";
	document.getElementById("pie").innerHTML="";
	apuntador.style.display="none";
	document.getElementById("zonaDigitar").innerHTML=""; 
	document.getElementById("zonaDigitar").style.display="none"; 
	}
	
function playExplainUser(urlSonido , mix , miy , an ) {
	player2=document.getElementById("player2");
    player2.setAttribute("src", urlSonido);
	player2.setAttribute("controls" ,true);
	player2.style.position="absolute";
    player2.style.left=mix+"%";
    player2.style.top=miy+"%"; 	 
    player2.style.width=an+"px"; 		
	player2.style.zIndex="200"; 		
	var tl = new TimelineLite(); 
	tl.fromTo( "#player2" , 2, { left:0, top:600 } , {left:360, top:525,   ease:Bounce.easeOut   } );
	player2.style.display="block";
}

// Zona de URLs de Videsos

var   urlVideos = new Array(
"", // NO SE USA
"<iframe width='600' height='450' src='https://www.youtube.com/embed/otl02quQQag?rel=0' frameborder='0' allowfullscreen></iframe>",   // 1) Felipe  Momento 1
"<iframe width='848' height='440' src='https://www.youtube.com/embed/FsCeVrHBOCQ?rel=0' frameborder='0' allowfullscreen></iframe>",  // 2) parámetros  Momento 1
"<iframe width='848' height='440' src='https://www.youtube.com/embed/2UI1co4GCIc?rel=0' frameborder='0' allowfullscreen></iframe>",  // 3) funciones integradas  Momento 2
 "<iframe width='848' height='440' src='https://www.youtube.com/embed/SAnk_HapoN8?rel=0' frameborder='0' allowfullscreen></iframe>",  //  4) Se define la función estarodeado.  Momento 5
 "", // NO  SE USA
 "<iframe width='848' height='440' src='https://www.youtube.com/embed/LPB9bMHPyW8?rel=0' frameborder='0' allowfullscreen></iframe>",// 6 camara   Momento 6
 "<iframe width='848' height='440' src='https://www.youtube.com/embed/Mu7m55y5BRg?rel=0' frameborder='0' allowfullscreen></iframe>", // 7) programar Camara Momento 6
 "<iframe width='848' height='440' src='https://www.youtube.com/embed/dJ3FIw_NJrI?rel=0' frameborder='0' allowfullscreen></iframe>" ,// 8) Eventos y camaras Momento 6

 "<iframe width='848' height='440' src='https://www.youtube.com/embed/xpXWdjwEGrs?rel=0' frameborder='0' allowfullscreen></iframe>", // 9) OJO: captura de imagen de escena para foro  Momento 7  Hay que ajustar sonido y video Diana Premier.

 "<iframe width='848' height='440'  src='https://www.youtube.com/embed/GKax5vhf76w?rel=0' frameborder='0' allowfullscreen></iframe>" , // 10) aTubeCatcher      Momento 8
"<iframe width='848'  height='440' src='https://www.youtube.com/embed/8Yldg1LGzxA?rel=0' frameborder='0' allowfullscreen></iframe>" , //  11 )subir a You Tube.   Momento 8
"<iframe width='848'  height='440' src='https://youtube.com/embed/dPlRK8-2vVA?rel=0' frameborder='0' allowfullscreen></iframe>" , // 12)  números aleatorios.   Momento 3
"<iframe width='848'  height='440' src='https://youtube.com/embed/aKcD6SUZtYU?rel=0' frameborder='0' allowfullscreen></iframe>"  // 13)  Condicionles.   Momento 4
  );


 //  denotarVideo ( numVideol, ancho , %x , %y , \"Pie de Video en texto\");
var hileraUrlYoutube;
function denotarVideo(idVideo, anchoContenedor, ddx, ddy, hilera)  {
	// id Video es una hilera que se aplica al arreglo semántico urlVideos : urlVideos[idVideos]
	// eso debe ponerse el atributo SRC de un tag de Video de HTML5
	quitClip();
	apuntador.style.display="none";
	z = document.getElementById("pop2");
    hileraUrlYoutube= urlVideos[idVideo];
  	z.innerHTML=hileraUrlYoutube+"<br/>"+hilera;
	z.setAttribute("title"," Si desean pueden maximizar el video.");
	z.style.left=""+ddx+"%";  // sera con porcentajes
	z.style.top=""+ddy+"%";
	z.style.visibility="visible";
	z.style.width=""+anchoContenedor+"px";
	z.innerHTML+="<span title='Clic para cerrar.' onclick='cerrarPop();'><img src='../recursos/equis.png' "+
	" style=' width:17px; position: absolute; top: 9px; right: 9px; z-index: 500; cursor: pointer;'/></span>";
}

function quitClip() 
{
	clearTimeout(indicadorCola);
	player.setAttribute("src","");
	cerrarilu();
}

function quitarApuntador(){		
     apuntador.style.display="none";
}

// senalar ( %1 , %2 , \"./recursos/apuntandor#.png );
function senalar(porx,pory, urlDeFlecha) {
	if (ventanaVideo.innerHTML!="" ){return;}
	apuntador.style.display="none";
	apuntador.setAttribute("src",urlDeFlecha);
	apuntador.style.position="absolute";
	apuntador.style.left=""+porx+"%";
	apuntador.style.top=""+pory+"%";
	apuntador.style.width="8"+"%";
	apuntador.onload=function(){apuntador.style.display="block";};
}

function volverAPortada(){
    urlEnlace="../../index.html";
    window.location.assign(urlEnlace);
}

var urlV;
function denotarVideoLocal(idVideo, anchoContenedor, ddx, ddy, hilera, dhx, dhy) 
{
 // ---- idVideo es una hilera con el url , ancho , x , y
 urlV= idVideo;
 document.getElementById("video").src=urlV ;
 document.getElementById("video").controls="1" ;
 document.getElementById("video").style.width= ""+anchoContenedor+"%";
 document.getElementById("video").style.left= ""+ddx+"%";
 document.getElementById("video").style.top= ""+ddy+"%";
 document.getElementById("video").style.display="block" ;
 document.getElementById("denominacion").style.width= ""+(anchoContenedor+ 1)+"%";
 document.getElementById("denominacion").style.left= ""+(ddx+dhx)+"%";
 document.getElementById("denominacion").style.top= ""+(ddy+dhy)+"%";
 document.getElementById("denominacion").style.display="block" ;
 document.getElementById("denominacion").innerHTML=hilera;
  document.getElementById("video").playbackRate = 1.0;
 document.getElementById("video").play();
 document.getElementById("denominacion").innerHTML+="<span title='Clic para alternar velocidad.' onclick='alternarVelocidad();'><img class='icoDescarga' src='./recursos/iconosN/auControl.png' "+
	" style=' width:65px; position: absolute; top: 35px; right: 4px; z-index: 500; cursor: pointer;'/></span>";
document.getElementById("denominacion").innerHTML+="<span title='Clic para cerrar.' onclick='cerrarVideo();'><img src='./recursos/iconosN/equis.png' "+
	" style=' width:23px; position: absolute; top: 2px; right: 2px; z-index: 500; cursor: pointer;'/></span>";
 TweenMax.from(  "#video"  , 0.3 , { top:"-400px",  scale:0.5 , opacity:0.1, ease:Bounce.easeOut });
  playExplain("./recursos/pop.mp3"); 
}

function  alternarVelocidad(){
	document.getElementById("video").pause(); 
	vvvHTM=document.getElementById("video").playbackRate; 
	if (vvvHTM==1.0) { document.getElementById("video").playbackRate = 1.4; }
	  else {document.getElementById("video").playbackRate = 1.0; }
	document.getElementById("video").play(); 
}
function cerrarVideo() {
	document.getElementById("video").pause(); 
	document.getElementById("denominacion").style.display="none";
	document.getElementById("video").src="";
	document.getElementById("video").style.display="none";
}

function cerrarVideo() {
	indagarAlCierre();
	document.getElementById("video").pause(); 
	document.getElementById("denominacion").style.display="none";
	document.getElementById("video").src="";
	document.getElementById("video").style.display="none";
}

var yRectFondo,espacioE, listaICOs ;
var alturaPizarra, anchoPizarra, xPizarra, yPizarra, xPizarraP, yPizarraP, alturaCuerpo, anchoCuerpo; 

function enmarcarRes(){
	 y1E = document.getElementById("deposito").getBoundingClientRect().top;
	 yFondoE=document.getElementsByClassName("footer")[0].getBoundingClientRect().top;
     espacioE = yFondoE - y1E-23;
	document.getElementById("deposito").style.height =espacioE+"px"; 
	y1E= document.getElementById("orientacion").getBoundingClientRect().top;
	espacioE=  yFondoE - y1E-55;
	document.getElementById("orientacion").style.height =espacioE+"px"; 
	alturaPizarra = document.getElementById("deposito").getBoundingClientRect().height;
	anchoPizarra = document.getElementById("deposito").getBoundingClientRect().width;
	xPizarra = document.getElementById("deposito").getBoundingClientRect().left;
	yPizarra = document.getElementById("deposito").getBoundingClientRect().top;
	alturaCuerpo = (document.getElementsByClassName("header")[0].getBoundingClientRect().height) + alturaPizarra ;
	anchoCuerpo = (document.getElementsByClassName("header")[0].getBoundingClientRect().width) ;
	xPizarraP = parseInt (xPizarra/anchoCuerpo*100);
	yPizarraP = parseInt (yPizarra/alturaCuerpo*100);
	listaICOs= document.getElementsByClassName("icoDescarga");
for (i = 0; i < listaICOs.length; i++) { listaICOs[i].style.height=""+(parseInt(0.20 * alturaPizarra))+"px"; listaICOs[i].style.width=""+(parseInt(0.20 * alturaPizarra))+"px"; 
	}
	if ( document.getElementById("metafora") != null ) {  
	    document.getElementById("metafora").style.width=""+(anchoPizarra-20)+"px"; 
		document.getElementById("metafora").style.height=""+(alturaPizarra-57)+"px"; 
	}
}


var punteroOrientaciones, arreglox;


//  S(i)  es un procedimiento para cargar los paquetes de iconos para las pizarras asociadas a los elementos del menú de la izquierda.
  function s(i)  { 
	  if (enAnimacion) {return;}
	  player.pause();
      document.getElementById("player2").pause();
	  ocultarPresentacion();
	  document.getElementById("deposito").innerHTML=paquetes[i];	
	  enmarcarRes();
	  activarColores (i-1);
}
// SL (i) : con este procedimiento se carga la colunma lateral derecha asociada. Me esta interesando crear un navegador para caminar por las indicaciones y orientaciones
// y no tener que desplegarlas como un todo, sino en un pop up con una fuente mas grande que motive su lectura o con alguna animación como escribirlos letra por letra para
// motivar la lectura.
function sl(i) { 
  if (enAnimacion) {return;}
  punteroOrientaciones=-1;
  arreglox= eval ("orientacion"+i);
  andarSl(1);
}

function andarSl (inc) {
    punteroOrientaciones=punteroOrientaciones+inc;
    if (  (punteroOrientaciones >= arreglox.length || punteroOrientaciones<0)  ){  punteroOrientaciones=0; }
    document.getElementById("orientacion").innerHTML= arreglox[punteroOrientaciones];
    document.getElementById("contador").innerHTML=""+(punteroOrientaciones+1)+"/"+arreglox.length;
}

function retroalimenta ( frase) {
     document.getElementById("retroalimentar").innerHTML=frase;
	 document.getElementById("retroalimentar").style.display="block";
   }

function quitarRetro () {
     document.getElementById("retroalimentar").innerHTML="";
	document.getElementById("retroalimentar").style.display="none";
  }

// Amimación

function sleep(miliseconds) { var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) { }
}

function animar ( id , x0,y0, tam, animac) {
	document.getElementById(id).addEventListener ("animationend" ,function() { 
	       document.getElementById(this.id).style.left=this.x0+"px"; 
		   document.getElementById(this.id).style.top=y0+"px"; 
		   document.getElementById(this.id).style.width=tam+"px"; 
		   var qX = document.getElementById(this.id);
		   setTimeout( function(){ qX.style.animation="";   }, 2000);     });
   document.getElementById(id).style.top=y0+"px";
	document.getElementById(id).style.left=x0+"px";
   document.getElementById(id).style.width=tam+"px"; 	
   document.getElementById(id).style.display="block"; 
   document.getElementById(id).style.animation=animac;
}
function destellar (obj, an ) {
	if ( document.getElementById(obj).style.display=="block" ) {
		//document.getElementById(obj).style.animation.iterationCount="3";   
	   document.getElementById(obj).style.animation=an; 
	   setTimeout (function () {
		   if (fueraAnimacion) {return;}
		   document.getElementById(obj).style.animation=""; 
	   } , 1600); 
}}

//  herramientas de digitación para texto legible y enfocar atención. 
var f;
 function escribiendo(h, t ,cont, timeEspera) {
	clearInterval(f); 
     var contador=0; 
	var hs="";
	//alert("->"+timeEspera+"<-");
     f = setInterval( function (){ 
	    if ( h.substring(contador,contador+1).localeCompare("|") == 0 ) { hs+="<br/>";  } 
	      else { hs+= h.substr(contador,1); }
	    document.getElementById(cont).innerHTML=hs;
	    if (contador>=h.length) {
		     if (timeEspera == -1) { clearInterval(f);  }    
			   else {setTimeout(function (){     
						document.getElementById(cont).style.display="none";
						}, timeEspera);
				}	  
		} else { contador++; } 
		}  , t  );  
}
 
 // mecanismo para digitar un texto a cierta velocidad para fomentar la lectura detallada.
 function digitarSobre ( elemento , posx, posy , contenido, tiempo, ancho, fontS, timeEspera) {
	 var lineaDig= document.getElementById(elemento);
	 lineaDig.style.position="absolute"; lineaDig.style.left=posx+"px"; lineaDig.style.top=posy+"px";
	 lineaDig.style.width =ancho+"%";
	 lineaDig.style.fontSize =fontS+"px";
	 lineaDig.innerHTML="";
	 lineaDig.style.display="block";
	 escribiendo(contenido, tiempo , elemento , timeEspera ); 
 }
 
 // --- herramientas de indagación con lecto-escritura.
 function getIndagacion (i,j) { 
    if ( indagaciones.length <  i) return "nada";
	  else 
		if ( indagaciones[i-1].length < j)  return "nada";
	        else return indagaciones[i-1][j-1]; 
}

var actividadActual, indagacion;
var pizarraEventos, pizarraEventosMM; 
function registrarIndagacion(nA, nIndag, tipoIndagacion){
	actividadActual= nA-1; 
	indagacion= nIndag-1;
	pizarraEventos=tipoIndagacion;   // se usa "1" es evento al cerrar  y si usa algo mayor que uno es el Tiempo mililsegundos para lanza la indagación.
    if (pizarraEventos>1) {setTimeout( function indagar(){plantearPregunta(indagaciones[actividadActual][indagacion]);} ,   pizarraEventos ); pizarraEventos=0; };
}

function indagarAlCierre() {
	if (pizarraEventos==1) {
      	plantearPregunta (indagaciones[actividadActual][indagacion]) ; pizarraEventos=0; 
	}
	if (pizarraEventosMM==1) {
      	indagarMM ( punteroMM , contenidoMen ) ; pizarraEventosMM=0; 
	}
}

function plantearPregunta(pregunta){
	document.getElementById("infoPerfilar").innerHTML="";
	perfilar (2, "&nbspTrata de pensar y contestar esta pregunta.&nbsp", 68.5 ,23.5 , 450 ) ;   
	document.getElementById("textoIndagar").innerHTML=pregunta;
}

var valorEntrada,  memoria;
function verDatos() {
	valorEntrada = document.getElementsByName("anotacion")[0].value;  // expresión para recuperar el valor de la entrada (input)
	cerrarPop(); 
	console.log("Respuesta="+valorEntrada);
	apuntarMemoria (valorEntrada); 
}

function apuntarMemoria (mensaje){
	memoria.push( indagaciones[actividadActual][indagacion] ); 
	memoria.push ( mensaje ); 
}

var vista;
function desplegarMemoria() {
	perfilar (3, "&nbspPreguntas y respuestas realizadas.&nbsp", 6.8 , 24 , 975 ) ;   
	vista = document.getElementById("recolector");
	vista.style.fontSize="22px";
	vista.style.fontFamily="Lato";
	vista.style.textAlign="left";
	//vista.style.backgroundColor="rgb(4,43,79)";
	indice = 0;
	vista.innerHTML=""; 
	if (memoria.length < 1) { vista.innerHTML="&nbspNo hay información almacenada."; return; }
	while ( indice <  memoria.length ) {
		vista.innerHTML+= "<span>&nbsp</span>"+memoria[indice]+"<span>&nbsp&nbsp</span>";
		vista.innerHTML+= memoria[indice+1]+"<br/>";
		vista.innerHTML+= "<p>-------------------------------</p>";
		indice = indice + 2;
    }
}

function verPiz0() {
	s(0); document.getElementById("orientacion").innerHTML="";
	document.getElementById("orientacion").innerHTML=mensajexx4;
	punteroOrientaciones=-1;
     arreglox= new Array ( document.getElementById("orientacion").innerHTML );
     andarSl(1);
}

// --- herramientas de indagación con lectura no convensional
var punteroMM, contenidoMen; 
function registrarIndagacionMM(n, men , tipoIndagacion){
	punteroMM=n;
	contenidoMen=men; 
	pizarraEventosMM=tipoIndagacion;   // se usa "1" es evento al cerrar  y si usa algo mayor que uno es el Tiempo mililsegundos para lanza la indagación.
    if (pizarraEventosMM>1) {setTimeout( function indagar(){ indagarMM(n,men)} ,   pizarraEventosMM ); pizarraEventosMM=0; };
	
}

function indagarMM ( indice , mensaje) {
	perfilar (4, mensaje , 6.8 , 18 , 975 );
	imagenMM = document.getElementById("ilustracionIMM");
	imagenMM.style.borderRadius="5px";
	imagenMM.setAttribute("src", indagacionesMM[indice][1]);
	document.getElementById("zonaDigitar").style.zIndex="55"; 
	digitarSobre ("zonaDigitar", 270,110,  indagacionesMM[indice][0], 250, 40, 45, -1 );
	player.pause();
	playExplain( indagacionesMM[indice][2] );
}

// -- innovacion Harry Potter Diario --------------------A (video) o B  (img)-----------------------------------
// -- ["Título del diario", 50 , "Parrafo 1:En esta ilustracion puedes ...", 
//                  "Parrafo no 2. ...",   "B"   , "./recursos/contenidos4/creacionVariable.png" ] 
function connotarPotterDiario(nEntrada, audioArchivo , mensaje, dataRetro ) {
	porcentajeParticion=diarioHarryPotter[nEntrada][1];
	perfilar (5, mensaje , 0.5 , 15 , 1080 );
	 document.getElementById("zonaDigitar").style.zIndex="55"; 
	 document.getElementById("parrafo1").innerHTML=diarioHarryPotter[nEntrada][2]; 
	 document.getElementById("parrafo2").innerHTML=diarioHarryPotter[nEntrada][3]; 
	 document.getElementById("primerColumnaP").style.width=porcentajeParticion+"%"; 
	 document.getElementById("segundaColumnaP").style.width=(100-porcentajeParticion)+"%"; 
	 var tl = new TimelineLite(); 
	 if (diarioHarryPotter[nEntrada][4]=="A"){
	        document.getElementById("ilustraPotter").innerHTML="<video   id='videoPotter' controls ></video>  "; 
		    document.getElementById("videoPotter").setAttribute("src", diarioHarryPotter[nEntrada][5] );
			tl.fromTo( "#videoPotter", 2 , { width:"0%", opacity:0 }, {width:"100%", opacity:1  ,ease:Elastic.easeOut }) ;
			document.getElementById("ilustraPotter").setAttribute("data-retro", dataRetro );
			
	   }else {
		     document.getElementById("ilustraPotter").innerHTML="<img id='imgPotter'   /> ";
			document.getElementById("imgPotter").setAttribute("src", diarioHarryPotter[nEntrada][5] );
		    tl.fromTo( "#imgPotter", 3, { height:0, opacity:0 }, {height:380, opacity:1  ,ease:Back.easeOut }) ;
			document.getElementById("imgPotter").setAttribute("style", "width:85%" );
			player2.setAttribute("title", "Play para escuchar..." );
			//document.getElementById("imgPotter").setAttribute("onclick", "sonarAu (\" "+audioArchivo+" \" );" );
			document.getElementById("ilustraPotter").setAttribute("data-retro", dataRetro );
			playExplainUser( audioArchivo, 23,76, 250); 
	     }
	 digitarSobre ("zonaDigitar", 150,95,  diarioHarryPotter[nEntrada][0], 100, 50, 35, -1 );
}

function sonarAu(url ){playExplain(url); }

var enPotterDiario="falso";
function defSignificacion(indSig, anPix, mix, miy) {
	enPotterDiario="cierto";
	ilustrar(significacionesPotter[indSig], mix, miy , anPix );
	}


function visibilizar(obj ){ 
	document.getElementById(obj).style.display="block";
}

function estimular(elemento) {
	TweenMax.fromTo ( elemento   ,  1 , { x:'-=125px' ,rotation:-25, opacity:0 }, { x:'+=125px' ,rotation:0, opacity:1}  );  
}
var ancho
function sacudir( elemento , an2 ) {
TweenMax.fromTo ( elemento   ,  1 , { width:an2-200 , opacity:0.1 }, { width:an2 , opacity:1,  ease:Elastic.easeOut }   ); 
}

function presentarCreditos(){
	denotarVideoLocal("./recursos/contenidos0/creditos3er.mp4", 73, 5 ,5 ,
	 "Música, Arte y Naturaleza." , 0.1 ,-5) ;
  }
  var taps;
function levantarPestanas(){
                taps = document.getElementsByClassName("menuitemH"); 
}

function activarColores(i){
   for (index=0; index<taps.length ; index++){
                               if (index==i) { console.log("igualé"); 
                                                  taps[i].style.backgroundColor="rgb(0,160,223)";}
                                  else { taps[index].style.backgroundColor="rgb(4,43,79)";}
                }
}

function visitarEsfera(url){
	//window.location.assign(url);
	window.open(url, "_newtab");
}
  


 
 
 
