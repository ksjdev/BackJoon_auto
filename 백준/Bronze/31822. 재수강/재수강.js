// https://www.acmicpc.net/problem/31822

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const cur = list.shift().split("-")[0].slice(0, 5);
  list.shift();
  return list.reduce((acc, curr) => {
    if (curr.slice(0, 5) === cur) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

console.log(sol(input));
