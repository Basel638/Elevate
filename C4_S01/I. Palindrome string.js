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
               let s2 = "";
               
               for(let i = s.length - 1; i >= 0; i--)
               {
                             s2+= s[i];
               }
               
               if(s == s2)
               console.log("YES");
               
               else
               console.log("NO");
 }
