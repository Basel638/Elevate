1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let s1 = '';
7
8    for(let i =0; i<s.length; i++)
9    {
10        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9'))
11            s1 += s[i].toLowerCase();
12    }
13
14    // s1
15
16     let s2 = '';
17               
18               
19               for(let i = s1.length - 1; i >= 0; i--)
20               {
21                             s2 += s1[i];
22               }
23               
24               if(s1 == s2)
25                return true;
26
27                return false;
28
29
30};