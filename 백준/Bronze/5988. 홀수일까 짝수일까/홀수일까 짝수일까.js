// https://www.acmicpc.net/problem/5988

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // bigint
  const answer = [];
  list.forEach((val) => {
    if (BigInt(val) % 2n === 0n) {
      answer.push("even");
    } else {
      answer.push("odd");
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
