1/**
2 * @param {number[]} arr
3 * @return {boolean}
4 */

  // C++
  class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
   int freq[4001] = {};
        int count0 = 0;

        for (int num : arr) {
            freq[num + 2000] = 1;
            if (num == 0)
                count0++;
        }

        if (count0 > 1)
            return true;
        else {
            for (int num : arr) {
                if (num != 0 && freq[num * 2 + 2000] == 1)
                    return true;
             
            }
            return false;
        }
    }
};

// javascript
var checkIfExist = function(arr) {
    
  let freq = new Array(4001).fill(0);
    let count0 = 0;

    for (let num of arr) {
        freq[num + 2000] = 1;
        if (num === 0)
            count0++;
    }

    if (count0 > 1)
        return true;
    else {
        for (let num of arr) {
            if (num !== 0 && freq[num * 2 + 2000] === 1)
                return true;
        }
        return false;
    }
};
