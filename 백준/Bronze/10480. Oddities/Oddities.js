// https://www.acmicpc.net/problem/10480

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const answer = [];
  list.forEach((val) => {
    if (Number.isInteger(+val / 2)) {
      answer.push(`${val} is even`);
    } else {
      answer.push(`${val} is odd`);
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
