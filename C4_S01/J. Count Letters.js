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
              
               let freq = new Array(26).fill(0);
               
               for(let i = 0; i < s.length; i++)
               {
                             freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0) ]++;
               }
               
              
              for(let i = 0; i < 26; i++)
              {
                            if(freq[i] != 0)
                            console.log( String.fromCharCode((i + 97)) + ' : ' + freq[i])
              }
               
               
               
               
               
               
 }




















============================================================
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
              
               let freq = new Array(27).fill(0);
               
               for(let i = 0; i < s.length; i++)
               {
                             freq[s[i].charCodeAt(0) - '`'.charCodeAt(0) ]++;
               }
               
              
              for(let i = 1; i < 27; i++)
              {
                            if(freq[i] != 0)
                            console.log( String.fromCharCode((i + 96)) + ' : ' + freq[i])
              }
               
               
               
               
               
               
 }
