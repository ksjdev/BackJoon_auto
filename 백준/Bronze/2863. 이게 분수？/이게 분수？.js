// https://www.acmicpc.net/problem/2863

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  // 구현
  const [a, b] = list.shift().split(" ").map(Number);
  const [c, d] = list.shift().split(" ").map(Number);
  let max = 0,
    n;
  for (i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        x = a / c + b / d;
        break;
      case 1:
        x = c / d + a / b;
        break;
      case 2:
        x = d / b + c / a;
        break;
      case 3:
        x = b / a + d / c;
        break;
    }
    if (max < x) {
      (max = x), (n = i);
    }
  }
  return n;
};

console.log(sol(input));
