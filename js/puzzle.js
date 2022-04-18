
let piezas = document.getElementsByClassName('movil');

let tamWidh = [134,192,134,163,134,163,134,192,134];
let tamHeight = [163,134,163,134,192,134,163,134,163];

for(let i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}

let elementSelect = 0;  
let currentX = 0;
let currentY = 0;
let currentPosX = 0;
let currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt){
	let dx = evt.clientX - currentX;
	let dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	testing();
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

let entorno = document.getElementById('entorno');

function reordenar(evt){
	let padre = evt.target.parentNode;
	let clone = padre.cloneNode(true);
	let id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

let origX = [200,304,466,200,333,437,200,304,466];   
let origY = [100,100,100,233,204,233,337,366,337];

function iman(){
	for(let i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
			
let win = document.getElementById("win");

function testing() {
	let bien_ubicada = 0;
	let padres = document.getElementsByClassName('padre');
	for(let i=0;i<piezas.length;i++){
		let posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		let posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){
		win.play();
		wio();

	}
}


function wio (){
	let respuesta = prompt("que personaje es? ");
	if(respuesta == "pikachu"){
		alert("you win");
	}
}

