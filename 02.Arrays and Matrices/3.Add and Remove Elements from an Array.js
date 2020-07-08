function solve(arr) {
    let newarr=[];
    for (let i = 1; i <= arr.length; i++) {
        const element = arr[i-1];
        if(element==="add"){
            newarr.push(i);
            //console.log(i)
        }
        else if(element==="remove"){
            newarr.pop();
            //console.log(newarr)
        }
        //console.log(i)
        
    }
    newarr.forEach(element => {
        console.log(element)
    });
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']);