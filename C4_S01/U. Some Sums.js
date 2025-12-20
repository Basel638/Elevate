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





function main (){
              
            
              let sum = 0;
              let n = Number(readline());
              
              let A = Number(readline());
              let B = Number(readline());
              for(let i = 1; i <= n; i++)
              {
                 let x = i, sumOfDigits = 0;
                 while(x != 0)
                 {
                               sumOfDigits += x % 10;
                               x = Math.trunc(x / 10);
                 }
                 
                 if(sumOfDigits >= A && sumOfDigits <= B)
                            sum += i;
              }
              
              console.log(sum);
              
}
