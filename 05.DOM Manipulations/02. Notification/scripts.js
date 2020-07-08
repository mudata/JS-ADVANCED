function notify(message) {
    let a=document.createElement("p");
    a.textContent=message;
    document.getElementById("notification").appendChild(a);
    document.getElementById("notification").style.display="block";
    setTimeout(function(){
        document.getElementById("notification").style.display = "none"; 
       }, 2000);
}