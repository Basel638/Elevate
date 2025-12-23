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
               
               for(let i = 2; i <= n; i++)
               {
                             let count = 0;
                             for(let x = 1; x <= i; x++)
                             {
                                           if(i % x == 0)
                                                        count++;
                             }
                            
                            if(count == 2)
                             process.stdout.write(i + " ");
               }
 }
