/**
 * @param {number} n
 * @return {string[]}
 */

 let res;


function solve(option, open, close, n)
{
    if(option.length === 2 * n){
        res.push(option);
        return; }

        if (open < n) // // // =>  (((
        solve(option + '(' , open +1, close, n);

       if (close < open)   // => (()())
        solve(option + ')', open, close +1,n);    

}


var generateParenthesis = function(n) {
    
    res = [];
    solve("",0,0,n);
    return res;


};

// (())
// open , close
// (open < n) => (option + ( , open +1, close, n) );
// (close < open) =>  (option + ), open, close +1,n );
