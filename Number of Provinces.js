var findCircleNum = function(isConnected) {
        vis = new Array(isConnected.length).fill(false); // Visited array
        adj = Array.from({ length: isConnected.length }, () => []); // Adjacency list


       var dfs = function(cur) {
        vis[cur] = true;
        for (let child of adj[cur]) {
            if (!vis[child]) {
                dfs(child);
            }
        }};


        // Build adjacency list
        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected[i].length; j++) {
                if (isConnected[i][j]) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        let ans = 0;
        for (let i = 0; i <isConnected.length; i++) {
            if (!vis[i]) {
                ans++;
                dfs(i);
            }
        }

        return ans;
       
};
