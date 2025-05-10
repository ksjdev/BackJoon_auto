// https://www.acmicpc.net/problem/28352

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs) => {
  const cache = {};
  const fact = (n) => {
    if (n === 0 || n === 1) return 1;
    if (cache[n]) return cache[n];

    cache[n] = n * fact(n - 1);
    return cache[n];
  };
  return fact(pcs) / 604800;
};

console.log(sol(N));
