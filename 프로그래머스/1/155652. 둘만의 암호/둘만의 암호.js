function solution(s, skip, index) {
    let answer = ''
    const skip_word = {}
    skip.split('').forEach((val) => {
        skip_word[val] = 1
    })
    s.split('').forEach((val) => {
        // console.log((String.fromCharCode((val).charCodeAt() + index)))
        let cur = val.charCodeAt()
        let cnt = 0
        while(1){
            cur++;
            if(cur > 122){
                cur -= 26
            }
            
            if(!skip_word[String.fromCharCode(cur)]){
                cnt++
            }
            
            if(cnt >= index) break
        }
        answer += String.fromCharCode(cur)
    })
    return answer
}