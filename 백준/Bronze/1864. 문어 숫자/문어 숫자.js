// https://www.acmicpc.net/problem/1864

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const symbol = {
    "-": 0,
    "\\": 1,
    "(": 2,
    "@": 3,
    "?": 4,
    ">": 5,
    "&": 6,
    "%": 7,
    "/": -1,
  };

  list.pop();

  const answer = [];
  list.forEach((val) => {
    let sum = 0;
    val
      .split("")
      .reverse()
      .forEach((cur, idx) => {
        sum += symbol[cur] * 8 ** idx;
      });
    answer.push(sum);
  });

  return answer.join("\n");
};

console.log(sol(input));
