// https://www.acmicpc.net/problem/27160

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  let answer = "NO";
  const cardList = {};
  list.forEach((val) => {
    const [name, num] = val.split(" ");
    if (cardList[name] === undefined) {
      cardList[name] = +num;
    } else {
      cardList[name] += +num;
    }
  });
  const arr = Object.entries(cardList);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == 5) {
      answer = "YES";
      break;
    }
  }
  return answer;
};

console.log(sol(N, input));
