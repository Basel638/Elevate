/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
     const dp = new Map();
    dp.set(0, []);
    dp.set(1, [new TreeNode(0)]);

    function backtrack(nodes) {
        if (dp.has(nodes)) {
            return dp.get(nodes);
        }

        const res = [];

        for (let l = 0; l < nodes; l++) {
            const r = nodes - 1 - l;

            const leftTrees = backtrack(l);
            const rightTrees = backtrack(r);

            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    res.push(new TreeNode(0, left, right));
                }
            }
        }

        dp.set(nodes, res);
        return res;
    }

    return backtrack(n);
};