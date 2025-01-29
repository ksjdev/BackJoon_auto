// https://www.acmicpc.net/problem/5026

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 일일이 찾으면 오래걸림
  // 일괄적으로 분해해서 NaN만 필터링
  const answer = [];
  list.forEach((val) => {
    const cur = val.split("+").reduce((acc, curr) => +acc + +curr);
    answer.push(isNaN(cur) ? "skipped" : cur);
  });
  return answer.join("\n");
};

console.log(sol(N, input));
