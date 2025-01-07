// https://www.acmicpc.net/problem/20053

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 0; i < pcs * 2; i += 2) {
    let max = -Infinity,
      min = Infinity;
    list[i + 1].split(" ").forEach((val) => {
      if (+val > max) {
        max = +val;
      }

      if (+val < min) {
        min = +val;
      }
    });
    answer.push(`${min} ${max}`);
  }
  return answer.join("\n");
};

console.log(sol(N, input));
