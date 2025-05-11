// https://www.acmicpc.net/problem/26068

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  let answer = 0;
  list.forEach((val) => {
    const [_, num] = val.split("-");

    if (+num < 91) {
      answer++;
    }
  });
  return answer;
};

console.log(sol(N, input));
