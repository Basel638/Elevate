var validPath = function(n, edges, source, destination) {
    adj = Array.from({ length: n }, () => []);
    vis = Array(n).fill(false);

    var DFS = function(u) {
        vis[u] = true;
        for (let v of adj[u]) {
            if (!vis[v]) {
                DFS(v);
            }
        }
    };

    for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        DFS(source);
        return vis[destination];

};
