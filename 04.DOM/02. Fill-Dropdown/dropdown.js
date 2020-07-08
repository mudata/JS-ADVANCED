function addItem() {
    let y=document.getElementById("newItemText").value;
    let a=document.getElementById("newItemValue").value;
    let x=document.getElementById("menu");
    var option=document.createElement("option");
    option.text=y;
    option.value=a;
    x.add(option);
    document.getElementById("newItemText").value=" ";
    document.getElementById("newItemValue").value=" ";
}