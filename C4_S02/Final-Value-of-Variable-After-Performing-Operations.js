1/**
2 * @param {string[]} operations
3 * @return {number}
4 */
5var finalValueAfterOperations = function(operations) {
6    
7    let x =0;
8
9    for(let i=0;i<operations.length;i++)
10    {
11        if(operations[i] == "--X" || operations[i] == "X--")
12            x--;
13        else
14            x++;
15    }
16
17    return x;
18};