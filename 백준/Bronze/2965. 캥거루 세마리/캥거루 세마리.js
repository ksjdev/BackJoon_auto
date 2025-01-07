// https://www.acmicpc.net/problem/2965

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  // 구현
  const [A, B, C] = list.split(" ").map(Number);
  return Math.max(C - B - 1, B - A - 1);
};

console.log(sol(input.shift()));
