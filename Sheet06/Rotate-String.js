/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;

        for (let i = 0; i < s.length; i++) {
            s = s.slice(1) + s[0];

            let flag = true;
            for (let j = 0; j < s.length; j++) {
                if (s[j] !== goal[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) return true;
        }

        return false;
    };