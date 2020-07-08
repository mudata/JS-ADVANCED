function create(words) {
   let el1,a;
   let i=0;

for (let i = 0; i < words.length; i++) {
   const element = words[i];
   el1=document.createElement("div");
   a=document.createElement("p");
   a.textContent=element
   el1.appendChild(a);
   document.getElementById("content").appendChild(el1);
   
}
   // let el1=document.createElement("div");
   // let el2=document.createElement("div");
   // let el3=document.createElement("div");
   // let el4=document.createElement("div");
   // let a=document.createElement("p");
   // let b=document.createElement("p");
   // let c=document.createElement("p");
   // let d=document.createElement("p");
   // a.textContent=words[0];
   // b.textContent=words[1];
   // c.textContent=words[2];
   // d.textContent=words[3];
   // el1.appendChild(a);
   // el2.appendChild(b);
   // el3.appendChild(c);
   // el4.appendChild(d);
   // document.getElementById("content").appendChild(el1);
   // document.getElementById("content").appendChild(el2);
   // document.getElementById("content").appendChild(el3);
   // document.getElementById("content").appendChild(el4);
   let divs=document.getElementsByTagName("div");
   //console.log(divs)
   let ps=document.getElementsByTagName("p");
   //console.log(ps)
   divs[1].addEventListener("click",function(){
      ps[0].style.display="block";
   });
   divs[2].addEventListener("click",function(){
      ps[1].style.display="block";
   });
   divs[3].addEventListener("click",function(){
      ps[2].style.display="block";
   });
   divs[4].addEventListener("click",function(){
      ps[3].style.display="block";
   });
   


}