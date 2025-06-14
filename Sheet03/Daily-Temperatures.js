/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stack = [];
    let ans = new Array(temperatures.length).fill(0);

    for(let i =0; i<temperatures.length; i++)
    {
        if(stack.length)
        {
        let top = stack[stack.length-1];
        while(temperatures[i] > temperatures[top])
        {
            ans[top] = i - top;
            stack.pop();
            top = stack[stack.length-1];
        }
        }
        stack.push(i);
    }

    return ans;
};