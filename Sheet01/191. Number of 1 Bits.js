===Before===


function getBinary(n) {
    let res = "";
    while (n > 0) {
        res += (n % 2 === 1) ? '1' : '0';
        n =Math.trunc(n/2);
    }

   let reversed = "";
    for (let i = res.length - 1; i >= 0; i--) {
        reversed += res[i];
    }
    return reversed;
}


var hammingWeight = function(n) {
       let binaryCode = getBinary(n);
    let count = 0;
    for (let i = 0; i < binaryCode.length; i++) {
        if (binaryCode[i] === '1') {
            count++;
        }
    }
    return count;
};










===Optimized===

var hammingWeight = function(n) {
      let count = 0;
    while (n !== 0) {
        count += 1;
        n = n & (n - 1);
    }
    return count;
};
