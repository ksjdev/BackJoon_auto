// https://www.acmicpc.net/problem/5613

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = input.shift();

const sol = (list) => {
  let cur = +list[0];
  for (let i = 1; i < list.length; i++) {
    if (isNaN(list[i])) {
      switch (list[i]) {
        case "+":
          cur += +list[++i];
          break;
        case "-":
          cur -= +list[++i];
          break;
        case "*":
          cur *= +list[++i];
          break;
        case "/":
          cur = parseInt(cur / +list[++i]);
          break;
      }
    }
  }
  return cur;
};

console.log(sol(input));
