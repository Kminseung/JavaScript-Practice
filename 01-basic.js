// 한줄 주석
/*
    여러 줄 주석: C, Java 등과 유사
*/

// 내장 객체 console : 콘솔에 출력하는 객체
console.info("정보 메시지 출력");
console.debug("디버그 메시지 출력");
console.warn("경고 메세지");
console.error("에러 메시지");

console.log("가장 일반적인 로그 메시지");

// 내용을 연속으로 출력할 때는 ,(콤마) 로 구분
console.log("String", 2021);

// 객체의 속성, 메서드에 접근할 때는 . 으로 접근
console.log(Math.PI);
console.log(Math.max(1, 3, 2, 5, 4));
console.log("-------------");

// var, let, const
var testVar = 2021; // var : ES6 이전 방식 -> WEB에서는 아직 사용

// ES6 이후
let testLet = "let";    // let 재할당 가능 변수
const testConst = "const";  // const 재할당 불가 변수 - 상수처럼 사용
// 선언과 동시에 값을 할당해야 함

console.log(testVar, testLet, testConst);

testVar = "var changed";
testLet = "let changed";
// testConst = "const changed"; -> Error : const는 재할당 불가
// ES6가 지원되는 환경에서는 먼저 const로 할 수 있는지 먼저 생각
//      -> 값이 바뀌는 것이 자연스럽다고 생각하면 let

console.log(testVar, testLet, testConst);

// 자바스크립트는 동적 타이핑 언어
// 변수 선언 시 데이터 타입이 정해지지 않고
// 데이터가 할당될 때 변수 타입이 결정됨
let v = "This is String";
// 데이터 타입의 확인 -> typeof
// 인터프리터 방식이기에 실행시에만 오류 확인이 가능 -> 주의할 것
console.log(v, " -> ", typeof(v));

v = 2021;
console.log(v, " -> ", typeof(v));