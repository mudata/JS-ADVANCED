function solve(arr) {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        const element1 = arr[i];
        //newarr.push(element1)
        let b=true;
        for (let j = 0; j < newarr.length; j++) {
            let bigestnum=newarr[newarr.length-1]
            const element2 = newarr[j];
            if(bigestnum>element1){
                b=false;
            
            }
            
        }
        if(b){
            newarr.push(element1);
        }
    }
    newarr.forEach(element => {
        console.log(element)
    });
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]);