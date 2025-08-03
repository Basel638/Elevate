/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    
        let x = p.indexOf("*");
        let b = p.substring(0, x);
        let e = p.substring(x + 1);
        let i = s.indexOf(b);
        let j = s.lastIndexOf(e);

        
        return i !== -1 && j !== -1 && i + b.length <= j;
};