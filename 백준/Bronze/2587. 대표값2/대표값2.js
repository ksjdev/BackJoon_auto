// https://www.acmicpc.net/problem/2587

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 구?현
  return list.reduce((acc, cur) => acc + cur) / 5 + "\n" + list[2];
};

console.log(sol(input.map(Number).sort((a, b) => a - b)));
