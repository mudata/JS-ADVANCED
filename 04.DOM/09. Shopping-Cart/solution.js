function solve() {
   let totalmoney=0;
   let arr=[];
   let money,name,y,x;
   let button1=document.getElementsByClassName("add-product")[0].addEventListener("click",function(){
   money=0.80;
   name="Bread";
   x=document.createTextNode(`Added ${name} for ${money.toFixed(2)} to the cart.\n`);
   y=document.getElementsByTagName("textarea")[0]
   y.appendChild(x);
   arr.push(name);
   [...new Set(arr)];
   totalmoney+=money;
   });
   let button2=document.getElementsByClassName("add-product")[1].addEventListener("click",function(){
      money=1.09;
      name="Milk";
      x=document.createTextNode(`Added ${name} for ${money.toFixed(2)} to the cart.\n`);
      y=document.getElementsByTagName("textarea")[0]
      y.appendChild(x);
      arr.push(name);
      [...new Set(arr)];
      totalmoney+=money;
   });
   let button3=document.getElementsByClassName("add-product")[2].addEventListener("click",function(){
      money=0.99;
      name="Tomatoes";
      x=document.createTextNode(`Added ${name} for ${money.toFixed(2)} to the cart.\n`);
      y=document.getElementsByTagName("textarea")[0];
      y.appendChild(x);

      arr.push(name);
      

      totalmoney+=money;
   });
   let button4=document.getElementsByClassName("checkout")[0].addEventListener("click",function(){
      arr=[...new Set(arr)];
      x=document.createTextNode(`You bought ${arr.join(", ")} for ${totalmoney.toFixed(2)}.`);
      y=document.getElementsByTagName("textarea")[0];
      y.appendChild(x);
      document.getElementsByClassName("add-product")[0].disabled = true;
      document.getElementsByClassName("add-product")[1].disabled = true;
      document.getElementsByClassName("add-product")[2].disabled = true;
   });


   //TODO...
}