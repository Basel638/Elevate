var maxAreaOfIsland = function(grid) {
      
      
        Rows = grid.length;
        Columns = grid[0].length;
        visit = Array.from({ length: Rows }, () => Array(Columns).fill(false));

        let area = 0;
        var DFS = function(r, c) {
        if (r < 0 || r === Rows || c < 0 || c === Columns || 
            grid[r][c] === 0 || visit[r][c]) {
            return 0;
        }

        visit[r][c] = true;

        return 1 + 
            DFS(r + 1, c) + 
            DFS(r - 1, c) + 
            DFS(r, c + 1) + 
            DFS(r, c - 1);
    }
        for (let r = 0; r < Rows; r++) {
            for (let c = 0; c < Columns; c++) {
                area = Math.max(area, DFS(r, c));
            }
        }

        return area;
    
    
    };