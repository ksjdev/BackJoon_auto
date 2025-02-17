// https://www.acmicpc.net/problem/14652

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [N, M, K] = list.split(" ").map(Number);
  return Math.floor(K / M) + " " + (K % M);
};

console.log(sol(input.shift()));
