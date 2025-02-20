class Graph {
    constructor(size) {
        this.adj = Array.from({ length: size }, () => []); // Adjacency list
        this.vis = Array(size).fill(false); // Visited array
    }

    BFS(current) {
        let q = []; // Queue for BFS
        q.push(current);
        this.vis[current] = true;

        while (q.length > 0) {
            let u = q.shift(); // Dequeue the front element
            for (let child of this.adj[u]) {
                if (!this.vis[child]) {
                    this.vis[child] = true;
                    q.push(child);
                }
            }
        }
    }
}

// Example Usage
const graph = new Graph(100);

// Adding some edges (Example)
graph.adj[0].push(1);
graph.adj[0].push(2);
graph.adj[1].push(3);
graph.adj[2].push(4);

// Perform BFS from node 0
graph.BFS(0);

console.log(graph.vis); // Outputs the visited nodes
