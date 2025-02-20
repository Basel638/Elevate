var hasPathSum = function(root, targetSum) {
    var DFS = function(node, currentSum) {
        if (!node) return false;

        currentSum += node.val;
        if (!node.left && !node.right) return currentSum === targetSum;

        return DFS(node.left, currentSum) || DFS(node.right, currentSum);
    };

        return DFS(root, 0);
    
};