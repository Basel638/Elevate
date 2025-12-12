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
  var n = readline();
  var x = readline();
  
  console.log(Number(n[n.length - 1]) + Number(x[x.length - 1]));
}
