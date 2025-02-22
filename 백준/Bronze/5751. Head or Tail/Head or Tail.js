// https://www.acmicpc.net/problem/5751

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  list.pop();
  const answer = [];
  for (let i = 0; i < list.length; i += 2) {
    let Mary = 0,
      John = 0;
    list[i + 1].split(" ").forEach((val) => {
      if (val == 0) {
        Mary++;
      } else {
        John++;
      }
    });
    answer.push(`Mary won ${Mary} times and John won ${John} times`);
  }
  return answer.join("\n");
};

console.log(sol(input));
