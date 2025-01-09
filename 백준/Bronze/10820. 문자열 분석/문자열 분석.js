const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const sol = (list) => {
  // 결과를 저장할 배열
  const answer = [];

  list.forEach((val) => {
    // 빈 문자열이면 건너뜀
    if (val.trim() === "") return;

    // 소문자, 대문자, 숫자, 공백의 개수 초기화
    let 소문자 = 0, 대문자 = 0, 숫자 = 0, 공백 = 0;

    // 각 문자 검사
    for (let char of val) {
      const ascii = char.charCodeAt();
      if (ascii >= 97 && ascii <= 122) { // 소문자
        소문자++;
      } else if (ascii >= 65 && ascii <= 90) { // 대문자
        대문자++;
      } else if (ascii >= 48 && ascii <= 57) { // 숫자
        숫자++;
      } else if (ascii === 32) { // 공백
        공백++;
      }
    }

    // 결과 배열에 추가
    answer.push(`${소문자} ${대문자} ${숫자} ${공백}`);
  });

  // 결과 반환
  return answer.join("\n");
};

// 결과 출력
console.log(sol(input));