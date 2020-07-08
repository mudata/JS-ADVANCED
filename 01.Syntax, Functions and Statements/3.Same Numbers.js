function same(x){
    let sum=0;
    let y=true;
    let t=x.toString()
    //console.log(t)
    for (let i = 0; i < t.length; i++) {
        //console.log(t[i])
        sum+=Number(t[i]);
        if(i+1===t.length){break}
        if(Number(t[i])!==Number(t[i+1])){
            y=false;
            }
        
    }
    if(y===true){
        console.log("true");
        console.log(sum) 
    }
    else{
        console.log("false")
        console.log(sum)}

}console.log(same(1234))