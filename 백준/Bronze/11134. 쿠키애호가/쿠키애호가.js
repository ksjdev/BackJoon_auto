// https://www.acmicpc.net/problem/11134

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    const [total, day] = val.split(" ").map(Number);
    answer.push(Math.ceil(total / day));
  });
  return answer.join("\n");
};

console.log(sol(N, input));
