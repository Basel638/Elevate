var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b);
        let list = { 0: 0 };

     var minCoins = function (amt) {
            if (amt in list) {
                return list[amt];
            }

            let minn = Infinity;
            for (let coin of coins) {
                let diff = amt - coin;
                if (diff < 0) break;

                minn = Math.min(minn, 1 + minCoins(diff));
            }

            list[amt] = minn;
            return list[amt];
        }

        let result = minCoins(amount);
        return result < Infinity ? result : -1;
};
