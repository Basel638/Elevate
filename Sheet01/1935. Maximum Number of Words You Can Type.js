var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
        let length = words.length;
        const brokenLettersSet = new Set(brokenLetters);

        for (let word of words) {
            for (let char of word) {
                if (brokenLettersSet.has(char)) {    // O(1)
                    length--;
                    break;
                }
            }
        }

        return length;
};
