function solve() {
   let curent1,curent2;
   let imgs=document.getElementsByTagName("img");
   let spans=document.getElementsByTagName("span");
   imgs[0].addEventListener("click",function(){
      imgs[0].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[0].name;
      curent1=imgs[0];
      proverka(spans[0],spans[2],curent1,curent2)
      
   });
   imgs[1].addEventListener("click",function(){
      imgs[1].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[1].name;
      curent1=imgs[1];
      proverka(spans[0],spans[2],curent1,curent2)
      
   });
   imgs[2].addEventListener("click",function(){
      imgs[2].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[2].name;
      curent1=imgs[2];
      proverka(spans[0],spans[2],curent1,curent2)
      
   });
   imgs[3].addEventListener("click",function(){
      imgs[3].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[3].name;
      curent1=imgs[3];
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[4].addEventListener("click",function(){
      imgs[4].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[4].name;
      curent1=imgs[4];
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[5].addEventListener("click",function(){
      imgs[5].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[5].name;
      curent1=imgs[5]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[6].addEventListener("click",function(){
      imgs[6].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[6].name;
      curent1=imgs[6]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[7].addEventListener("click",function(){
      imgs[7].src="images/whiteCard.jpg";
      spans[0].textContent=imgs[7].name;
      curent1=imgs[7]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[8].addEventListener("click",function(){
      imgs[8].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[8].name;
      curent2=imgs[8]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[9].addEventListener("click",function(){
      imgs[9].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[9].name;
      curent2=imgs[9]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[10].addEventListener("click",function(){
      imgs[10].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[10].name;
      curent2=imgs[10]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[11].addEventListener("click",function(){
      imgs[11].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[11].name;
      curent2=imgs[11]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[12].addEventListener("click",function(){
      imgs[12].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[12].name;
      curent2=imgs[12]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[13].addEventListener("click",function(){
      imgs[13].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[13].name;
      curent2=imgs[13]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[14].addEventListener("click",function(){
      imgs[14].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[14].name;
      curent2=imgs[14]
      proverka(spans[0],spans[2],curent1,curent2)
   });
   imgs[15].addEventListener("click",function(){
      imgs[15].src="images/whiteCard.jpg";
      spans[2].textContent=imgs[15].name;
      curent2=imgs[15];
      proverka(spans[0],spans[2],curent1,curent2)
   });
   function proverka(a,b,c,d) {
      if(a.textContent!==""&&b.textContent!==""){
         if(curent1.name>curent2.name){
            curent1.style.border="2px solid green";
            curent2.style.border="2px solid red";
            document.getElementById("history").append(`[${c.name} vs ${d.name} ]`)
            spans[0].textContent="";
            spans[2].textContent="";
         }else if(curent1.name<curent2.name){
            curent1.style.border="2px solid red";
            curent2.style.border="2px solid green";
            document.getElementById("history").append(`[${c.name} vs ${d.name} ]`)
            spans[0].textContent="";
            spans[2].textContent="";
         }
      }
   }
   
}