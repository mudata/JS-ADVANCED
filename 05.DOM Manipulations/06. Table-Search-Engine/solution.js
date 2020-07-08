function solve(){
   let elements=document.getElementsByTagName("td");
   let y=document.getElementsByTagName("tr");
   //console.log(y)2-6
   document.getElementById("searchBtn").addEventListener("click",function(){
      let x=document.getElementById("searchField").value;
      console.log(x)
      for (let i = 1; i < elements.length-1; i++) {
         const element = elements[i].textContent;

         if(element.match(x)){
            if(i>=13&&i<=14){
               y[6].classList.add("select");
            }else if(i>=1&&i<=3){
               y[2].classList.add("select");
            }else if(i>=4&&i<=6){
               y[3].classList.add("select");
            }else if(i>=7&&i<=9){
               y[4].classList.add("select");
            }else if(i>=10&&i<=12){
               y[5].classList.add("select");
            }
            
         }
      }document.getElementById("searchField").value=""
   });
   
}