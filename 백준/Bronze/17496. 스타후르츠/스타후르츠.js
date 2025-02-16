// https://www.acmicpc.net/problem/17496

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [N, T, C, P] = list.split(" ").map(Number);
  return Math.floor((N - 1) / T) * C * P;
};

console.log(sol(input.shift()));
