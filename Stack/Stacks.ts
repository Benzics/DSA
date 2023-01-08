/**
 * Find out if a word is a palindrome or not
 * @param words 
 */
function palindrome(words: string)
{
    var stack: string[] = [];
    var rword = '';

    for(let i = 0; i < words.length; i++)
    {
        stack.push(words[i]);
    }

    for(let i = 0; i < words.length; i++)
    {
        rword += stack.pop();
    }

    if(rword === words)
    {
        return true;
    }
    return false;
}

console.log((palindrome('pop')));
console.log((palindrome('ben')));
console.log((palindrome('appa')));