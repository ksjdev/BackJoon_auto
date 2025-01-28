// https://www.acmicpc.net/problem/15876

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 수학적이지 않은 방법으로는 단순히 이진수 쭉 나열해놓고 범위에서 해주면 됌
  // k,n이 최대 100이라 가능할듯?
  // 그런데 수학적인 방법이 있을 것 같음.
  const answer = [];
  let str = "";
  for (let i = 0; i < 90; i++) {
    str += i.toString(2);
  }
  for (let j = 0; j < 5; j++) {
    answer.push(str[list[0] * j + list[1] - 1]);
  }
  return answer.join(" ");
};

console.log(sol(input.shift().split(" ").map(Number)));
