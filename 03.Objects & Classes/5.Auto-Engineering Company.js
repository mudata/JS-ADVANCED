function solve(input) {
    let obj={};
    for (let i = 0; i < input.length; i++) {
        let arr=[];
        let [marka,model,kolichestvo] = input[i].split(" | ");
        if(!obj.hasOwnProperty(marka)){
            arr.push(model,kolichestvo);
            obj[marka]=arr;
        }
        else if(obj.hasOwnProperty(marka)){
            obj[marka].push(model,kolichestvo)
        }
    }
    for (const key in obj) {
        console.log(key)
        for (let i = 0; i < obj[key].length; i+=2) {
            const element = obj[key][i];
            const element1=obj[key][i+1];
            console.log(`###${element} -> ${element1}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);