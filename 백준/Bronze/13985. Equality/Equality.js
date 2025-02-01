// https://www.acmicpc.net/problem/13985

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const cur = list.split(" = ");

  return cur[0].split(" + ").reduce((acc, cur) => +acc + +cur, 0) === +cur[1] ? "YES" : "NO";
};

console.log(sol(input.shift()));
