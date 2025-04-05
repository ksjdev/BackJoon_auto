// https://www.acmicpc.net/problem/25630

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, str) => {
  const a = str.slice(0, Math.floor(pcs / 2));
  const b = str
    .slice(Math.ceil(pcs / 2), pcs)
    .split("")
    .reverse()
    .join("");
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) answer++;
  }
  return answer;
};

console.log(sol(N, input.shift()));
