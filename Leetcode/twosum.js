/*
Example 1:
Input: nums = [2,7,11,15], target = 9
output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return 0,1
*/
function sum(nums, target)
{
    for(let i = 0; i < nums.length; i++)
    {
        for(let k = nums.length; k > 0; k--)
        {
            if(nums[i] + nums[k] === target)
            {
                return [i, k];
            }
        }
    }
    return [];
}

console.log(sum([2,7,11,15], 9));
console.log(sum([3,2,4], 6));
console.log(sum([3,3], 6));