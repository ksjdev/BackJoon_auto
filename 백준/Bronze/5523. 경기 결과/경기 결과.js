// https://www.acmicpc.net/problem/5523

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  let A = 0,
    B = 0;
  list.forEach((val) => {
    const [aNum, bNum] = val.split(" ").map(Number);
    if (aNum > bNum) {
      A++;
    } else if (aNum < bNum) {
      B++;
    }
  });
  return A + " " + B;
};

console.log(sol(N, input));
