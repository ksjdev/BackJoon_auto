// https://www.acmicpc.net/problem/1871

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const answer = [];

  const Trans = (ch) => ch.charCodeAt(0) - 65;

  for (let i = 0; i < pcs; i++) {
    const line = list[i];
    const [str, numStr] = line.split("-");

    const num1 = Trans(str[0]) * Math.pow(26, 2) + Trans(str[1]) * 26 + Trans(str[2]);

    const num2 = parseInt(numStr, 10);

    const diff = Math.abs(num1 - num2);
    answer.push(diff <= 100 ? "nice" : "not nice");
  }

  return answer.join("\n");
};

console.log(sol(N, input));
