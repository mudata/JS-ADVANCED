function solve() {
  let verni=0;
  let greshni=0;
  let right1=document.getElementsByClassName("answer-text")[0].addEventListener("click",function(){
  verni++;
  
  document.getElementsByTagName("section")[0].style.display="none";
  document.getElementsByTagName("section")[1].style.display="block";
  //console.log("vqrno");
  //console.log(verni)
  });
  let greshno1=document.getElementsByClassName("answer-text")[1].addEventListener("click",function(){
    greshni++;
    document.getElementsByTagName("section")[0].style.display="none";
    document.getElementsByTagName("section")[1].style.display="block";
    //console.log("greshno")
    //console.log(greshni)
    });
    let right2=document.getElementsByClassName("answer-text")[2].addEventListener("click",function(){
      verni++;
      document.getElementsByTagName("section")[1].style.display="none";
      document.getElementsByTagName("section")[2].style.display="block";
      //console.log("vqrno");
      //console.log(verni)
      });
      let greshno2=document.getElementsByClassName("answer-text")[3].addEventListener("click",function(){
        greshni++;
        document.getElementsByTagName("section")[1].style.display="none";
        document.getElementsByTagName("section")[2].style.display="block";
        //console.log("greshno")
        //console.log(greshni)
        });
        let right3=document.getElementsByClassName("answer-text")[4].addEventListener("click",function(){
          verni++;
          document.getElementsByTagName("section")[1].style.display="none";
          document.getElementsByTagName("section")[2].style.display="none";
          //console.log("vqrno");
          //console.log(verni)
          document.getElementById("results").style.display="block";
          if(verni===3){
            document.getElementsByTagName("h1")[1].textContent="You are recognized as top JavaScript fan!";
          }else{
            document.getElementsByTagName("h1")[1].textContent=`You have ${verni} right answers`;
          }
         
          
          
          });
          let greshno3=document.getElementsByClassName("answer-text")[5].addEventListener("click",function(){
            greshni++;
            document.getElementsByTagName("section")[1].style.display="none";
            document.getElementsByTagName("section")[2].style.display="none";
            //console.log("greshno")
            //console.log(greshni)
            //console.log(`You have ${verni} right answers`)
            document.getElementById("results").style.display="block"
            document.getElementsByTagName("h1")[1].textContent=`You have ${verni} right answers`;  
          });
            
  
}
