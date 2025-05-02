// https://www.acmicpc.net/problem/18411

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [A, B, C] = list.split(" ").map(Number);
  return A + B + C - Math.min(A, B, C);
};

console.log(sol(input.shift()));
