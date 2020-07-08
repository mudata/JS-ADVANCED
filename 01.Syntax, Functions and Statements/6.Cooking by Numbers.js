function solve(arr) {
    let num=arr.shift();
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        switch (element) {
            case "chop":
                num=num/2;
                console.log(num)
                break;
                case "dice":
                num=Math.sqrt(num)
                console.log(num)
                    break;
                    case "spice":
                num++;
                console.log(num)
                break;
                case "bake":
                num*=3;
                console.log(num)
                break;
                case "fillet":
                num=num-0.2*num;
                console.log(num)
                break;
            default:
                break;
        }
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);