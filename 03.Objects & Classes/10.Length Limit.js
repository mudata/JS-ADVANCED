
class Stringer {
    constructor(string1, length1) {
        this.string1 = string1;
        this.length1 = length1;
        this.x=this.string1;
    }
    
    increase(number){
    //"    "
    
    //icrease 3
    //"tes.."
    this.string1=this.x;
    if(number===this.x.length){
        return this.string1;}
        else if(number<this.x.length){
            this.string1=this.string1.substr(0,this.length1-number)
            console.log(this.string1)
            return this.string1;
        }
    }
    decrease(number){
        //console.log(this.string1.length)
        if(this.string1.length-number<=0){
            //console.log("+++")
            
            this.string1="";
            return this.string1.length;
        }
        else if(this.string1.length-number>0){
           this.string1= this.string1.substr(0,this.length1-number);
           //console.log("---") 
           return this.string1;
        }
    }
    toString(){
        let dot=".";
        if(this.string1.length===this.x.length){
            return this.string1
        }else if(this.string1.length>0){
            return this.string1+dot.repeat(this.length1-this.string1.length);
        }else if(this.string1.length===0){return "..."}
        
        
    }

}
let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(3); 
console.log(test.toString());