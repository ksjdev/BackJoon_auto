// https://www.acmicpc.net/problem/32941

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [T, X] = list.shift().split(" ").map(Number);
  const N = +list.shift();

  let status = true;
  for (let i = 0; i < N * 2; i += 2) {
    if (!list[i + 1].split(" ").includes(String(X))) {
      status = false;
      break;
    }
  }

  return status ? "YES" : "NO";
};

console.log(sol(input));
