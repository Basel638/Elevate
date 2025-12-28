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
 
 
 function main()
 {
               let n = Number(readline());
               let m = Number(readline());
               
               let arr = new Array(n);
               let freq = new Array(m + 1).fill(0);
               
               for(let i = 0; i < n; i++)
               {
                             arr[i] = Number(readline());
               }
               
               for(let i = 0; i < n; i++)
               {
                             freq[arr[i]]++;
               }
               
               for(let i = 1; i <= m; i++)
               {
                             console.log(freq[i]);
               }
               
               
               
               
               
               
 }
