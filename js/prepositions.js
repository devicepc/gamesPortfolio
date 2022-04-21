pregOK=0;

const corr ="Great"
const incorr =" Repeat again"


    function resPrep() {
    const valueq1 = document.getElementById("ejPrepo").selectedIndex;
    
    if (valueq1 == "2"){
        console.log(document.getElementsByTagName("option")[valueq1].value);
        document.getElementById("ejPrepo").innerHTML="";
        document.getElementById("GapSpan").innerHTML= "ON";
        document.getElementById("resp1").innerHTML = "";
        document.getElementById("resp1").innerHTML = corr;
        document.getElementById("resp1").style.color="green";
        document.getElementById("btnres1").style.display="none";

        pregOK++;
    }else{
        document.getElementById("resp1").innerHTML = incorr;
        document.getElementById("resp1").style.color="red";

    }
  }

  function resPrep2() {
    const valueq2 = document.getElementById("ejPrepo2").selectedIndex;
    
    if (valueq2 == "1"){
        console.log(document.getElementsByTagName("option")[valueq2].value);
        document.getElementById("ejPrepo2").innerHTML="";
        document.getElementById("GapSpan2").innerHTML= "IN";
        document.getElementById("resp2").innerHTML = corr;
        document.getElementById("resp2").style.color="green";
        document.getElementById("btnres2").style.display="none";
        pregOK++;
        
    }else{
        
        document.getElementById("resp2").innerHTML = incorr;
        document.getElementById("resp2").style.color="red";
    }
  }

  function resPrep3() {
    const valueq3 = document.getElementById("ejPrepo3").selectedIndex;
    
    if (valueq3 == "2"){
        console.log(document.getElementsByTagName("option")[valueq3].value);
        document.getElementById("ejPrepo3").innerHTML="";
        document.getElementById("GapSpan3").innerHTML= "ON";
        document.getElementById("resp3").innerHTML = "";
        document.getElementById("resp3").innerHTML = corr;
        document.getElementById("resp3").style.color="green";
        document.getElementById("btnres3").style.display="none";

        pregOK++;
    }else{
        document.getElementById("resp3").innerHTML = incorr;
        document.getElementById("resp3").style.color="red";

    }
  }

  function resPrep4() {
    const valueq23 = document.getElementById("ejPrepo4").selectedIndex;
   
    
    if (valueq23 == "1"){
        console.log(document.getElementsByTagName("option")[valueq23].value);
        document.getElementById("ejPrepo4").innerHTML="";
        document.getElementById("GapSpan4").innerHTML= "AT";
        document.getElementById("resp4").innerHTML = corr;
        document.getElementById("resp4").style.color="green";
        document.getElementById("btnres4").style.display="none";
        pregOK++;
        
    }else{
        
        document.getElementById("resp4").innerHTML = incorr;
        document.getElementById("resp4").style.color="red";
    }
  }

   function resPrep5() {
    const valueq5 = document.getElementById("ejPrepo5").selectedIndex;
    console.log(valueq5);
    if (valueq5 == "2"){
        console.log(document.getElementsByTagName("option")[valueq5].value);
        document.getElementById("ejPrepo5").innerHTML="";
        document.getElementById("GapSpan5").innerHTML= "IN ";
        document.getElementById("resp5").innerHTML = "";
        document.getElementById("resp5").innerHTML = corr;
        document.getElementById("resp5").style.color="green";
        document.getElementById("btnres5").style.display="none";

        pregOK++;
    }else{
        document.getElementById("resp5").innerHTML = incorr;
        document.getElementById("resp5").style.color="red";

    }
  }

  function resPrep6() {
    const valueq6 = document.getElementById("ejPrepo6").selectedIndex;
    
    if (valueq6 == "1"){
        console.log(document.getElementsByTagName("option")[valueq6].value);
        document.getElementById("ejPrepo6").innerHTML="";
        document.getElementById("GapSpan6").innerHTML= "AT ";
        document.getElementById("resp6").innerHTML = corr;
        document.getElementById("resp6").style.color="green";
        document.getElementById("btnres6").style.display="none";
        pregOK++;
        
    }else{
        
        document.getElementById("resp6").innerHTML = incorr;
        document.getElementById("resp6").style.color="red";
    }
  }

/*
  function resPrep() {
    const valueq1 = document.getElementById("ejPrepo").selectedIndex;
    
    if (valueq1 == "2"){
        console.log(document.getElementsByTagName("option")[valueq1].value);
        document.getElementById("ejPrepo").innerHTML="";
        document.getElementById("GapSpan").innerHTML= "ON";
        document.getElementById("resp1").innerHTML = "";
        document.getElementById("resp1").innerHTML = corr;
        document.getElementById("resp1").style.color="green";
        document.getElementById("btnres1").style.display="none";

        pregOK++;
    }else{
        document.getElementById("resp1").innerHTML = incorr;
        document.getElementById("resp1").style.color="red";

    }
  }

  function resPrep2() {
    const valueq2 = document.getElementById("ejPrepo2").selectedIndex;
    
    if (valueq2 == "1"){
        console.log(document.getElementsByTagName("option")[valueq2].value);
        document.getElementById("ejPrepo2").innerHTML="";
        document.getElementById("GapSpan2").innerHTML= "IN";
        document.getElementById("resp2").innerHTML = corr;
        document.getElementById("resp2").style.color="green";
        document.getElementById("btnres2").style.display="none";
        pregOK++;
        
    }else{
        
        document.getElementById("resp2").innerHTML = incorr;
        document.getElementById("resp2").style.color="red";
    }
  } */

  function dataprept(){
    document.getElementById("Points").style.display="none";

      document.getElementById("respTotales").innerHTML="Total points: "+ pregOK;
  }
