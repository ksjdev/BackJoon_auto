// https://www.acmicpc.net/problem/11004

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 정렬? -> 단순 정렬시 시간초과
  // 퀵정렬..?
  const [N, K] = list.shift().split(" ").map(Number);
  const arr = list
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return arr[K - 1];
};

console.log(sol(input));
