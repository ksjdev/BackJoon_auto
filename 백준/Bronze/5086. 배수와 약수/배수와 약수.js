// https://www.acmicpc.net/problem/5086

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const answer = [];
  list.pop();
  const textobj = {
    factor: "factor",
    multiple: "multiple",
    neither: "neither",
  };
  list.forEach((val) => {
    const [A, B] = val.split(" ").map(Number);
    if (B % A === 0) {
      answer.push(textobj.factor);
    } else if (A % B === 0) {
      answer.push(textobj.multiple);
    } else {
      answer.push(textobj.neither);
    }
  });
  return answer.join("\n");
};

console.log(sol(input));
