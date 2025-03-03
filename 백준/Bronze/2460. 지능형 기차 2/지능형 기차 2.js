// https://www.acmicpc.net/problem/2460

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let answer = -Infinity,
    cur = 0;
  list.forEach((val) => {
    const [off, on] = val.split(" ").map(Number);
    cur += on - off;
    if (answer < cur) {
      answer = cur;
    }
  });
  return answer;
};

console.log(sol(input));
