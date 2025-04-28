// https://www.acmicpc.net/problem/1350

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const cur = list[0].split(" ").map(BigInt);
  const std = BigInt(list[1]);
  let sum = 0n;
  cur.forEach((val) => {
    if (val !== 0n) {
      const clusters = (val + std - 1n) / std;
      sum += clusters * std;
    }
  });
  return sum.toString();
};

console.log(sol(N, input));
