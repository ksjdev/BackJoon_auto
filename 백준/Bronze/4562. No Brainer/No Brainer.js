// https://www.acmicpc.net/problem/4562

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const answer = [];
  list.forEach((val) => {
    const [x, y] = val.split(" ").map(Number);
    if (x >= y) {
      answer.push("MMM BRAINS");
    } else {
      answer.push("NO BRAINS");
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
