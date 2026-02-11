1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    let left = 0;
7    let right = height.length - 1;
8    let maxArea = -1;
9
10    while (left !== right) {
11        let currentHeight = Math.min(height[left], height[right]);
12        let currentWidth = right - left;
13        maxArea = Math.max(maxArea, currentHeight * currentWidth);
14
15        if (height[left] <= height[right]) 
16            left++;
17        else 
18            right--;
19    }
20
21    return maxArea;
22};