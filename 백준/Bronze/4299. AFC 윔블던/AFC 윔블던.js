// https://www.acmicpc.net/problem/4299

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (score) => {
  const [s, m] = score.split(" ").map(Number);

  if (s + m < 0 || s - m < 0 || (s + m) % 2 !== 0) {
    return "-1";
  }

  const a = (s + m) / 2;
  const b = s - a;

  return `${Math.max(a, b)} ${Math.min(a, b)}`;
};

console.log(sol(input.shift()));
