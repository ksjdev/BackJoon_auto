// https://www.acmicpc.net/problem/29725

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let white = 0,
    black = 0;
  list.forEach((val) => {
    val.split("").forEach((node) => {
      if (node >= "A" && node <= "Z") {
        // 백
        switch (node) {
          case "K":
            white += 0;
            break;
          case "P":
            white += 1;
            break;
          case "N":
            white += 3;
            break;
          case "B":
            white += 3;
            break;
          case "R":
            white += 5;
            break;
          case "Q":
            white += 9;
            break;
        }
      } else if (node >= "a" && node <= "z") {
        // 흑
        switch (node) {
          case "k":
            black -= 0;
            break;
          case "p":
            black -= 1;
            break;
          case "n":
            black -= 3;
            break;
          case "b":
            black -= 3;
            break;
          case "r":
            black -= 5;
            break;
          case "q":
            black -= 9;
            break;
        }
      }
    });
  });
  return white + black;
};

console.log(sol(input));
