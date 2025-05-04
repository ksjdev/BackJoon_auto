// https://www.acmicpc.net/problem/28249

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const obj = {
    Poblano: 1500,
    Mirasol: 6000,
    Serrano: 15500,
    Cayenne: 40000,
    Thai: 75000,
    Habanero: 125000,
  };
  let answer = 0;
  list.forEach((val) => {
    answer += obj[val];
  });
  return answer;
};

console.log(sol(N, input));
