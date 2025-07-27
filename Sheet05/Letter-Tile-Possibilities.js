/**
 * @param {string} tiles
 * @return {number}
 */
 
var numTilePossibilities = function(tiles) {
    
    let uniqueSequences = new Set();
    let isUsed = new Array(tiles.length).fill(false);

    function generateSequences(currentSequence) {
        uniqueSequences.add(currentSequence);

        for (let i = 0; i < tiles.length; i++) {
            if (!isUsed[i]) {
                isUsed[i] = true;
                generateSequences(currentSequence + tiles[i]);
                isUsed[i] = false;
            }
        }
    }

    generateSequences("");
    
    // Subtract 1 to exclude the empty string
    return uniqueSequences.size - 1;
};