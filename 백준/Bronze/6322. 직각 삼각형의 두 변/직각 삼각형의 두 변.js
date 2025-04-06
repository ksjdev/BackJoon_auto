// https://www.acmicpc.net/problem/6322

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  list.pop();
  const answer = [];

  list.forEach((val, idx) => {
    const [a, b, c] = val.split(" ").map(Number);
    let result = `Triangle #${idx + 1}\n`;

    if (a === -1) {
      const aVal = Math.sqrt(c ** 2 - b ** 2);
      result += isNaN(aVal) || aVal === 0 ? "Impossible." : `a = ${aVal.toFixed(3)}`;
    } else if (b === -1) {
      const bVal = Math.sqrt(c ** 2 - a ** 2);
      result += isNaN(bVal) || bVal === 0 ? "Impossible." : `b = ${bVal.toFixed(3)}`;
    } else if (c === -1) {
      const cVal = Math.sqrt(a ** 2 + b ** 2);
      result += isNaN(cVal) || cVal === 0 ? "Impossible." : `c = ${cVal.toFixed(3)}`;
    }

    answer.push(result);
  });

  return answer.join("\n\n");
};

console.log(sol(input));
