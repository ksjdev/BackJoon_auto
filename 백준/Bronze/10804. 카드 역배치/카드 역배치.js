// https://www.acmicpc.net/problem/10804

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const answer = Array.from({ length: 20 }, (_, i) => i + 1);
  list.forEach((val) => {
    const [start, end] = val.split(" ").map(Number);
    const reverse = answer.slice(start - 1, end).reverse();
    answer.splice(start - 1, end - start + 1, ...reverse);
  });
  return answer.join(" ");
};

console.log(sol(input));
