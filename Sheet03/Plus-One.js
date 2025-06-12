/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1); // push in front
    return digits;
};




=== How to loop in hash ===
   // ✅ keys()
for (const key of map.keys()) {
  console.log("Key:", key);
}

// ✅ values()
for (const value of map.values()) {
  console.log("Value:", value);
}

// ✅ entries()
for (const [key, value] of map.entries()) {
  console.log(`${key} => ${value}`);
}
