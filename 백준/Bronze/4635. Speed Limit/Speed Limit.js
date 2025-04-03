// https://www.acmicpc.net/problem/4635

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  const answer = [];
  for (let i = 0; i < list.length - 1; i++) {
    const cur = +list[i];
    let sum = 0,
      prev = 0;
    for (let j = i + 1; j < i + cur + 1; j++) {
      const [speed, time] = list[j].split(" ").map(Number);
      sum += speed * (time - prev);
      prev = time;
    }
    answer.push(`${sum} miles`);
    i += cur;
  }
  return answer.join("\n");
};

console.log(sol(input));
