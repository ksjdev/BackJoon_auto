// https://www.acmicpc.net/problem/32369

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  let good_onion = 1,
    bad_onion = 1;
  const [N, A, B] = list.shift().split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    good_onion += A;
    bad_onion += B;
    if (good_onion < bad_onion) {
      let tmp = good_onion;
      good_onion = bad_onion;
      bad_onion = tmp;
    } else if (good_onion === bad_onion) {
      bad_onion--;
    }
  }
  return `${good_onion} ${bad_onion}`;
};

console.log(sol(input));
