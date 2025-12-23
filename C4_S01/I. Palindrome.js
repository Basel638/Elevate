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
               
               let x = n, res = 0;
               
               while(x != 0)
               {
               let digit = x % 10;

                 res = res * 10 + digit; // 321
                x = Math.trunc(x / 10);
              }
              console.log(res);
              
              if(n == res)
                            console.log("YES");
              else
                            console.log("NO");

 }
 
 
 
 
