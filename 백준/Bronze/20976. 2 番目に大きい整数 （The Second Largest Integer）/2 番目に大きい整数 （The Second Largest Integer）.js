// https://www.acmicpc.net/problem/20976

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [A, B, C] = list.split(" ").sort((a, b) => a - b);
  return B;
};

console.log(sol(input.shift()));
