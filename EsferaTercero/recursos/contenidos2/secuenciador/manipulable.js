var destino, elementoArrastrado, arrastrando, piezas, botonPensar, conteo, player;

function empezar() {
	arrastrando=false;
	conteo=0;
	player = document.getElementById("player"); 
	player.setAttribute("src","./Cons.mp3"); 
	botonPensar= document.getElementById("icoEvaluador");
	piezas = document.getElementsByClassName("manipulable");
    cantidadPiezas=piezas.length; 	
    for (i = 0; i < piezas.length; i++) {  
	    piezas[i].addEventListener ("mousedown",pinchar  , false );
	    piezas[i].addEventListener ("mousemove",arrastrar , false );
	    piezas[i].addEventListener ("mouseup",soltar , false );
		elemento.push(piezas[i].getAttribute("id"));
		elementoY.push(piezas[i].getBoundingClientRect().top);
		elementoX.push(piezas[i].getBoundingClientRect().left);
  }
  alturaBody=document.getElementById("conteoVal").getBoundingClientRect().bottom+1; 
  document.getElementById("continuar").style.height=alturaBody+"px";
  document.getElementById("continuar").style.display="block";
  

 
}
var gapx, gapy, identidad, movimientoE, brechax, brechay; 
function pinchar(ev){
	ev.preventDefault();
	if ( arrastrando != false ) {return; } 
	arrastrando=true;
	identidad=this.getAttribute("id") ;
	elx= this.getBoundingClientRect().left;
	ely= this.getBoundingClientRect().top;
	gapx= ev.clientX - elx;
	gapy= ev.clientY - ely;
	brechax= this.getBoundingClientRect().width/2;
	brechay= this.getBoundingClientRect().height/2;
}

function arrastrar(ev){
	ev.preventDefault(); 
	if (arrastrando) {
	document.getElementById(identidad).style.top=""+(ev.clientY-brechay)+"px";
	document.getElementById(identidad).style.left=""+(ev.clientX-brechax)+"px"; }
}
function soltar(ev){
	ev.preventDefault(); 
	arrastrando=false; 
	elemento.push(identidad); 
	elementoX.push(ev.clientX-gapx);
	elementoY.push(ev.clientY-gapy);
	
}
window.addEventListener("load", empezar);
window.onkeypress=reproducir; 

var pizarra= new Array ();  
var op1 , argumento1, argumento2, argumento, resultad;

function extraer(i,model){
	argumento1=-1; argumento2=0; 
	op1= "pieza"+parseInt(model[i].substring(0, 2));
	argumento= modelo1[i].substring(2, 3); 
    if (argumento === "x" ) {	argumento1 = document.getElementById(op1).getBoundingClientRect().left; }
	 if (argumento === "y" ) {	argumento1 = document.getElementById(op1).getBoundingClientRect().top; }
	if ( modelo1[i].length > 3 ) { 
		resultad= model[i].substring(3,4);
		if  ( resultad == "w" )  { argumento2= document.getElementById(op1).getBoundingClientRect().width ;}
		   else if ( resultad == "h" )  {argumento2 =  document.getElementById(op1).getBoundingClientRect().height; }
		}
	if ( modelo1[i].length > 4 ) { // hay desplazamientos o sea una "d" para +/-num
		      resultad= parseInt(model[i].substring(4));
			  argumento2 += resultad;  	
	}
	//console.log(""+op1+" arg1="+argumento1+" arg2="+argumento2);
	pizarra.push(op1); pizarra.push(argumento1);
	if (argumento2<0){ pizarra.push(0);}
	  else pizarra.push(argumento2); 
}

function evaluar (i, model ){
	pizarra= new Array(); 
	extraer (i,model); pizarra.push (model[i+1]); 
	extraer(i+2,model); 
	oper1=pizarra[1]+pizarra[2]; 
	oper2=pizarra[5]+pizarra[6]; 
	if (pizarra[3]=== "<" ) {
		if (oper1 < oper2) {return true;} else {return false;}
	} 
	    else  // pizarra[3] == ">" 
	        {  if (oper1 > oper2) {return true;} else {return false;}
	  }	  
}

