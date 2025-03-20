// https://www.acmicpc.net/problem/3449

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, list) => {
  // 아이디어
  const answer = [];
  for (let i = 0; i < num * 2; i += 2) {
    const a = list[i];
    const b = list[i + 1];
    let sum = 0;
    for (let j = 0; j <= a.length; j++) {
      if (a[j] !== b[j]) {
        sum++;
      }
    }
    answer.push(`Hamming distance is ${sum}.`);
  }
  return answer.join("\n");
};

console.log(sol(N, input));
