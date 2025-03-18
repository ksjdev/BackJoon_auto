// https://www.acmicpc.net/problem/20833

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    answer += i ** 3;
  }
  return answer;
};

console.log(sol(N));
