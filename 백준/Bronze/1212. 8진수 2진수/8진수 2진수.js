// https://www.acmicpc.net/problem/1212

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (pcs) => {
  return pcs
    .split("")
    .map((digit, idx) => {
      const bin = parseInt(digit, 8).toString(2);
      return idx === 0 ? bin : bin.padStart(3, "0");
    })
    .join("");
};

console.log(sol(N));
