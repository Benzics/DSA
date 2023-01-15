function max_sum(items: number[]) : number
{
    let max: number = 0;
    let current: number = 0;

    for (let i = 0; i < items.length; i++)
    {
       
        current += items[i];

        if(current < 0) current = 0

        if(max < current) max = current

    }

    return max;
}

console.log(max_sum([-3, 1, -8, 12, 0, -3, 5, -9, 4]))