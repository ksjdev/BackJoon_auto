// https://www.acmicpc.net/problem/20540

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let answer = "";
  list.split("").forEach((val, idx) => {
    switch (idx) {
      case 0:
        val === "I" ? (answer += "E") : (answer += "I");
        break;
      case 1:
        val === "N" ? (answer += "S") : (answer += "N");
        break;
      case 2:
        val === "F" ? (answer += "T") : (answer += "F");
        break;
      case 3:
        val === "J" ? (answer += "P") : (answer += "J");
        break;
    }
  });
  return answer;
};

console.log(sol(input.shift()));
