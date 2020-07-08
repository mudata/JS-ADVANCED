function solve(arr) {
    let one=arr[0][0]+arr[0][1]+arr[0][2];
    let second=arr[1][0]+arr[1][1]+arr[1][2];
    let third=arr[2][0]+arr[2][1]+arr[2][2];
    let one1=arr[0][0]+arr[1][0]+arr[2][0];
    let second2=arr[0][1]+arr[1][1]+arr[2][1];
    let third3=arr[0][2]+arr[1][2]+arr[2][2];

    if(one===second&&one===third&&one1===second2&&one1===third3&&one===one1&&second===second2){
        console.log("true")
    }else{
        console.log("false")
    }
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);