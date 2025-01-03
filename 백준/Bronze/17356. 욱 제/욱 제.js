// https://www.acmicpc.net/problem/17356

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 구?현
  const [A, B] = list.shift().split(" ").map(Number);
  return 1 / (1 + 10 ** ((B - A) / 400));
};

console.log(sol(input));
