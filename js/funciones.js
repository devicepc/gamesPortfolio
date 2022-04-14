import {textoDifCorrec, textoinc, btnpregboxCorr,  btnspregboxInc,pregBox, pregBox2, pregBox3, btnIncEj2, btnCorrEj2, btnIncEj3, btnCorrEj3} from "./variables.js";

pregBox, pregBox2, pregBox3;
btnpregboxCorr.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("ResPreg1").innerHTML =textoDifCorrec;
    document.getElementById("ResPreg1").style.color="green";
});
 
 
btnspregboxInc.addEventListener("click", function(evento) {
      
	document.getElementById('ResPreg1').innerHTML= textoinc;
	document.getElementById("ResPreg1").style.color="red";
  });

  // preguntas ej 2
  btnCorrEj2.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("ResPreg2").innerHTML =textoDifCorrec;
    document.getElementById("ResPreg2").style.color="green";
});
 
 
btnIncEj2.addEventListener("click", function(evento) {
      
	document.getElementById('ResPreg2').innerHTML= textoinc;
	document.getElementById("ResPreg2").style.color="red";
  });


  // preguntas ej 3
  btnCorrEj3.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("ResPreg3").innerHTML =textoDifCorrec;
    document.getElementById("ResPreg3").style.color="green";
});
 
 
btnIncEj3.addEventListener("click", function(evento) {
      
	document.getElementById('ResPreg3').innerHTML= textoinc;
	document.getElementById("ResPreg3").style.color="red";
  }); 