
   function BFS(current) {
        adj = Array.from({ length: 100 }, () => []); // Adjacency list
        vis = Array(100).fill(false); // Visited array
    
        let q = []; // Queue for BFS
        q.push(current);
        vis[current] = true;

        while (q.length > 0) {
            let u = q.shift(); // Dequeue the front element
            for (let child of adj[u]) {
                if (!vis[child]) {
                    vis[child] = true;
                    q.push(child);
                }
            }
        }
    }


