// https://www.acmicpc.net/problem/33612

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  const startYear = 2024;
  const startMonth = 8;
  return `${
    startYear +
    ((startMonth + num * 7 - 7) % 12 === 0
      ? Math.floor((startMonth + num * 7 - 7) / 12) - 1
      : Math.floor((startMonth + num * 7 - 7) / 12))
  } ${(startMonth + num * 7 - 7) % 12 === 0 ? 12 : (startMonth + num * 7 - 7) % 12}`;
  // switch (num) {
  //   case 1:
  //     return `2024 8`;
  //   case 2:
  //     return `2025 3`;
  //   case 3:
  //     return `2025 10`;
  //   case 4:
  //     return `2026 5`;
  //   case 5:
  //     return `2026 12`;
  // }
};

console.log(sol(N));
