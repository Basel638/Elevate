/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
 
var getLongestSubsequence = function(words, groups) {
    
    let res = 0;
    let currentWord = [], resWord = [];
    for(let i = 0; i < words.length; i++)
    {   let x = groups[i];
        currentWord.push(words[i]);
        for(let j = i + 1; j < words.length; j++)
        {
            if(x != groups[j])
            {
                currentWord.push(words[j]);
                x = groups[j];
            }
        }
        if(res <= currentWord.length)
        {
            res = currentWord.length;
            resWord = currentWord;
        }
            currentWord = [];

    }

    return resWord;
};