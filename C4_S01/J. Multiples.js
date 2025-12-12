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

var n1 = Number(readline());
var n2 = Number(readline());

if(n1 % n2 == 0 || n2 % n1 == 0)
              console.log("Multiples");
else
              console.log("No Multiples");
 
}
