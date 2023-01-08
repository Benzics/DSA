function unique(items: string[]) : string[]
{
    var newArr: string[] = [];

    for(let i = 0; i < items.length; i++)
    {
        // make sure this array doesn't exist before adding
        if(newArr.indexOf(items[i]) === -1)
        {
            newArr.push(items[i]);
        }
    }

    return newArr;
}
// Time complexity: O(n^2)
console.log(unique(['any', 'any', 'boy', 'girl', 'boy', 'girl']));