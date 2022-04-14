// para juego de prepositions
let questionPM001 = ["<img src=images/behind.jpg height=40 /><br /><br />The boy is?",
"<img src=images/on.jpg height=40 /><br /><br />The cat is? ...",
"<img src=images/under.jpg height=40 /><br /><br />The apple is? ...",
"<img src=images/netxto.jpg height=40 /><br /><br />The raccoon is? ...",

];

let optionsPM001 = ["<button class=buttons001 onclick=qPM1i()>The boy is on the box</button><br /><br /><button class=buttons001 onclick=qPM1c()>The boy is behind the box</button>"];
let optionsPM002 = ["<button class=buttons001 onclick=qPM1c()>The Cat is on the chair</button><br /><br /><button class=buttons001 onclick=qPM1i()>The cat is netx to the chair</button>"];
let optionsPM003 = ["<button class=buttons001 onclick=qPM1c()>The apple is on the roof</button><br /><br /><button class=buttons001 onclick=qPM1i()>The boy is between the roof</button>"];
let optionsPM004 = ["<button class=buttons001 onclick=qPM1i()>The raccoon is in the tree</button><br /><br /><button class=buttons001 onclick=qPM1c()>The raccoon is next to the tree</button>"];

let c = 0;
c++;
let d = 0;
d++;

function beginPM001() {
disappearPM001.innerHTML = "";
messagePM001.innerHTML = questionPM001[0];
messagePM002.innerHTML = optionsPM001;
numberPM001.innerHTML = c++;
move();
}

function qPM1c() {
messagePM003.innerHTML = "Correct";
messagePM002.innerHTML = "";
scorePM001.innerHTML = d++;
messagePM004.innerHTML = "<button class=buttons002 onclick=nextPM001()>Next</button>";
}

function qPM1i() {
messagePM003.innerHTML = "Incorrect";
messagePM002.innerHTML = "";
messagePM004.innerHTML = "<button class=buttons002 onclick=nextPM001()>Next</button>";
}

function nextPM001() {
if (c == "2") {
    messagePM001.innerHTML = questionPM001[1];
    messagePM002.innerHTML = optionsPM002;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}

else if (c == "3") {
    messagePM001.innerHTML = questionPM001[2];
    messagePM002.innerHTML = optionsPM003;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}


else if (c == "4") {
    messagePM001.innerHTML = questionPM001[3];
    messagePM002.innerHTML = optionsPM004;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = c++;
    messagePM004.innerHTML = "";
}




 else {
    messagePM001.innerHTML = "Fin del  Quiz";
    messagePM002.innerHTML = "";
    messagePM003.innerHTML = "";
    messagePM004.innerHTML = "<button class=buttons002 onclick=repeat001()>Exit</button>";
}
}

function repeat001() {
location.reload();
}


function move(){
    const pageWidth = document.documentElement.scrollWidth
    if(pageWidth > 768){  
    window.scrollTo(0, 1450);
} else{
    window.scrollTo(0, 1700);
}
}

