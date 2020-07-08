function solve(arr,criteria) {
    let newarr=[];
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        [destination,price,status] = arr[i].split("|");
        price=Number(price);
        let p=new Ticket(destination,price,status);
        //let a=p.split("Ticket");
        //console.log(a[0])
        newarr.push(p);
        
    }
    if(criteria==="destination"){
        newarr.sort((a,b)=>{
         return   (a.destination).localeCompare(b.destination)||(a.status).localeCompare(b.status);
        });
    }else if(criteria==="price"){
        return a.price-b.price;
    }else if(criteria==="status"){
       return (a.status).localeCompare(b.status)
    }
    //console.log(newarr)
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');