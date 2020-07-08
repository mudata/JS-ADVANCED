function solve() {

    let value=document.getElementById("textBox").value;
    //console.log(value)
    if(value!==""){
        let a=value.split("");
        let firstLetter=a[0].toUpperCase();
        let asc=Number(firstLetter.charCodeAt(0));
        asc-=65;
        //console.log(asc)
        let y=document.querySelectorAll("ol > li");
        //console.log(y[asc]);
        if(y[asc].textContent!==""){
            y[asc].append(", ");
            y[asc].append(value);
        }else{
            y[asc].append(value);
        }
        
        document.getElementById("textBox").value="";
    }
    
}