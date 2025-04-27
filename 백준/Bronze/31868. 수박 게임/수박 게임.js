// https://www.acmicpc.net/problem/31868

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// N은 BigInt로 바로 변환
// const N = +input.shift();

const sol = (list) => {
  let [N, K] = list.split(" ").map(Number);
  for (let i = 1; i < N; i++) {
    K = Math.floor(K / 2);
  }
  return K;
};

console.log(sol(input.shift()));
