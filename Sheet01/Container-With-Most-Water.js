/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = -1;

    while (left !== right) {
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;
        maxArea = Math.max(maxArea, currentHeight * currentWidth);

        if (height[left] <= height[right]) 
            left++;
        else 
            right--;
    }

    return maxArea;
};