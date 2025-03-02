// https://www.acmicpc.net/problem/5354

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val, idx) => {
    for (let i = 1; i <= +val; i++) {
      let cur = "";
      for (let j = 1; j <= +val; j++) {
        if (i === 1 || i === +val || j === 1 || j === +val) {
          cur += "#";
        } else {
          cur += "J";
        }
      }
      answer.push(cur);
    }
    if (idx < pcs - 1) {
      answer.push("");
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
