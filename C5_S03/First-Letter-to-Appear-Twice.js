1/**
2 * @param {string} s
3 * @return {character}
4 */
5var repeatedCharacter = function(s) {
6      let mask = 0; // Bits 0-25 represent 'a'-'z'
7
8    for (let c of s) {
9        let bitPos = c.charCodeAt(0) - 'a'.charCodeAt(0);
10
11        // Check if the bit at bitPos is already 1
12        if (mask & (1 << bitPos)) {
13            return c;
14        }
15
16        // Set the bit at bitPos to 1
17        mask |= (1 << bitPos);
18    }
19
20    return ' ';
21};