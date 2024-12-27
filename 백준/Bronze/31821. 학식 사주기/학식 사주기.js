// https://www.acmicpc.net/problem/31821

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const menu = list.splice(0, pcs).map(Number);
  list.shift();
  let sum = 0;
  list.forEach((val) => {
    sum += menu[+val - 1];
  });
  return sum;
};

console.log(sol(N, input));
