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
               let s = readline();
               let sum = 0;
               
               for(let i = 0; i < s.length; i++)
               {
                            sum += (Number(s[i]));              
               }
               console.log(sum);
 }
