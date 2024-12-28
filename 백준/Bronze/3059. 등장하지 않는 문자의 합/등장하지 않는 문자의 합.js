// https://www.acmicpc.net/problem/3059

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    let len = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    val.split("").forEach((token) => {
      len = len.replace(token, "");
    });
    answer.push(len.split("").reduce((acc, cur) => acc + cur.charCodeAt(), 0));
  });
  return answer.join("\n");
};

console.log(sol(N, input));
