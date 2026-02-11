1/**
2 * @param {number[][]} points
3 * @return {number}
4 */
5var minTimeToVisitAllPoints = function(points) {
6   
7
8   let count =0;
9
10   for(let i =1; i< points.length;++i)
11   {
12    count+= Math.max( Math.abs(points[i][0]-points[i-1][0]) , Math.abs(points[i][1] - points[i-1][1]));
13   }
14   return count;
15}