// https://www.acmicpc.net/problem/10821

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  return num.split(",").length;
};

console.log(sol(input.shift()));
