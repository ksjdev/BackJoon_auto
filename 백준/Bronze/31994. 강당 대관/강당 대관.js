// https://www.acmicpc.net/problem/31994

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  return list.reduce((acc, cur) => {
    const [text, num] = cur.split(" ");
    if (acc.length === 0) {
      return [text, num];
    } else if (+acc[1] < +num) {
      return [text, num];
    }
    return acc;
  }, [])[0];
};

console.log(sol(input));
