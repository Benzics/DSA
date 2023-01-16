function longestCon(arr){
    arr.sort((a, b) => a - b)

    if(arr.length < 2) return arr.length

    for(let i = 0; i < arr.length - 1; i++){
        while(arr[i] === arr[i+1]) arr.splice(i + 1, 1);

        if(arr[i] + 1 !== arr[i+1]) {
            arr.splice(i + 1);
            break;
        }
    }
    return arr.length
}

console.log(longestCon([100, 4, 200, 1, 3, 2]))
// 4
console.log(longestCon([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// 9
console.log(longestCon([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]))
// 5
