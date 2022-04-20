
 let zIndex=1
let host='https://devicepc.github.io/gamesPortfolio/images/preguntasPM/' 

pezaSeleccionada= false

function crearDreta(i){
	//return {draw:" l -10,50 l 10,50 ",invers:" l  -10,-50 l 10,-50 "}	
    let path =[
        {draw:"q -4,20 -5,43 l-5,0 a11,11 1,1,0 0,14 l5,0 q1,20 5,43",
         invers:"q -4,-20  -5,-43 l-5,0 a11,11 1,1,1 0,-14 l5,0 q 1-20 5,-43"},
        {draw:"q -4,20 -5,43 l5,0 a11,11 1,1,1 0,14 l-5,0 q1,20 5,43",
         invers:"q -4,-20 -5,-43 l 5,0 a11,11 1,1,0 0,-14 l-5,0 q 1-20 5,-43"},
         {draw:"q 4,20 5,43 l-5,0 a11,11 1,1,0 0,14 l5,0 q -1,20 -5,43",
         invers:"q 4,-20  5,-43 l-5,0 a11,11 1,1,1 0,-14 l5,0 q -1-20 -5,-43"},
        {draw:"q 4,20 5,43 l5,0 a11,11 1,1,1 0,14 l-5,0	q -1,20 -5,43",
         invers:"q 4,-20  5,-43 l5,0 a11,11 1,1,0 0,-14 l-5,0 q -1-20 -5,-43"}, 
    ]
    
    return path[Math.floor(Math.random()*path.length)]
    
}
function crearInferior(i){
	//return {draw:" l -50,10 l -50,-10 ",invers:" l  50,10 l 50,-10 "}
    let path =[
        {draw:"q -20,-4 -43,-5 l0,-5 a11,11 1,1,0 -14,0 l0,5 q-20,1 -43,5",
         invers:"q 20,-4 43,-5 l0,-5 a11,11 1,1,1 14,0 l0,5 q20,1 43,5 "},
        {draw:"q -20,-4 -43,-5 l0,5 a11,11 1,1,1 -14,0 l0,-5 q-20,1 -43,5",
         invers:"q 20,-4 43,-5 l0,5 a11,11 1,1,0 14,0 l0,-5 q20,1 43,5 "},
       {draw:"q -20,4 -43,5 l0,-5 a11,11 1,1,0 -14,0 l0,5 q-20,-1 -43,-5",
         invers:"q 20,4 43,5 l0,-5 a11,11 1,1,1 14,0 l0,5 q20,-1 43,-5 "},
        {draw:"q -20,4 -43,5 l0,5 a11,11 1,1,1 -14,0 l0,-5 q-20,-1 -43,-5",
         invers:"q 20,4 43,5 l0,5 a11,11 1,1,0 14,0 l0,-5 q20,-1 43,-5 "}, 
    ]
    
    return path[Math.floor(Math.random()*path.length)]
}
function inversDreta(i){
    return {draw:director[i-1].b.invers}
}
function inversSuperior(i){    
    return {draw:director[i-numCols].c.invers}
}

