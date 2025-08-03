/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let res = 0;

        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                let w1 = words[i];
                let w2 = words[j];

                if(w1.length <= w2.length)
                {

                
                let flagStart = true, flagEnd = true;
                
                // Start
                for(let x = 0; x < w2.length; x++)
                {
                    if(x == w1.length)
                        break;
                    else if(w1[x] != w2[x])
                    {
                        flagStart = false;
                        break;
                    }
                }
                
                // End                
                let y = w1.length -1 ;
                for(let x = w2.length - 1; x >= 0; x--, y--)
                {
                    if(y < 0)
                        break;
                    else if(w1[y] != w2[x])
                    {
                        flagEnd = false;
                        break;
                    }
                }
                

                if(flagStart && flagEnd)
                    res++;
                }
                // if (w2.startsWith(w1) && w2.endsWith(w1)) {
                //     res += 1;
                // }
            }
        }

        return res;
    };