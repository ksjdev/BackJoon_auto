// https://www.acmicpc.net/problem/18408

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [A, B, C] = list.split(" ").map(Number);
  return list.split(" ").reduce((acc, cur) => (cur == 1 ? acc + 1 : acc), 0) >=
    2
    ? 1
    : 2;
};

console.log(sol(input.shift()));
