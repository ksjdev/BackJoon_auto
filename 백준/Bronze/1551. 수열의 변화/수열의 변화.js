// https://www.acmicpc.net/problem/1551

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const [N, K] = list.shift().split(" ").map(Number);
  let cur = list.shift().split(",").map(Number);
  let temp = [];
  for (let i = 0; i < K; i++) {
    for (let j = 0; j < cur.length - 1; j++) {
      temp.push(cur[j + 1] - cur[j]);
    }
    cur = temp;
    temp = [];
  }
  return cur.join(",");
};

console.log(sol(input));
