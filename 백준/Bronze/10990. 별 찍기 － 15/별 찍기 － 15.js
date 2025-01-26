// https://www.acmicpc.net/problem/10990

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs) => {
  // 아이디어
  const answer = [];
  const empty = " ";
  const star = "*";
  for (let i = 1; i <= pcs; i++) {
    if (i === 1) {
      answer.push(empty.repeat(pcs - i) + star);
    } else {
      answer.push(empty.repeat(pcs - i) + star + " ".repeat((i - 1) * 2 - 1) + star);
    }
  }
  return answer.join("\n");
};

console.log(sol(N));
