// https://www.acmicpc.net/problem/13235

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (word) => {
  // 아이디어
  return word.slice(0, word.length / 2) ===
    word
      .slice(Math.ceil(word.length / 2))
      .split("")
      .reverse()
      .join("")
    ? "true"
    : "false";
};

console.log(sol(input.shift()));
