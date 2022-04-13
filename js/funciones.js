import {textoDifCorrec, textoinc, btnpregboxCorr, i, btnspregboxInc,pregBox} from "./variables.js";

pregBox;
btnpregboxCorr.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("ResPreg1").innerHTML =textoDifCorrec;
    document.getElementById("ResPreg1").style.color="green";
});
 
 
btnspregboxInc.addEventListener("click", function(evento) {
      
	document.getElementById('ResPreg1').innerHTML= textoinc;
	document.getElementById("ResPreg1").style.color="red";
  });
