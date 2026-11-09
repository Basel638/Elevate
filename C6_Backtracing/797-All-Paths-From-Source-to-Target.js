/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    let target = graph.length - 1;

    function backtracking(currentPath, currentNode) {
        if (currentNode === target) {
            res.push([...currentPath]); // shallow copy
            return;
        }
        
        for (let neighbor of graph[currentNode]) {
            currentPath.push(neighbor);
            backtracking(currentPath, neighbor);
            currentPath.pop();
        }
    }

    backtracking([0], 0);
    return res;
};