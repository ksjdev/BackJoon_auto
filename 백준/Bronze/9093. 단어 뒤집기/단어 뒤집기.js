// https://www.acmicpc.net/problem/9093

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  const answer = [];
  list.forEach((val) => {
    answer.push(
      val
        .split(" ")
        .reduce((acc, cur) => [...acc, cur.split("").reverse().join("")], [])
        .join(" ")
    );
  });

  return answer.join("\n");
};

console.log(sol(N, input));
