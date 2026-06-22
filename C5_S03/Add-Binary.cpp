1/**
2 * @param {string} a
3 * @param {string} b
4 * @return {string}
5 */
6var addBinary = function(a, b) {
7    let res = "";
8    let carry = 0;
9
10    a = a.split('').reverse().join('');
11    b = b.split('').reverse().join('');
12
13    for (let i = 0; i < Math.max(a.length, b.length); i++) {
14        let digitA = i < a.length ? Number(a[i]) : 0;
15        let digitB = i < b.length ? Number(b[i]) : 0;
16
17        let total = digitA + digitB + carry;
18        let char = String(total % 2);
19
20        res = char + res;
21        carry = Math.floor(total / 2);
22    }
23
24    if (carry) {
25        res = "1" + res;
26    }
27
28    return res;
29};