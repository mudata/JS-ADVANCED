function solve(input) {
    let obj={};
    for (let i = 0; i < input.length; i++) {
        let [name,quality]=input[i].split(" => ");
        quality=Number(quality);
        if(!obj.hasOwnProperty(name)&&quality>=1000){
            obj[name]=quality;
        }
        else if(obj.hasOwnProperty(name)){
            obj[name]+=quality;
        }
//console.log(obj)
    }
    for (const key in obj) {
        if(obj[key]>=1000){
            console.log(`${key} => ${Math.floor(obj[key]/1000)}`)
        }
    }
}


solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);