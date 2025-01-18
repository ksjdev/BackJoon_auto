// https://www.acmicpc.net/problem/33169

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  return list[0] * 1000 + list[1] * 10000;
};

console.log(sol(input.map(Number)));
