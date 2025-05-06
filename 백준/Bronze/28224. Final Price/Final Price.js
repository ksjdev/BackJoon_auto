// https://www.acmicpc.net/problem/28224

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  return list.reduce((acc, cur) => acc + +cur, 0);
};

console.log(sol(N, input));
