const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  let result = [];

  for (let i = 0; i < pcs; i++) {
    const [N, K] = list[i * 2].split(" ").map(Number);
    const candy = list[i * 2 + 1].split(" ").map(Number);
    let answer = 0;

    for (let j = 0; j < candy.length; j++) {
      answer += Math.floor(candy[j] / K);
    }

    result.push(answer);
  }

  return result.join("\n");
};

console.log(sol(N, input));
