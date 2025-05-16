// https://www.acmicpc.net/problem/26057

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

// 통에 담긴 우유는 총 L리터입니다.
// 각 양동이에서 1초당 통으로 가는 우유의 양은 1리터이고, 우유를 붓는 소리가 T초 동안 들렸습니다.
// 승자는 패자보다 우유를 몇 리터 더 짰는지 출력하세요.

const sol = (list) => {
  const [L, T] = list.map(Number);
  return T * 2 - L;
};

console.log(sol(input));
