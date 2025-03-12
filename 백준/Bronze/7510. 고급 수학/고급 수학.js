// https://www.acmicpc.net/problem/7510

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const text = (num) => {
    return `Scenario #${num}:\n`;
  };
  const answer = [];
  list.forEach((val, idx) => {
    const [A, B, C] = val.split(" ").sort((a, b) => +a - +b);
    if (C ** 2 === B ** 2 + A ** 2) {
      answer.push(text(idx + 1) + "yes");
    } else {
      answer.push(text(idx + 1) + "no");
    }
  });
  return answer.join("\n\n");
};

console.log(sol(N, input));
