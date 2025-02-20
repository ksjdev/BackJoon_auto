// https://www.acmicpc.net/problem/2721

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    let sum = 0;
    for (let i = 1; i <= +val; i++) {
      sum += i * (((i + 1) * (i + 2)) / 2);
    }
    answer.push(sum);
  });
  return answer.join("\n");
};

console.log(sol(N, input));
