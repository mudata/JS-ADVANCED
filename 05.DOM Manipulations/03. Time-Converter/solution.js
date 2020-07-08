function attachEventsListeners() {
    
    let but1=document.getElementById("daysBtn");
    let but2=document.getElementById("hoursBtn");
    let but3=document.getElementById("minutesBtn");
    let but4=document.getElementById("secondsBtn");
    but1.addEventListener("click",function(){
        let value1=Number(document.getElementById("days").value)
        document.getElementById("days").value=value1;
        document.getElementById("hours").value=value1*24;
        document.getElementById("minutes").value=value1*24*60;
        document.getElementById("seconds").value=value1*24*60*60;
    });
    but2.addEventListener("click",function(){
        let value2=Number(document.getElementById("hours").value)
        document.getElementById("days").value=value2/24;
        document.getElementById("hours").value=value2
        document.getElementById("minutes").value=value2*60;
        document.getElementById("seconds").value=value2*60*60;
    });
    but3.addEventListener("click",function(){
        let value3=Number(document.getElementById("minutes").value)
        document.getElementById("days").value=value3/(24*60);
        document.getElementById("hours").value=value3/60
        document.getElementById("minutes").value=value3;
        document.getElementById("seconds").value=value3*60;
    });
    but4.addEventListener("click",function(){
        let value4=Number(document.getElementById("seconds").value)
        document.getElementById("days").value=value4/(24*60*60);
        document.getElementById("hours").value=value4/(60*60)
        document.getElementById("minutes").value=value4/(60);
        document.getElementById("seconds").value=value4;
    });
}