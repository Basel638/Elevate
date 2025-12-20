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
              
            let n = Number(readline());
            
            while(n != 1999)
            {
                          console.log("Wrong");
                          n = Number(readline());
                      
            }
            console.log("Correct");
              
             
              
}
