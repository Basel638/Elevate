var findCircleNum = function(isConnected) {
        vis = new Array(201).fill(false); // Visited array
        adj = Array.from({ length: 201 }, () => []); // Adjacency list


       var dfs = function(cur) {
        vis[cur] = true;
        for (let child of adj[cur]) {
            if (!vis[child]) {
                dfs(child);
            }
        }};


        // Build adjacency list
        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected.length; j++) {
                if (isConnected[i][j]) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        let ans = 0;
        for (let i = 0; i < 201; i++) {
            if (adj[i].length > 0 && !vis[i]) {
                ans++;
                dfs(i);
            }
        }

        return ans;
       
};