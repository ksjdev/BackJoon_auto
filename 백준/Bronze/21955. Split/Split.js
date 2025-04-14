// https://www.acmicpc.net/problem/21955

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (pcs) => {
  return pcs.slice(0, pcs.length / 2) + " " + pcs.slice(pcs.length / 2);
};

console.log(sol(N));
