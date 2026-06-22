1/**
2 * @param {number[][]} image
3 * @return {number[][]}
4 */
5var flipAndInvertImage = function(image) {
6    for (let row of image) {
7        let i = 0, j = row.length - 1;
8        while (i <= j) {
9            if (i == j) {
10                row[i] ^= 1;
11            } else {
12                [row[i], row[j]] = [row[j] ^ 1, row[i] ^ 1];
13            }
14            i++;
15            j--;
16        }
17    }
18    return image;
19};