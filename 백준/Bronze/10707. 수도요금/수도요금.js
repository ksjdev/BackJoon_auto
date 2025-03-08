// https://www.acmicpc.net/problem/10707

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const N = +input.shift();

const sol = (list) => {
  // 아이디어
  const [
    X_liter_per_pay,
    Y_basic_pay,
    Y_maximum_usage,
    Y_litter_per_additional_charge,
    P_total_JOI,
  ] = list.map(Number);

  const Y_cal = () => {
    if (P_total_JOI > Y_maximum_usage) {
      return (P_total_JOI - Y_maximum_usage) * Y_litter_per_additional_charge + Y_basic_pay;
    }
    return Y_basic_pay;
  };

  return Math.min(P_total_JOI * X_liter_per_pay, Y_cal());
};

console.log(sol(input));
