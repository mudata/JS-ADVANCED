function walk(steps,steplength,speed){
    let hours,mins,seconds;
let rests=Math.floor(steps/500);
//console.log(rests);
mins+=rests;
let distance=steps*steplength;
let x=speed/3.6;
let time=distance/x;
mins=Math.floor(time/60);
seconds=Math.round(time-(mins*60))
hours=Math.floor(time/3600);
if(hours<10){
    console.log(hours + "0:" + (mins + rests) + ":" + seconds);
}else{
    console.log(hours + ":" + (mins + rests) + ":" + seconds);
}
}console.log(walk(4000, 0.60, 5))