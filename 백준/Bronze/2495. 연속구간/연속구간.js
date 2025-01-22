// https://www.acmicpc.net/problem/2495

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    const cur = val.split("");
    let same = 1,
      max = 1;
    cur.forEach((node, idx) => {
      if (cur[idx - 1] === cur[idx]) {
        same++;
        if (max < same) {
          max = same;
        }
      } else {
        same = 1;
      }
    });
    answer.push(max);
  });
  return answer.join("\n");
};

console.log(sol(input));
