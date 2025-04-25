// https://www.acmicpc.net/problem/32278

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// N은 BigInt로 바로 변환
const N = BigInt(input.shift());

const sol = (number) => {
  const SHORT_MIN = BigInt(-32768);
  const SHORT_MAX = BigInt(32767);

  const INT_MIN = BigInt(-2147483648);
  const INT_MAX = BigInt(2147483647);

  const LONGLONG_MIN = BigInt("-9223372036854775808");
  const LONGLONG_MAX = BigInt("9223372036854775807");

  if (number >= SHORT_MIN && number <= SHORT_MAX) {
    return "short";
  } else if (number >= INT_MIN && number <= INT_MAX) {
    return "int";
  } else if (number >= LONGLONG_MIN && number <= LONGLONG_MAX) {
    return "long long";
  } else {
    return "too big";
  }
};

console.log(sol(N));
