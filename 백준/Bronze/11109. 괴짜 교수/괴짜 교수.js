// https://www.acmicpc.net/problem/11109

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const results = [];
  const T = pcs;

  for (let i = 0; i < T; i++) {
    const [d, n, s, p] = list[i].split(" ").map(Number);
    const serialTime = n * s;
    const parallelTime = d + p * n;

    if (parallelTime === serialTime) {
      results.push("does not matter");
    } else if (parallelTime > serialTime) {
      results.push("do not parallelize");
    } else {
      results.push("parallelize");
    }
  }

  return results.join("\n");
};

console.log(sol(N, input));
