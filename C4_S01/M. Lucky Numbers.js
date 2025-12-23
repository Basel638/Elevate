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
 
 function main(){
               let n = Number(readline());
               let m = Number(readline());
               let y = 1;
               for(let i = n; i<=m; i++)
               {
                             let x = i, flag = 1;
                             while(x != 0)
                             {
                                          if(x % 10 != 4 && x % 10 != 7)
                                          {
                                                        flag = 0;break;
                                          }
                                          x = Math.trunc(x / 10);
                             }
                             if(flag)
                                    {y = 0; process.stdout.write(i + " ");}
               }
               
               if(y)
               process.stdout.write("-1");
 }
