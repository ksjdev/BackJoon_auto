// https://www.acmicpc.net/problem/11648

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let num = list;
  let cnt = 0;
  while (num.length !== 1) {
    cnt++;
    num = String(num.split("").reduce((acc, cur) => +acc * +cur, 1));
  }
  return cnt;
};

console.log(sol(input.shift()));
