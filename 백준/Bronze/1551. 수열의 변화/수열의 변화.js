// https://www.acmicpc.net/problem/1075

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [N, K] = list.shift().split(" ").map(Number);
  let cur = list.shift().split(",").map(Number);
  for (let i = 0; i < K; i++) {
    for (let j = cur.length - 1; j >= 0; j--) {
      cur[j] = cur[j] - cur[j - 1];
    }
    cur.splice(0, 1);
  }
  return cur.join(",");
};

console.log(sol(input));
