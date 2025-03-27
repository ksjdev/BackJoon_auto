// https://www.acmicpc.net/problem/32902

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [k, n] = list.split(" ").map(Number);
  return `${n + 1} ${k * n + 1}`;
};

console.log(sol(input.shift()));
