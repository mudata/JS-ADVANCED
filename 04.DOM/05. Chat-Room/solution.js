function solve() {
   
   let currentdiv = document.createElement("div");
   let notes = document.getElementById("chat_input").value;
   currentdiv.textContent=notes;
   currentdiv.className = "message my-message";
   
   document.getElementById("chat_messages").appendChild(currentdiv);
   document.getElementById("chat_input").value = "";
   //console.log(document.getElementById('chat_messages').children)
   let x=document.querySelector("div.flexbox");
   //console.log(x)
   let y=x.querySelector("div");
   //console.log(y)
}


