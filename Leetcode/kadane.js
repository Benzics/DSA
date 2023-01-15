function max_sum(items) {
    var max = 0;
    var current = 0;
    for (var i = 0; i < items.length; i++) {
        current += items[i];
        if (current < 0)
            current = 0;
        if (max < current)
            max = current;
    }
    return max;
}
console.log(max_sum([-3, 1, -8, 12, 0, -3, 5, -9, 4]));
