

(c++)



#include<iostream>
using namespace std;


int main(){
              char c;
              cin>>c;
              
              if(c >= 'a' && c <= 'z')
                            c-=32;
              else
                            c+=32;
              
              cout<<c;
}





======================================================================================



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

var c = readline();

if(c >= 'a' && c <= 'z')
{
            
              console.log(c.toUpperCase());
}
else
{
              
              console.log(c.toLowerCase());
}

 
}
