// https://www.acmicpc.net/problem/10829

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (num) => {
  let answer = "";
  const recursive = (v) => {
    let temp = 0n;
    if (v === 0n) return 0;

    temp = v % 2n;
    v /= 2n;
    recursive(v);
    answer += `${temp}`;
  };
  recursive(num);
  return answer;
};

console.log(sol(BigInt(input.shift())));
