// https://www.acmicpc.net/problem/5361

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  const obj = {
    A: 350.34,
    B: 230.9,
    C: 190.55,
    D: 125.3,
    E: 180.9,
  };
  const answer = [];
  list.forEach((val) => {
    const [A, B, C, D, E] = val.split(" ").map(Number);
    answer.push(
      `$${(A * obj["A"] + B * obj["B"] + C * obj["C"] + D * obj["D"] + E * obj["E"]).toFixed(2, 0)}`
    );
  });
  return answer.join("\n");
};

console.log(sol(N, input));
