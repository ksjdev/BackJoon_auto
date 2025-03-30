// https://www.acmicpc.net/problem/2712

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  const units = {
    KgToPound: 2.2046,
    PoundToKg: 0.4536,
    GallonToLitter: 3.7854,
    LitterToGallon: 0.2642,
  };
  const answer = [];
  list.forEach((val) => {
    const [value, unit] = val.split(" ");
    switch (unit) {
      case "kg":
        answer.push((+value * units.KgToPound).toFixed(4) + " lb");
        break;
      case "lb":
        answer.push((+value * units.PoundToKg).toFixed(4) + " kg");
        break;
      case "l":
        answer.push((+value * units.LitterToGallon).toFixed(4) + " g");
        break;
      case "g":
        answer.push((+value * units.GallonToLitter).toFixed(4) + " l");
        break;
    }
  });
  return answer.join("\n");
};

console.log(sol(N, input));