function dadesPeza(row,col,index){
	let object ={}
	switch (true) {
     case (col == 0 && row == 0) :
       object={
			type:"supEsquerra",
			a:{draw:" l 100,0 "},
			b:crearDreta(index),
			c:crearInferior(index),
			d:{draw:" l 0,-100"},
       }	
       break;
     case (row == 0 && col == numCols-1) :
       object={
			type:"supDreta",
			a:{draw:" l 100,0 "},
			b:{draw:" l 0,100 "},
			c:crearInferior(index),
			d:inversDreta(index),	 
		}		
       break;
     case (row == numRows-1 && col == 0) :
       object={
			type:"infEsquerra",
			a:inversSuperior(index),
			b:crearDreta(index),
			c:{draw:" l -100,0 "},
			d:{draw:" l 0,-100 "},
		}		
       break;			
     case (row == numRows-1 && col == numCols-1) :
       object={
			type:"infDreta",
			a:inversSuperior(index),
			b:{draw:" l 0,100 "},
			c:{draw:" l -100,0 "},
			d:inversDreta(index),		
		}	
       break;			
     case (row == 0 ) :
       object={
			type:"superior",
           a:{draw:" l 100,0 "},
           b:crearDreta(index),
           c:crearInferior(index),
           d:inversDreta(index),
		}
       break;
     case (col == 0 ) :
       object={
			type:"esquerra",
			a:inversSuperior(index),
			b:crearDreta(index),
			c:crearInferior(index),
			d:{draw:" l 0,-100 "},
		}		
       break;
     case (col == numCols-1 ) :
       object={
			type:"dreta",
			a:inversSuperior(index),
			b:{draw:" l 0,100 "},
			c:crearInferior(index),
			d:inversDreta(index),
		}		
       break;			
     case (row == numRows-1 ) :
       object={
			type:"inferior",
			a:inversSuperior(index),
			b:crearDreta(index),
			c:{draw:" l -100,0 "},
			d:inversDreta(index),
		}	
       break;			
      default:
		object={
			type:"central",
			a:inversSuperior(index),
			b:crearDreta(index),
			c:crearInferior(index),
			d:inversDreta(index),
		}	
    }
	object.col=col
	object.row=row
	object.index=index
    object.path=function(){return this.a.draw+this.b.draw+this.c.draw+this.d.draw+"z"}
	return object
	
}


function createSvg(pathPeza,x,y,index){
   xmlns = "http://www.w3.org/2000/svg"
    let svg=document.createElementNS(xmlns,"svg") 
    let idPattern="row"+x+"col"+y
    let pattern='<defs><pattern id="'+ idPattern +'" patternUnits="userSpaceOnUse" width="600" height="400"><image xlink:href="'+host+model.urlImg+'" x="'+(x*-100+40)+'" y="'+(y*-100+40)+'" width="'+(numCols*100)+'" height="'+(numRows*100)+'" /></pattern></defs>'
     svg.innerHTML= pattern
    svg.setAttribute("width",180)
    svg.setAttribute("height",180) 
    let path= document.createElementNS(xmlns,"path")
     path.setAttribute("d","M40,40 "+pathPeza)
    path.setAttribute("fill","url(#"+idPattern+")")
    path.style.fill="url(#"+idPattern+")" 
     svg.appendChild(path)
    let move = document.createElement("DIV")
    move.appendChild(svg)
    move.className="move"
    move.path=path
    move.onmousemove=getPos
    move.onmouseout=stopTracking
    //move.setAttribute("classangle","g0")
    move.angle=0
    move.occupy= false
    move.position=function(){return {left:this.offsetLeft+50,top:this.offsetTop +50}}
    move.onmouseup=dropPiece
    move.index=index    
    let position = document.createElement("DIV")
    position.className="position"
    position.index=index
    position.occupied =false
    document.querySelector("#containerPuzzle").appendChild(position)
    position.appendChild(move)
    move.style.zIndex = zIndex++
    move.zIndexPrevi=move.style.zIndex
    
   
}
let i, element
let models=[
   
    {
    numRows : 4,
    numCols : 6,
    urlImg :"arbol.png"
    },
    {
    numRows : 2,
    numCols : 2,
    urlImg :"barco.jpg",
    named :"BARCO"
    }, 
    {
    numRows : 3,
    numCols : 3,
    urlImg :"horse.jpg"
    }, 
     {
    numRows : 4,
    numCols : 4,
    urlImg :"cine.jpg"
    },  


     {
    numRows : 5,
    numCols : 5,
    urlImg :"cat.jpg"
    },
        {
    numRows : 5,
    numCols : 7,
    urlImg :"perro.jpg"
    },
            {
    numRows : 6,
    numCols : 8,
    urlImg :"cuervo.jpg"
    },
    
]
 function createListModels(){
    let HTMLmodels="<h2>Select model</h2>"
    models.forEach(function(e,i){

        HTMLmodels+="<div onClick='selectModel("+i+")'><b>"+ (i+1) +"</b><br>"+
            e.numCols * e.numRows+" pieces<br>"+    
            '<img height="'+(e.numRows/3*100)+'" src="'+host+e.urlImg+'" width="'+(e.numcols/3*100)+'"><br><small>' + 
            e.numCols*100 +"x" +e.numRows*100 +
            "</small></div>"
    })
    document.getElementById("models").innerHTML=HTMLmodels
  }  
 

