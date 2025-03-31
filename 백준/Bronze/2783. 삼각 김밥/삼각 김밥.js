// https://www.acmicpc.net/problem/2783

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const [X, Y] = list.shift().split(" ").map(Number);
  const N = +list.shift();
  let min = (X / Y) * 1000;
  list.forEach((val) => {
    const [a, b] = val.split(" ").map(Number);
    const cur = (a / b) * 1000;
    if (min > cur) {
      min = cur;
    }
  });
  return min.toFixed(2);
};

console.log(sol(input));
