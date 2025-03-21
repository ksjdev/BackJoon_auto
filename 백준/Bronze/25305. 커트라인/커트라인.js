// https://www.acmicpc.net/problem/25305

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [N, k] = list[0].split(" ").map(Number);
  const x = list[1].split(" ").sort((a, b) => +b - +a);
  return x[k - 1];
};

console.log(sol(input));
