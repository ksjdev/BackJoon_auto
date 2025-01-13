// https://www.acmicpc.net/problem/2947

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 정
  const answer = [];
  const bubble = (arr) => {
    const target = [1, 2, 3, 4, 5];
    let n = arr.length;

    while (JSON.stringify(arr) !== JSON.stringify(target)) {
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          answer.push(arr.join(" "));
        }
      }
    }
  };

  bubble(list.shift().split(" ").map(Number));
  return answer.join("\n");
};

console.log(sol(input));