function createPuzzle(model){
     pecaAlSeuLloc=0
    document.getElementById("containerPuzzle").innerHTML=""
     director=[]
     index=0
     pezaSeleccionada= false
     numRows=model.numRows
    numCols=model.numCols
    document.getElementById("containerPuzzle").style.width=numCols*100 +"px"
    document.getElementById("containerPuzzle").style.backgroundPositionY=100*model.numRows+"px"
    for (row=0; row<numRows; row++){
        for (col=0; col<numCols; col++){
            let dades=dadesPeza(row,col,index)
            director.push(dades)		
            createSvg(dades.path(),col,row,index)
           index++
        }
    }
}
function selectModel(i){
    document.getElementById("models").style.height=0
    model=models[i]
    createPuzzle(model)
    document.querySelector("#start").style.height=""
    document.querySelector("#modelsButton").style.height=""
    document.querySelector("#tap").style.opacity=0
}
document.addEventListener("DOMContentLoaded", function() { 
     model=models[2]
    createPuzzle(model)
     createListModels()
    document.getElementById("seeModel").onmouseover=function(){
        document.getElementById("containerPuzzle").style.backgroundImage="url("+host+model.urlImg+")"
        document.getElementById("containerPuzzle").style.backgroundPositionY=0;
    } 
    document.getElementById("seeModel").onmouseout=function(){   
            document.getElementById("containerPuzzle").style.backgroundPositionY=100*model.numRows+"px" 
    }
    document.getElementById("start").onclick= start
    document.getElementById("modelsButton").onclick= showModels
 
 })
function scrollBodyTop(){return document.body.scrollTop|| document.documentElement.scrollTop}
function final(){
    document.querySelectorAll(".move").forEach(function(e,i){
        e.path.style.strokeWidth="1px"
        e.path.style.stroke="black"
        
    }) 
    setTimeout(aparece,2000);
    document.querySelector("#modelsButton").style.height=""
    document.querySelector("#tap").style.height=""
    document.querySelector("#tap").style.opacity=0
    document.querySelector("#seeModel").style.top="-35px"
    document.getElementById("models").style.height=0
    document.getElementById("time").innerHTML=timeEnd
    document.getElementById("time").style.opacity=1   
    
            

}
function showModels(){
    document.getElementById("models").style.height="100%"
    document.getElementById("time").innerHTML=""
    document.querySelector("#modelsButton").style.height=0
    document.querySelector("#tap").style.height=""
    document.querySelector("#tap").style.opacity=1
} 
function start(){
    document.querySelector("#start").style.height=0
    document.querySelector("#modelsButton").style.height=0
    document.querySelector("#seeModel").style.top="10px"
     document.querySelector("#tap").style.height=0
    document.querySelector("#tap").style.opacity=0
    document.querySelector("#modelsButton").style.height=0   
    document.querySelectorAll(".move").forEach(function(e,i){ 
       
        e.parentNode.removeChild(e)
        document.body.appendChild(e)
        const pageWidth = document.documentElement.scrollWidth
        console.log("tamañano de pagina :" + pageWidth);
        if(pageWidth >= 1462){
        e.style.top= 2000+ Math.random()*100 +"px"   
        e.style.left=Math.random()*(window.innerWidth -100) +"px" 
    }else if(pageWidth <= 1000){
        e.style.top= 3600+ Math.random()*100 +"px"   
        e.style.left=Math.random()*(window.innerWidth -100) +"px"
    }
        setTimeout(function(){
                var angle=Math.floor(Math.random()*4)
                e.setAttribute("classangle","g"+angle)
                e.style.transform="rotate("+angle*90+"deg)"
                e.angle=angle
        },10)
  
    })
    timeInitial=(new Date).getTime()
    document.getElementById("time").innerHTML=""
}

function girar(){
    
    this.angle++
   
    this.style.transform="rotate("+this.angle*90+"deg)"
    
    this.setAttribute("classangle","g"+this.angle%4)
    if ((this.occupy===this.index) && this.angle%4 ==0)fixPiece(this)

    
}
function takePiece(e){

    pezaSeleccionada=this
    offset = [
        this.offsetLeft - e.clientX,
        this.offsetTop - e.clientY
    ]

    if(typeof this.occupy == "number") {
        document.querySelectorAll(".position")[this.occupy].occupied= false
        this.occupy=false
    }
   
}

