// https://www.acmicpc.net/problem/2921

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  let sum = 0;

  for (let i = 0; i <= N; i++) {
    for (let j = i; j <= N; j++) {
      sum += i + j;
    }
  }

  return sum;
};

console.log(sol(N));
