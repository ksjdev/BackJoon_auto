// https://www.acmicpc.net/problem/33161

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs) => {
  // 아이디어
  // 구현
  return Math.floor(pcs / 5);
};

console.log(sol(N));
