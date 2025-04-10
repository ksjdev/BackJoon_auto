// https://www.acmicpc.net/problem/14912

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (str) => {
  const [n, d] = str.split(" ").map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    i.toString()
      .split("")
      .forEach((val) => {
        if (val == d) {
          cnt++;
        }
      });
  }
  return cnt;
};

console.log(sol(input.shift()));
