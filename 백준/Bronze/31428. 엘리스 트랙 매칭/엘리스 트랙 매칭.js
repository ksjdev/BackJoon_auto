// https://www.acmicpc.net/problem/31428

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const obj = {};
  list[0].split(" ").forEach((val) => {
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  });

  return obj[list[1]] === undefined ? 0 : obj[list[1]];
};

console.log(sol(N, input));
