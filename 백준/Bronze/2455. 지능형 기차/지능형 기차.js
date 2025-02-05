// https://www.acmicpc.net/problem/2455

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let max = -1;
  let cur = 0;
  list.forEach((val) => {
    const [내린사람, 탄사람] = val.split(" ").map(Number);
    cur = cur + 탄사람 - 내린사람;
    if (max < cur) {
      max = cur;
    }
  });
  return max;
};

console.log(sol(input));
