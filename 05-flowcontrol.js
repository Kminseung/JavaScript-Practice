// C, Java와 거의 비슷한 조건 분기, 반복문을 사용

// 연습문제 1:
// for 문과 while문을 이용, 구구단 출력
for(let i=2; i<10; i++) {
    for(let j=1; j<10; j++) {
        console.log(i, "*", j, "=", i*j);
    }
    console.log("\n");
}

let i = 2;
while(i != 10) {
    let j = 1;
    while(j != 10) {
        console.log(i, "*", j, "=", i*j);
        j++;
    }
    console.log("\n");
    i++;
}
// 연습문제 2:
// for문과 while문을 이용, 역피라미드 별 찍기
for(let i=5; i>0; i--) {
    let star = "";
    for(let j=1; j<i+1; j++) {
        star = star + "*";
    }
    console.log(star);
}

console.log("\n");

i = 5;
while(i != 0) {
    let j = 1;    
    star = "";
    while(j != i+1) {
        star = star + "*";
        j++;
    }
    console.log(star);
    i--;
}