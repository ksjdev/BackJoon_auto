// https://www.acmicpc.net/problem/31859

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (str) => {
  const [N, S] = str.split(" ");
  const obj = {};
  S.split("").forEach((val) => {
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  });
  let parsed = "";
  let cnt = 0;
  Object.entries(obj).forEach((val) => {
    parsed += val[0];
    if (val[1] > 1) {
      cnt += val[1] - 1;
    }
  });
  return "smupc_" + (+N + 1906 + parsed + (cnt + 4)).split("").reverse().join("");
};

console.log(sol(input.shift()));
