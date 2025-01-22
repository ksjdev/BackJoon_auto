// https://www.acmicpc.net/problem/1100

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  return list.reduce((acc, cur, idx) => {
    return (
      acc +
      cur.split("").reduce((accu, curr, idxx) => {
        if (idx % 2 === 0) {
          if (idxx % 2 === 0 && curr === "F") {
            return accu + 1;
          }
        } else {
          if (idxx % 2 === 1 && curr === "F") {
            return accu + 1;
          }
        }
        return accu;
      }, 0)
    );
  }, 0);
};

console.log(sol(input));
