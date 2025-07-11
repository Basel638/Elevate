/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var solve = function(i, s, t)
{
    if(s.length == 0)
        return true;
    if(i == t.length && s.length != 0)
        return false;

    if(s[0] == t[i])
      s = s.slice(1);
      
    return solve(i + 1, s, t);
    
}
 
var isSubsequence = function(s, t) {
  return solve (0,s,t);
};