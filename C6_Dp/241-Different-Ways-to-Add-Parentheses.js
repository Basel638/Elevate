/**
 * @param {string} expression
 * @return {number[]}
 */

let dp;

var solve = function(left, right, expression)
{
    if(dp[left][right] != null)
        return dp[left][right];

    let res = [];

    for(let i = left; i <= right; i++)
    {
        let op = expression[i];

        if(op == '+' || op == '-' || op == '*')
        {
            let leftNums = solve(left, i - 1, expression);
            let rightNums = solve(i + 1, right, expression);

            for(let a of leftNums)
            {
                for(let b of rightNums)
                {
                    if(op == '+')
                        res.push(a + b);

                    else if(op == '-')
                        res.push(a - b);

                    else
                        res.push(a * b);
                }
            }
        }
    }

    if(res.length == 0)
        res.push(Number(expression.slice(left, right + 1)));

    return dp[left][right] = res;
};

var diffWaysToCompute = function(expression) {

    let n = expression.length;

    dp = Array.from(
        { length: n },
        () => Array(n).fill(null)
    );

    return solve(0, n - 1, expression);
};
