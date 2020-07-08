function solve(input) {
    let obj={};

    for (let i = 0; i < input.length; i++) {
        const [sys,comp,subcomp] = input[i].split(" | ");
        //console.log(sys ,comp,subcomp);
        let arr=[];
        let x={};
        if(!obj.hasOwnProperty(sys)){
            arr.push(subcomp);
            x[comp]=arr;
            
            obj[sys]=x
        }
        else if(obj.hasOwnProperty(sys)){
           if(obj[sys].hasOwnProperty(comp)){
            obj[sys][comp].push(subcomp) ;
            
           }else if(!obj[sys].hasOwnProperty(comp)){
               arr.push(subcomp)
            obj[sys][comp]=arr
           }
        }
    }
let r=Object.entries(obj);
//console.log(r)
let s=r.sort((a,b)=>{
    //var size = Object.entries(a)[1].length;
    //console.log(Object.keys(a[1]))
   //console.log(Object.keys(a[1]).length) 
    return Object.keys(b[1]).length-Object.keys(a[1]).length||a[0].localeCompare(b[0]);
});
//console.log(s)
for (const key in s) {
    console.log(s[key][0])
    let o=Object.entries(s[key][1]);
    for (let i = 0; i < o.length; i++) {
        const element = o[i];
        console.log("|||"+element[0])
        element[1].forEach(element1 => {
           console.log("||||||"+element1)
        });
    }
    
    
}
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);