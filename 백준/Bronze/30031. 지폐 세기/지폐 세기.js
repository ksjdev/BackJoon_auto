// https://www.acmicpc.net/problem/30031

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const money = {
    136: 1000,
    142: 5000,
    148: 10000,
    154: 50000,
  };
  let answer = 0;
  list.forEach((val) => {
    const [gubun, cnt] = val.split(" ").map(Number);
    answer += money[gubun] * (cnt / 68);
  });
  return answer;
};

console.log(sol(N, input));
