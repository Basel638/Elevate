/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
 
var getLongestSubsequence = function(words, groups) {
    
    let currentWord = [], resWord = [];

    for(let i = 0; i< words.length; i++)
    {
        let x = groups[i];
        currentWord.push(words[i]);
        // currentWord = a,    x = 0
        for(let j = i + 1; j < words.length; j++)
        {
            if(x != groups[j])
            {
                currentWord.push(words[j]);
                // currentWord => a b 
                x = groups[j];
            }

        }

        if(resWord.length <= currentWord.length)
        {
            resWord = currentWord;
        }

        currentWord = [];

    }

    return resWord;
};