// https://www.acmicpc.net/problem/24263

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  let cnt = 0;
  const MenOfPassion = (A, n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      cnt++;
      sum += A[i];
    }
    return sum;
  };
  MenOfPassion([], num);
  return cnt + "\n" + 1;
};

console.log(sol(input.shift()));