function fixPiece(p){
    document.body.removeChild(p)
   document.querySelectorAll(".position")[p.index].appendChild(p)
    p.onmousedown=""
    p.onmouseover=""
    p.onmouseout=""
    p.onmousemove=""
    p.ondblclick=""
    p.onmouseup=""
    p.style.cursor="default"
    p.style.position="static"
   setTimeout(function(){p.removeAttribute("classangle")},300)
   
    
    p.style.transition=".1s"
    p.path.style.strokeWidth=".5px"
    setTimeout(function(){p.style.transform="scale(1.05)"},50)
    setTimeout(function(){p.style.transform="scale(1)"},150)
    setTimeout(function(){p.path.style.strokeWidth="2px"; p.style.zIndex= 0},250)
    pecaAlSeuLloc++
    if (pecaAlSeuLloc == numRows * numCols ){
        timeEnd = Math.floor(((new Date).getTime()-timeInitial)/1000)
        let hores = Math.floor(timeEnd/3600)
        let minuts =  Math.floor((timeEnd - hores * 3600)/60)
        minuts= minuts<10 ? "0"+minuts : minuts
        let segons = timeEnd - hores * 3600 - minuts *60 
        segons= segons<10 ? "0"+segons : segons
        timeEnd ="Time spent: " + 
            +((hores>0) ? hores +"h " :"")+            
            + minuts +"' " + segons +"''"
        document.getElementById("time").style.opacity=0  
        setTimeout(final,1500);
       
        
    }
}
function placePiece(p){
  
    p.style.zIndex = zIndex++
    p.zIndexPrevi=p.style.zIndex
        document.querySelectorAll(".position").forEach (function(e,i){
        if ((p.position().left>e.offsetLeft && p.position().left<e.offsetLeft+100)&&(p.position().top>e.offsetTop && p.position().top<e.offsetTop+100) && !e.occupied ){
            p.style.left=e.offsetLeft+"px"
            p.style.top=e.offsetTop+"px"
            e.occupied= true
            p.occupy = i
            if (e.index == p.index && p.getAttribute("classangle")=="g0")fixPiece(p)
           
        }
    })
    
}
function dropPiece(){
   
    placePiece(pezaSeleccionada)
    
    
    pezaSeleccionada=false
    
}
document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (pezaSeleccionada) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        pezaSeleccionada.style.left = (mousePosition.x + offset[0]) + 'px';
        pezaSeleccionada.style.top  = (mousePosition.y + offset[1]) + 'px';
                

    }
}, true);


function getPos(e){
    
    
    		let x=e.clientX-this.offsetLeft
    		let y=e.clientY- this.offsetTop + scrollBodyTop()

    if ((x>0 && x<100) && (y>0 && y<100)){
        
         this.onmousedown=takePiece
        this.ondblclick=girar
        this.style.cursor="move"
       
            this.style.zIndex=zIndex+1
            
            
     
    }else{
        
        this.onmousedown=""
        this.ondblclick=""
        this.style.cursor="default"
        this.style.zIndex=this.zIndexPrevi
    }
    	
  
}
    
function stopTracking(){
    
}

function aparece(){
    document.getElementById("resPuzzle").style.display= "inline";
    document.getElementById("modelsButton").style.marginLeft="75%";
    document.getElementById("modelsButton").style.marginTop="-150px";
}

    document.getElementById("BtnRespPuzzle").addEventListener("click", function(event){
        event.preventDefault()
        let inputValue = document.getElementById("RespPuzzle").value; 
        let inputValueL = inputValue.toLocaleUpperCase();
        document.getElementById("RespPuzzle").innerHTML ="";
        let named = model.named;  
        if (named === inputValueL){
            let resp= "CORRECTO, Intenta otra vez";

        document.getElementById("Question").innerHTML=resp; 
        document.getElementById("Question").style.color="green"; 

        } else{
            let respNeg= "Incorrecto juega nuevamente";
            
        document.getElementById("Question").innerHTML=respNeg; 
        document.getElementById("Question").style.color="red"; 
        }

         
      });
    
