//let a=true;
function toggle() {
    //let e=document.getElementsById("extra");
    //e.
    if(document.getElementsByClassName("button")[0].innerHTML==="Less"){
        document.getElementById("extra").style.display="none";
        document.getElementsByClassName("button")[0].innerHTML="More";
    //a=false;
    }
    else if(document.getElementsByClassName("button")[0].innerHTML==="More"){
        document.getElementById("extra").style.display="block";
        document.getElementsByClassName("button")[0].innerHTML="Less";
    //a=true
    }
   //document.getElementById().innerHTML
}