/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
      let n = pref.length;
    let ans = new Array(n);

    ans[0] = pref[0];

    for (let i = 1; i < n; i++) {
        ans[i] = pref[i - 1] ^ pref[i];
    }

    return ans;
};