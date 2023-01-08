function unique(items: string[]) : string[]
{
    var newArr: string[] = [];

    for(let i = 0; i < items.length; i++)
    {
        // make sure this array doesn't exist before adding
        if(!newArr.includes(items[i]))
        {
            newArr.push(items[i]);
        }
    }

    return newArr;
}
// Time complexity: O(n^2)

function uniques(items: string[]) : string[]
{
    let unique = new Set<string>();

    for(let i = 0; i < items.length; i++)
    {
        unique.add(items[i]);
    }

    let newArr: string[] = Array.from(unique);

    return newArr;
}
const startUnique = new Date().getTime();
console.log(unique(['any', 'any', 'boy', 'girl', 'boy', 'girl']));
const endUnique = new Date().getTime();
console.log(`the unique function ran in ${ endUnique - startUnique} ms`)

const startUniques = new Date().getTime();
console.log(uniques(['any', 'any', 'boy', 'girl', 'boy', 'girl']));
const endUniques = new Date().getTime();
console.log(`the uniques function ran in ${endUniques - startUniques} ms`)