var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
        let length = words.length;
        const brokenLettersSet = new Set(brokenLetters);

        for (const word of words) {
            for (const char of word) {
                if (brokenLettersSet.has(char)) {    // O(1)
                    length--;
                    break;
                }
            }
        }

        return length;
};
