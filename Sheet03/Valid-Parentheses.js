/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] === '(' || s[i] === '{' || s[i] === '[') 
            stack.push(s[i]);
            
        else {
            let top = stack[stack.length - 1];
            if ( (top === '(' && s[i] === ')') || (top === '{' && s[i] === '}') ||
            (top === '[' && s[i] === ']') )
                stack.pop();
                
            else 
             return false;
 
        }
    }

    return stack.length === 0;
};