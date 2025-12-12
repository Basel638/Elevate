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
  inputString = inputString.trim().split(/\s+/); // split by spaces or newlines
  main();
});
 
function readline() {
  return inputString[currentLine++];
}
 
function main() {
  var n = Number(readline());
  n = Math.trunc(n / 1000);
  if(n % 2 == 0)
  {
                console.log("EVEN");
  }
  
  else
  console.log("ODD");

 
}
