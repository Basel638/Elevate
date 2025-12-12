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
  
  var year = Math.trunc(n / 365);
  n = n % 365;
  
  var month = Math.trunc(n / 30);
  n = n % 30;
  
  
  console.log(year + ' years');
  
  console.log(month + ' months');
  console.log(n + ' days');
}
