function sortArray(arr){
    arr.sort((a, b) => a - b)

    if(arr.length <= 1) return arr.length;

    for(let i = 0; i < arr.length - 1; i++){
        while( arr[i] === arr[i+1]){
            arr.splice(i + 1, 1)
        } 
    }
    return arr;
}

console.log(sortArray([1, 2, 3, 3, 3, 4, 5, 2]))