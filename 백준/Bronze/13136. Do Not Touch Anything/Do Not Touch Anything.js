// https://www.acmicpc.net/problem/13136

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [R, C, N] = list[0].split(" ").map(Number);
  const x = R % N ? Math.floor(R / N) + 1 : R / N;
  const y = C % N ? Math.floor(C / N) + 1 : C / N;
  return x * y;
};

console.log(sol(input));
