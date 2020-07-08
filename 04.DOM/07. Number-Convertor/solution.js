function solve() {
    let num=Number(document.getElementById("input").value);
    //console.log(num)
    
    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');

    binaryOption.textContent = "Binary";
    binaryOption.value = "binary";
    let hexadeicmalOption = document.createElement('option');
    hexadeicmalOption.textContent = 'Hexadecimal';
    hexadeicmalOption.value = 'hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadeicmalOption);
    

    const selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    const convertBtn = document.querySelector('#container > button');

    convertBtn.addEventListener('click', (evt) => {
        const inputData = document.getElementById('input');
        const outputData = document.getElementById('result');

        outputData.value = selectMap[selectMenu.value](+inputData.value);
    })
}