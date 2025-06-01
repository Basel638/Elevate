/**
 * @param {string[]} strs
 * @return {string}
 */
 let result,flag;
 function solve(strs,j,i)
 {
    if(j == strs.length){
        result+= strs[0][i];
        return;  
    }

    if(i == strs[j].length || strs[j][i] != strs[0][i] ){
        flag=1;
        return;
    }
    
    return solve(strs,j+1,i);    
 }
var longestCommonPrefix = function(strs) {
     result = \\;
     flag = 0;
    for (let i = 0; i < strs[0].length; i++) {
        solve(strs,0,i);
        if(flag)
            break;
        // for (let s of strs) 
        //     if (i === s.length || s[i] !== strs[0][i]) 
        //         return result;
        
        // result += strs[0][i];

    }

    return result;
};