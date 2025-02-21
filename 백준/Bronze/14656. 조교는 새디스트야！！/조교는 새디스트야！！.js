// https://www.acmicpc.net/problem/14656

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  let answer = 0;
  list.split(" ").forEach((val, idx) => {
    if (+val !== idx + 1) answer++;
  });
  return answer;
};

console.log(sol(N, input.shift()));
