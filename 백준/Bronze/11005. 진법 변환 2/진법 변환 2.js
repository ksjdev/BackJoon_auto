// https://www.acmicpc.net/problem/11005

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [num, std] = list.split(" ").map(Number);

  return num.toString(std).toUpperCase();
};

console.log(sol(input.shift()));
