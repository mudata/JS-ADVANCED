function solve(arr) {
    let last=Number(arr.pop());
    for (let i = 0; i < last; i++) {
        let last1=arr.pop();
        arr.unshift(last1);
        
    }
console.log(arr.join(" "))
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']);