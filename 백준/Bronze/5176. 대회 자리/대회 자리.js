// https://www.acmicpc.net/problem/5176

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  while (list.length) {
    const [P, M] = list.shift().split(" ").map(Number);
    const cur = list.splice(0, P);
    const obj = {};
    let no_seat = 0;
    cur.forEach((val) => {
      if (obj[val] === undefined) {
        obj[val] = 1;
      } else {
        no_seat++;
      }
    });
    answer.push(no_seat);
  }
  return answer.join("\n");
};

console.log(sol(N, input));
