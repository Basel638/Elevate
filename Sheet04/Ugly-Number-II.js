/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
        
        let mySet = new Set();
        mySet.add(1);
        let factors = [2, 3, 5];

        let num = 1;
        for (let i = 0; i < n; i++) {
             
             num = Math.min(...mySet);

             mySet.delete(num);
             if(i == n - 1){
                return num;
             }
            for (let f of factors) {

                 mySet.add(num * f); 

            }
        }

};