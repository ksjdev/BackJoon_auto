// https://www.acmicpc.net/problem/16673

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const [C, K, P] = list.shift().split(" ").map(Number);
  let answer = 0;
  for (let i = 1; i <= C; i++) {
    answer += K * i + P * i ** 2;
  }
  return answer;
};

console.log(sol(input));
