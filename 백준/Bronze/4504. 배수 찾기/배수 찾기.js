// https://www.acmicpc.net/problem/4504

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, list) => {
  const answer = [];
  list.pop();
  list.forEach((val) => {
    if (+val % num === 0) {
      answer.push(`${val} is a multiple of ${num}.`);
    } else {
      answer.push(`${val} is NOT a multiple of ${num}.`);
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
