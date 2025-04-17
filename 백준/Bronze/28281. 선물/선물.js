// https://www.acmicpc.net/problem/28281

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = input.shift();

const sol = (list) => {
  const [N, X] = list.shift().split(" ").map(Number);
  const socks = list.shift().split(" ").map(Number);
  let min = Infinity;
  for (let i = 0; i < N - 1; i++) {
    const cur = socks[i] * X + socks[i + 1] * X;
    if (min > cur) {
      min = cur;
    }
  }
  return min;
};

console.log(sol(input));
