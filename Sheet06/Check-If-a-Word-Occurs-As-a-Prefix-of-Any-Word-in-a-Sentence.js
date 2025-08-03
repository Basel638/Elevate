/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let numberWord = 1;
    for(let i = 0; i < sentence.length; i++)
    {
        if(sentence[i] != ' ')
        { 
            if( (i - 1 < 0 || sentence[i - 1 ] == ' ') && sentence[i] == searchWord[0] ){
            let flag = true;
            for(let j = 0; j < searchWord.length; j++, i++)
            {
                if(sentence[i] != searchWord[j])
                {
                    flag = false;
                    break;
                }
            }
            if(flag)
                return numberWord;
                
            }
        }

        if(sentence[i] == ' ')
            numberWord++;
        
        
    }
    return -1;
};