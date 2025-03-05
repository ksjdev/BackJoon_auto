// https://www.acmicpc.net/problem/25191

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const total = list
    .shift()
    .split(" ")
    .reduce((acc, cur) => Math.floor(+acc / 2) + +cur);

  return Math.min(pcs, total);
};

console.log(sol(N, input));
