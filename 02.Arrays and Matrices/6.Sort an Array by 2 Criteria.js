function solve(arr) {
    let news=arr.sort((a,b)=>{
return a.length-b.length||a.localeCompare(b)
    });
    news.forEach(element => {
        console.log(element)
    });
}

solve(['alpha', 
'beta', 
'gamma']);