var punteroError; 
function verificar (modelo){
	largoModelo= modelo.length/3;
	resultado=true;
    for (j = 0; j < modelo.length ; j=j+3) {
	  //console.log ("Condicion en-posicion "+j+"-------------------------------------------------------------------------------------------------");
	  valorBool = evaluar(j,modelo);
	  resultado= resultado && valorBool ; 
	  if (!resultado) { punteroError=j; break;}
      }	
	//console.log ("Construcción en estado="+resultado);
	return resultado; 
}

var banderaLogica; 
function valorar() {
	banderaLogica= verificar(modelo1); 
	document.getElementById("salida").style.top="60%";
	document.getElementById("salida").style.left="65%";
	if (banderaLogica) {
		document.getElementById("salida").setAttribute("src", "check.png"); 
		 // conteo+=1;  document.getElementById("conteoVal").innerHTML=""+conteo;
	} else { document.getElementById("salida").setAttribute("src", "error.png"); 
	         conteo-=1;
	         document.getElementById("conteoVal").innerHTML=""+conteo;
          	marcarError(); }
	setTimeout (function quitarCalificacion() 
			 {document.getElementById("salida").setAttribute("src", "");
			 document.getElementById("salida").style.top="0%";
			 document.getElementById("salida").style.left="0%";
			
			}  ,  3000 );
}

function marcarError() {
	document.getElementById(pizarra[0]).style.borderColor="orange";
	document.getElementById(pizarra[4]).style.borderColor="orange";
	document.getElementById(pizarra[0]).style.borderStyle="dashed"; 
	document.getElementById(pizarra[4]).style.borderStyle="dashed"; 
	document.getElementById(pizarra[0]).style.borderWidth="4px"; 
	document.getElementById(pizarra[4]).style.borderWidth="4px"; 
	setTimeout (function quitarMarca() {
		    document.getElementById(pizarra[0]).style.borderStyle="none"; 
			document.getElementById(pizarra[4]).style.borderStyle="none"; 
			}  ,  5000 );
}

// ----- Reproductor del proceso.
var siguiendo=false; 
var cantidadPiezas; 
var elemento = new Array ();
var elementoX = new Array ();
var elementoY = new Array (); 
var tecla;

function reproducir(event){
	tecla= event.which || event.keyCode; 
	console.log("tecla="+tecla); 
	if (tecla==120 && (!(siguiendo))) { //  tecla X 
	   siguiendo=true; reproductor(cantidadPiezas);
	} else
	if (tecla==48 && siguiendo) { 
         if (p>= elemento.length){ return;  }
		laID=elemento[p]; laXX=document.getElementById(laID).getBoundingClientRect().left; laYY=document.getElementById(laID).getBoundingClientRect().top;	
		laXXdestino=elementoX[p]; laYYdestino=elementoY[p]; 
		//console.log("id="+laID+" ... x="+laXX+" ... y="+laYY+" ... xD="+laXXdestino+" ... yD="+laYYdestino);
	    TweenMax.fromTo ( "#"+laID   ,  1 , { left:laXX, top:laYY, }, { left:laXXdestino, top:laYYdestino,ease:Elastic.easeOut  }  );
		p++;
	} else {
	if (tecla==49 && siguiendo) { 
		p=p-1;
		laID= elemento[p];
		pb1=p;
		//console.log("posicionado en "+laID); 
		pb1=pb1-1;
		while (pb1>=0) {
			
			if (laID == elemento[pb1] ) {
				// console.log("Hallando a "+laID+" en p = "+pb1);  
				break;
			 } else { pb1=pb1-1; }
		}
		if (pb1>=0) {laXXdestino=elementoX[pb1]; laYYdestino=elementoY[pb1];
			TweenMax.fromTo ( "#"+laID   ,  1 , { left:laXX, top:laYY, }, { left:laXXdestino, top:laYYdestino,ease:Elastic.easeOut  }  );
			} 	else { p=p+1;   }	
	}
	if (tecla==113 && siguiendo)  {siguiendo=false; }
	}
}

var p;
function reproductor(cant) {  //--  reposicionar pieza al inicio.
	 p=0; 
	while (p <(cant)){
		document.getElementById(elemento[p]).style.top=""+(elementoY[p])+"px";
		document.getElementById(elemento[p]).style.left=""+(elementoX[p])+"px";
		p++;
	}	
	
	
}

function darBienvenida (){
	document.getElementById("continuar").style.display="none";
	player.play();
}
function retroAlimentar(){
	document.getElementById("creditos").style.display="block"; 
}

function quitarRetro(){
	   document.getElementById("creditos").style.display="none"; 
}
