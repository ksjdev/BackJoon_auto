// https://www.acmicpc.net/problem/2864

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [A, B] = list.split(" ");
  return `${+A.replaceAll("6", "5") + +B.replaceAll("6", "5")} ${
    +A.replaceAll("5", "6") + +B.replaceAll("5", "6")
  }`;
};

console.log(sol(input.shift()));
