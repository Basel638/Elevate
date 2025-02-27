var generateParenthesis = function(n) {
    
    let stack = []
    let res = []

    var Backtrack = function(OpenCount,ClosedCount)
    {
        if(OpenCount===n && ClosedCount===n){
         res.push(stack.join(""));
        return;
        }

        if(OpenCount<n)
        {
            stack.push('(');
            Backtrack(OpenCount+1,ClosedCount)
            stack.pop();
        }

        if(ClosedCount<OpenCount)
        {
            stack.push(')');
            Backtrack(OpenCount,ClosedCount+1)
            stack.pop();
        }
    }
    Backtrack(0,0)
    return res;
};