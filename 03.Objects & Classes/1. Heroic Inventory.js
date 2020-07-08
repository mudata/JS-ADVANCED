function solve(arr) {
    let all=[];
    arr.forEach(element => {
        let obj={};
        let splited=element.split(" / ");
        let items=[];
        let name=splited[0];
        let level=Number(splited[1]);
        let x=splited[2].split(", ")
        x.forEach(item => {
            items.push(item);
        });
obj.name=name;
obj.level=level;
obj.items=items;
all.push(obj)
    });
    console.log(JSON.stringify(all))
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);