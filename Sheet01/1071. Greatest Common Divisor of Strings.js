=== Before ===


// 2000 step
function isValid(str1, str2, sub) {
    let res = "";

    for (let i = 0; i < str1.length / sub.length; i++) {
        res += sub;
    }
    if (res !== str1) return false;

    res = "";
    for (let i = 0; i < str2.length / sub.length; i++) {
        res += sub;
    }
    if (res !== str2) return false;

    return true;
}


var gcdOfStrings = function(str1, str2) {

    let minString = str1.length <= str2.length ? str1 : str2;

    while (minString.length > 0) {
        if (str1.length % minString.length === 0 && str2.length % minString.length === 0 && isValid(str1, str2, minString)) 
            return minString;
        
        minString = minString.slice(0, -1); 
    }

    return "";
};





=== Optimized ===


var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let a = str1.length, b = str2.length;
    while (b > 0) {		// log(min(a,b))
        [a, b] = [b, a % b];
    }
    
    return str1.slice(0, a);
};




