function solve(input) {
    input.sort(function(a, b) {
        return a.localeCompare(b);
      });
      let obj={};
      for (let i = 0; i < input.length; i++) {
          let arr=[];
            const element = input[i];
          //console.log(element[0])
          if(!obj.hasOwnProperty(element[0])){
            arr.push(element);  
            obj[element[0]]=arr;
          }
          else if(obj.hasOwnProperty(element[0])){
            obj[element[0]].push(element)
          }
          
      }
      for (const key in obj) {
          console.log(key)
          obj[key].forEach(element => {
              let x=element.split(" : ");
              console.log(`  ${x[0]}: ${x[1]}`)
          });
      }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);