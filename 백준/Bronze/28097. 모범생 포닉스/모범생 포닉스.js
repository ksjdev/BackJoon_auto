// https://www.acmicpc.net/problem/28097

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const cur = list.split(" ").map(Number);
  const time = cur.reduce((acc, cur) => acc + cur, 0) + (cur.length - 1) * 8;
  return `${Math.floor(time / 24)} ${time % 24}`;
};

console.log(sol(N, input.shift()));
