// https://www.acmicpc.net/problem/2145

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (str) => {
  str.pop();
  const answer = [];
  str.forEach((val) => {
    let cur = val
      .split("")
      .reduce((acc, cur) => acc + +cur, 0)
      .toString();

    while (1) {
      if (cur.length === 1) break;
      cur = cur
        .split("")
        .reduce((acc, cur) => acc + +cur, 0)
        .toString();
    }
    answer.push(cur);
  });
  return answer.join("\n");
};

console.log(sol(input));
