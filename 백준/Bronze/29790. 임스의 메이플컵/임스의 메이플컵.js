// https://www.acmicpc.net/problem/29790

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [solvedProblem, unionTotalLevel, maxLevel] = list.split(" ").map(Number);

  const answer = {
    all: "Very Good",
    onlyBaekJoon: "Good",
    none: "Bad",
  };

  if (solvedProblem >= 1000 && (unionTotalLevel >= 8000 || maxLevel >= 260)) {
    return answer.all;
  } else if (solvedProblem >= 1000 && (unionTotalLevel < 8000 || maxLevel < 260)) {
    return answer.onlyBaekJoon;
  }
  return answer.none;
};

console.log(sol(input.shift()));
