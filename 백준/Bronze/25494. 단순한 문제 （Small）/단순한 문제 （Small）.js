// https://www.acmicpc.net/problem/25494

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    const [a, b, c] = val.split(" ").map(Number);
    let count = 0;
    for (let x = 1; x <= a; x++) {
      for (let y = 1; y <= b; y++) {
        for (let z = 1; z <= c; z++) {
          const modXY = x % y;
          const modYZ = y % z;
          const modZX = z % x;

          if (modXY === modYZ && modYZ === modZX) {
            count++;
          }
        }
      }
    }
    answer.push(count);
  });
  return answer.join("\n");
};

console.log(sol(N, input));
