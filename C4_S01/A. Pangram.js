"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.trim().split(/\s+/);
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
 function main() {
  let n = Number(readline());
  let s = readline();

  let freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= 'A' && ch <= 'Z') {
      ch = ch.toLowerCase(); 
      }

    freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let flag = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] === 0) {
      flag = 1;
      break;
    }
  }

  if (flag) console.log("NO");
  else console.log("YES");
}
