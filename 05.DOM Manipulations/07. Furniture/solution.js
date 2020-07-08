function solve() {
let butons=document.getElementsByTagName("button");
butons[0].addEventListener("click",function(){
  let objects=JSON.parse(document.getElementsByTagName("textarea")[0].value);
  objects.forEach(ob => {
    let tr=document.createElement("tr");
let td01=document.createElement("td");
let q=document.createElement("img");
q.src=ob.img;
td01.appendChild(q);
tr.appendChild(td01);
let td02=document.createElement("td");
let a=document.createElement("p");
a.textContent=ob.name;
td02.appendChild(a);
tr.appendChild(td02);
let td03=document.createElement("td");
let b=document.createElement("p");
b.textContent=ob.price;
td03.appendChild(b);
tr.appendChild(td03);
let td04=document.createElement("td");
let c=document.createElement("p");
c.textContent=ob.decFactor;
td04.appendChild(c);
tr.appendChild(td04);
let td06=document.createElement("td");
let d=document.createElement("input");
d.type="checkbox";
td06.appendChild(d);
tr.appendChild(td06);
document.getElementsByTagName("tbody")[0].appendChild(tr)
  });

});
butons[1].addEventListener("click",function(){
  let boughtFurniture = [];
  let totalPrice = 0;
  let avgDecFactor = 0;
  let count = 0;
  let alltr=document.getElementsByTagName("tr");
for (let i = 1; i < alltr.length; i++) {
  //console.log(alltr[i])
  if(alltr[i].children[4].children[0].checked){
    count += 1;
        boughtFurniture.push(alltr[i].children[1].textContent);
        totalPrice += +alltr[i].children[2].textContent;
        avgDecFactor += +alltr[i].children[3].textContent;
  }
}
avgDecFactor = avgDecFactor / (count);

document
      .getElementsByTagName('textarea')[1]
      .value =
      "Bought furniture: " +
      boughtFurniture.join(', ') +
      "\nTotal price: " +
      totalPrice.toFixed(2) +
      "\nAverage decoration factor: " +
      avgDecFactor;
});

}