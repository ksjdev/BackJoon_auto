// https://www.acmicpc.net/problem/2501

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [N, K] = list[0].split(" ").map(Number);
  let cnt = 0,
    answer = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      cnt++;
    }
    if (cnt === K) {
      answer = i;
      break;
    }
  }
  return answer;
};

console.log(sol(input));
