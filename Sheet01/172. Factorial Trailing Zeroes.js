var trailingZeroes = function(n) {
     let count = 0;
    while (n >= 5) {
        count += Math.trunc(n / 5);
        n = Math.trunc(n / 5);
    }
    return count;
};