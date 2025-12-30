1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    
7    let s1 = '';
8
9    for(let i =0; i< s.length; i++)
10    {
11        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')  )
12            s1+= s[i].toLowerCase();
13    }
14
15
16    let reversed = '';
17
18    for(let i = s1.length -1; i >= 0; i--)
19    {
20        reversed += s1[i];
21    }
22
23    return reversed == s1;
24
25};