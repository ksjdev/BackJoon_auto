// https://www.acmicpc.net/problem/3047

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const cur = list
    .shift()
    .split(" ")
    .sort((a, b) => +a - +b);
  const answer = [];
  list
    .shift()
    .split("")
    .forEach((val) => {
      if (val === "C") {
        answer.push(cur[2]);
      } else if (val === "B") {
        answer.push(cur[1]);
      } else if (val === "A") {
        answer.push(cur[0]);
      }
    });
  return answer.join(" ");
};

console.log(sol(input));
