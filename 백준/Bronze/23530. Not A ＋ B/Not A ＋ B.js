// https://www.acmicpc.net/problem/23530

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const answer = [];
  const std_c = 50;
  list.forEach((val) => {
    const cur = +val.split(" ").reduce((acc, cur) => acc + cur);
    answer.push(cur > std_c ? 1 : cur);
  });
  return answer.join("\n");
};

console.log(sol(N, input));
