// https://www.acmicpc.net/problem/4806

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
let input = fs.readFileSync(filePath).toString();

const sol = (list) => list.split("").reduce((acc, cur) => (cur === "\n" ? acc + 1 : acc), 0);
console.log(sol(input));