// https://www.acmicpc.net/problem/30018

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// N은 BigInt로 바로 변환
const N = +input.shift();

const sol = (pcs, list) => {
  const prev = list[0].split(" ").map(Number);
  const curr = list[1].split(" ").map(Number);
  let sum = 0;
  for (let i = 0; i < pcs; i++) {
    sum += Math.abs(prev[i] - curr[i]);
  }
  return sum / 2;
};

console.log(sol(N, input));
