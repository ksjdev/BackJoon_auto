// https://www.acmicpc.net/problem/33178

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs) => {
  // 아이디어
  // 정렬
  return Math.floor(pcs / 10);
};

console.log(sol(N));
