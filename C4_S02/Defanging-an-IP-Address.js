1/**
2 * @param {string} address
3 * @return {string}
4 */
5var defangIPaddr = function(address) {
6    
7    let s = "";
8
9    for(let i = 0; i < address.length; i++)
10    {
11        if(address[i] == '.')
12            s += "[.]"; // "xba"
13        else
14            s += address[i];
15    }
16
17
18    return s;
19};