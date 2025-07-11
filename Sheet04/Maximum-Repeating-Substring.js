/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 
 var solve = function(l, r, x, seq, word, count, maxi)
 {
    if(x == word.length)
        count++, x = 0;

    if(r == seq.length)
        return Math.max(maxi, count);
    
    if(seq[r] == word[x])
        return solve(l, r + 1, x + 1, seq, word, count,maxi);
    
    else
    {
        maxi = Math.max(maxi, count);
        count = 0;
       return  solve(l + 1, l + 1, 0, seq, word, count,maxi);
    }

 }
var maxRepeating = function(sequence, word) {
    let maxi = 0;
    return  solve(0,0,0,sequence,word,0,maxi);
};