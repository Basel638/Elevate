/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let current = \\;

    for (let i = 0; i <= path.length; i++) {
        let c = i < path.length ? path[i] : '/'; 

        if (c === '/') 
        {
            if (current === \..\) 
            {
                if (stack.length > 0)  stack.pop();
                
            }
            else if (current !== \\ && current !== \.\) 
            {
                stack.push(current);
            }
            current = \\;
        } 
        else
            current += c;
    }

    return \/\ + stack.join(\/\);
};