// https://www.acmicpc.net/problem/10214

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const answer = [];

  for (let i = 0; i < pcs; i++) {
    let Y = 0,
      K = 0;
    for (let j = 0; j < 9; j++) {
      const [a, b] = list[i * 9 + j].split(" ").map(Number);
      Y += a;
      K += b;
    }
    answer.push(Y === K ? "Draw" : Y > K ? "Yonsei" : "Korea");
  }

  return answer.join("\n");
};

console.log(sol(N, input));
