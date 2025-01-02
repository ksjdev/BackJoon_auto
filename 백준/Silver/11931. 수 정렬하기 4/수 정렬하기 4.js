// https://www.acmicpc.net/problem/11931

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 단순 정렬?
  return list.sort((a, b) => b - a).join("\n");
};

console.log(sol(N, input.map(Number)));
