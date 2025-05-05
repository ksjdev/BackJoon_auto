// https://www.acmicpc.net/problem/28248

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const P = +list[0];
  const C = +list[1];
  let sum = P * 50 - C * 10;
  return P > C ? sum + 500 : sum;
};

console.log(sol(input));
