var letterCasePermutation = function(s) {

    let res = [];

     var Backtrack= function(sub = "", i = 0) {
        if (sub.length === s.length) {
            res.push(sub);
        } 
        else {
            if (isNaN(s[i])) {
                Backtrack(sub + s[i].toUpperCase(), i + 1);
                Backtrack(sub + s[i].toLowerCase(), i + 1);
            } 
            else {
                Backtrack(sub + s[i], i + 1);
            }
        }
    }

    Backtrack();
    return res;
};