function solve(arr) {
    let obj={};
    let newarr=[]
    for (let i = 0; i < arr.length; i+=2) {
        
        
        obj[arr[i]]=Number(arr[i+1]);
        newarr.push(obj)
    }
    console.log(obj)
    //console.log(newarr)
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);