// https://www.acmicpc.net/problem/11282

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  // 구현
  const Kunicode = 0xac00;
  return String.fromCharCode(Kunicode + num - 1);
};

console.log(sol(N));
