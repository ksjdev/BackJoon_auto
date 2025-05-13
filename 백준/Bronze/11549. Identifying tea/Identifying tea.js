// https://www.acmicpc.net/problem/11549

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  let cnt = 0;
  list[0].split(" ").forEach((val) => {
    if (+val === pcs) {
      cnt++;
    }
  });
  return cnt;
};

console.log(sol(N, input));
