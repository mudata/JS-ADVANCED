    class List{
    
        constructor(){
            this.list = [];
            this.size=0;
        }

        add(number) {
           this.list.push(number);
           this.size++;
           return this;
        }
        remove(index){
            if(index>=0&&index<this.list.length){
               this.list.splice(index,1);
               this.size--;
               return this;
            }
            
            
            
        }
        get(index){
            if(index>=0&&index<this.list.length){
                this.list.sort((a,b)=>{return a-b;})
            return this.list[index];
            }
        }
        
        get listSize() {
            return this.list.length;
        }

    }


    
let list =new List();
list.add(5);
// list.add(6);
list.add(7);
// console.log(list.get(1));
list.remove(-1);
// console.log(list.get(1));
// list.add(7);
console.log(list)