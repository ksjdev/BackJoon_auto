// https://www.acmicpc.net/problem/10156

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const [K, N, M] = list.split(" ").map(Number);
  const total = K * N;
  return total < M ? 0 : total - M;
};

console.log(sol(input.shift()));
