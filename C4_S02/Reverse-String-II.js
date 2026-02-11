1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {string}
5 */
6var reverseStr = function(s, k) {
7    
8    let arr = s.split('');
9
10
11    for(let i=0; i<arr.length; i += 2*k )
12    {
13        let left = i;
14
15        let right = Math.min(i +k-1, arr.length-1 )
16
17        while(left < right)
18        {
19            [arr[left],arr[right]] =  [arr[right],arr[left]]
20            left++;
21            right--;
22        }
23    }
24
25    return arr.join('');
26
27
28};