function unique(items) {
    var newArr = [];
    for (var i = 0; i < items.length; i++) {
        // make sure this array doesn't exist before adding
        if (newArr.indexOf(items[i]) === -1) {
            newArr.push(items[i]);
        }
    }
    return newArr;
}
// Time complexity: O(n^2)
function uniques(items) {
    var unique = new Set();
    for (var i = 0; i < items.length; i++) {
        unique.add(items[i]);
    }
    var newArr = Array.from(unique);
    return newArr;
}
console.log(unique(['any', 'any', 'boy', 'girl', 'boy', 'girl']));
console.log(uniques(['any', 'any', 'boy', 'girl', 'boy', 'girl', 'fly']));
