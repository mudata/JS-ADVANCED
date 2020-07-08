function encodeAndDecodeMessages() {
    let butons=document.getElementsByTagName("button");
    let textarea=document.getElementsByTagName("textarea")
    //[Encode and send it]
    butons[0].addEventListener("click",function(){
       let value1= textarea[0].value;
        console.log(value1)
        let arr=[];
        for (let i = 0; i < value1.length; i++) {
            const element = value1[i];
            let asciicode=element.charCodeAt()+1;
            let newascii=String.fromCharCode(asciicode);
            arr.push(newascii)
            console.log(arr)
            
        }
        arr=arr.join("")
        textarea[1].value=arr;
        textarea[0].value=""
    });
    //[Decode and read it]
    butons[1].addEventListener("click",function(){
        let value2= textarea[1].value;
        let newarr=[];
        console.log(value2)
        for (let i = 0; i < value2.length; i++) {
            const element = value2[i];
            let asciicode=element.charCodeAt()-1;
            let newascii=String.fromCharCode(asciicode);
            newarr.push(newascii)
            console.log(newarr)
            
        }
        textarea[1].value=newarr.join("")
    });
}