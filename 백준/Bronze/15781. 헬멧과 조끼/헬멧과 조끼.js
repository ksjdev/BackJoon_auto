// https://www.acmicpc.net/problem/15781

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  return Math.max(...list[1].split(" ").map(Number)) + Math.max(...list[2].split(" ").map(Number));
};

console.log(sol(input));
