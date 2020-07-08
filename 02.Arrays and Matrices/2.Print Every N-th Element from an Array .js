function solve(arr) {
    let last=Number(arr.pop());
    //console.log(last)
    for (let i = 0; i < arr.length; i+=last) {
        const element = arr[i];
        console.log(element)
        
    }
}

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']);