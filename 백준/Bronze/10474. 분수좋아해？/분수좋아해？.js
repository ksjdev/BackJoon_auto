// https://www.acmicpc.net/problem/10474

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  list.pop();
  const answer = [];
  list.forEach((val) => {
    const [son, mom] = val.split(" ").map(Number);
    answer.push(`${Math.floor(son / mom)} ${son % mom} / ${mom}`);
  });
  return answer.join("\n");
};

console.log(sol(input));
