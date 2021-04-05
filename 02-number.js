// JavaScript의 숫자(Number)
// 산술 연산 가능
let n1 = 5;     // Literal : 소스코드에 직접 입력된 값
let n2 = Number(5);     // Number타입 함수를 이용한 생성

console.log(n1, " == ", n2, " ? ", n1==n2);
console.log(typeof n1, typeof n2);

// Math 내장 객체의 활용 : 각종 수학 상수, 함수들을 가진 내장 객체
console.log(Math.min(1, 5, 3, 2, 6, 7), Math.max(9, 2, 6, 2, 4));

let n3 = 3.567;
// round: 반올림, floor: 버림
console.log(n3, " => ", Math.round(n3), ", ", Math.trunc(n3), ", ", Math.floor(n3));

// 그 외 Number 객체가 가진 상수들
console.log("표현할 수 있는 최대 정수: ", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수: ", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 정수: ", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수: ", Number.MIN_VALUE);

// Casting
// 자바스크립트는 문자열로 전달받은 수치 데이터를 Number로 변환해야하는 경우가 있음
console.log("======================== Casting");
// parseInt, parseFloat 내장 함수 활용
console.log(parseInt("011"));   // 011 -> 10진수 int로 변환
console.log(parseInt("011", 2))     // "011" -> 2진수 진법 변환
console.log(parseInt("123.456"));   // "123.456" -> 정수 변환
console.log(parseFloat("123.465")); // "123.456" -> 실수 변환

// parseInt : float -> int 변환할 때도 사용
console.log(Math.PI, parseInt(Math.PI));

let n4 = parseInt("abcd1324");      // 숫자로 변환할 수 있는 형태
console.log(n4, " is ", typeof(n4));       // NaN -> number이지만 산술연산이 불간으한 수치
console.log(n4 + 10);
// NaN인지 확인하러면 isNaN 함수 활용
console.log(n4, "is NaN?", isNaN(n4));

let result = 1/0;
console.log(result, "is", typeof(result));

// Infinity가 포함된 산술식은 항상 Infinity
console.log(result + 10);

// number 객체가 산술연산이 가능한 데이터인지 확인 isDinite() 함수 사용
console.log(result, "is finite", isFinite(result));