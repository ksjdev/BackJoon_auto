// https://www.acmicpc.net/problem/7595

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  return list
    .reduce((acc, cur) => {
      const curr = [];
      for (let i = 1; i <= cur; i++) {
        curr.push("*".repeat(i));
      }
      return [...acc, ...curr];
    }, [])
    .join("\n");
};

console.log(sol(input.map(Number)));
