var reverse = function(x) {
     let res = 0;
    const INT_MAX = 2 ** 31 - 1;  // 2147483647
    const INT_MIN = -(2 ** 31);   // -2147483648

    while (x !== 0) {
        let digit = x % 10;

        x = Math.trunc(x/10);

        if (res > Math.trunc(INT_MAX / 10) || (res === Math.trunc(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return 0;
        }
        if (res < Math.trunc(INT_MIN / 10) || (res === Math.trunc(INT_MIN / 10) && digit < INT_MIN % 10)) {
            return 0;
        }

        res = res * 10 + digit;
    }

    return res;
};