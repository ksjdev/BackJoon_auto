// https://www.acmicpc.net/problem/2523

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs) => {
  // 아이디어
  const answer = [];
  const dot = "*";
  for (let i = 0; i < pcs; i++) {
    answer.push(dot.repeat(i + 1));
  }
  for (let i = pcs - 1; i > 0; i--) {
    answer.push(dot.repeat(i));
  }
  return answer.join("\n");
};

console.log(sol(N));
