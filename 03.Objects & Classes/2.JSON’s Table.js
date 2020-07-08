function solve(input) {
    console.log("<table>")
    for (let i = 0; i < input.length; i++) {
        console.log("	<tr>")
        let element = input[i];
        element=JSON.parse(element)
        let [n,p,s]=[element.name,element.position,element.salary];
        //console.log(n,p,s)
        console.log(`		<td>${n}</td>`)
        console.log(`		<td>${p}</td>`)
        console.log(`		<td>${s}</td>`)
        console.log("	</tr>")
    }
    console.log("</table>")
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);