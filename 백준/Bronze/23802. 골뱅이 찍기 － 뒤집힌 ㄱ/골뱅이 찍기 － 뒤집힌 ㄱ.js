// https://www.acmicpc.net/problem/23802

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (num) => {
  const answer = [];
  for (let i = 0; i < num * 5; i++) {
    if (num * 1 <= i) {
      answer.push("@".repeat(num));
    } else answer.push("@".repeat(num * 5));
  }
  return answer.join("\n");
};

console.log(sol(N));
