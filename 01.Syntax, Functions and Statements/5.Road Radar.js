function solve(y) {
    let speed=Number(y[0]);
    let area=y[1];
    let x=0;
    if(area==="motorway"){
        x=speed-130;
        if(x<20&&x>0){return"speeding"};
        if(x<40&&x>20){return"excessive speeding"}
        if(x>40){return"reckless driving"}
        else{console.log()}
    }if(area==="interstate"){
        x=speed-90;
        if(x<20&&x>0){return"speeding"};
        if(x<40&&x>20){return"excessive speeding"}
        if(x>40){return"reckless driving"}
        else{console.log()}
    }if(area==="city"){
        x=speed-50;
        if(x<20&&x>0){return"speeding"};
        if(x<40&&x>20){return"excessive speeding"}
        if(x>40){return"reckless driving"}
        else{console.log()}
    }if(area==="residential"){
        x=speed-20;
        if(x<20&&x>0){return"speeding"};
        if(x<40&&x>20){return"excessive speeding"}
        if(x>40){return"reckless driving"}
        else{console.log()}
    }
}

console.log(solve([100, 'motorway']))