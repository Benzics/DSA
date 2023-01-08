function unique(items) {
    var newArr = [];
    for (var i = 0; i < items.length; i++) {
        // make sure this array doesn't exist before adding
        if (!newArr.includes(items[i])) {
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
var startUnique = new Date().getTime();
console.log(unique(['any', 'any', 'boy', 'girl', 'boy', 'girl']));
var endUnique = new Date().getTime();
console.log("the unique function ran in ".concat(endUnique - startUnique, " ms"));
var startUniques = new Date().getTime();
console.log(uniques(['any', 'any', 'boy', 'girl', 'boy', 'girl']));
var endUniques = new Date().getTime();
console.log("the uniques function ran in ".concat(endUniques - startUniques, " ms"));
