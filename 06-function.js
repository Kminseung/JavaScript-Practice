// 함수 선언문 : function
function sum(a, b) {    // 매개변수 a, b 받아서
    return a + b;       // 결과를 반환 -> return문을 만나면 함수 종료
};

console.log(sum(10, 20));

// 함수 표현식 : 이름 없는 함수 -> 익명 함수
// 함수는 객체이므로 변수로 할당될 수 있고
// 다른 함수의 매개변수로 전달될 수 있음
const asum = function(a, b) {
    return a + b;
};

console.log(typeof asum, asum(10, 20));

// 익명 함수의 활용 1. 즉시 실행 함수 -> 주로 페이지 초기화 시 유용하게 사용
let initText;
(function(number) {
    let textList = ["홀수", "짝수"];    // 함수 내부에서만 사용하고 버릴 값
    if(number %2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`매개변수 ${number}를 이용해서 즉시 실행.`);
})(5);      // 즉시 실행
// console.log("textList:", textList);  // Error
// textList 외부에서 참조가 불가
console.log("초기화 진행 후 initText:", initText);

// 함수 매개변수의 이해
// 자바스크립트에서는  매개변수 선언하지 않아도 전달되는 모든 인수가 argument배열로 전달됨
function getNumberTotal() { // 매개변수 선언하지 않음
    // console.log("매개변수:", arguments);
    // 전달받은 모든 메개변수를 합산 출력
    let result = 0;

    for(let i=0; i<arguments.length; i++) {
        // 전달받은 매개변수가 산술연산 가능?
        if(typeof arguments[i] == "number") {
            result += arguments[i];
        }
    }
    return result;
};

console.log("getNumberTotal:", getNumberTotal(1, 2, 3, 4, 5));
console.log("getNumberTotal:", getNumberTotal(1, 2, "3", 4, 5));

// 자바스크립트의 함수는 객체 : 변수에 참조되거나 다른 함수의 매개변수로 전달 가능
function calcUsingCallback(val1, val2, func) {
    // 내부 실행 로직을 외부에서 전달받음
    if(typeof func == "function") {     // 매개변수 func가 함수면
        func(val1, val2);    // 외부로부터 전달받은 함수를 내부에서 거꾸로 실행 -> callback
    }
};

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});

calcUsingCallback(3, 4, function(v1, v2) {
    // 함수의 매개변수로 전달되서 타 함수의 내부에서 거꾸로 호출
    // callback 함수
    console.log(v1 * v2);
});

// ES6에서 등장한 함수 : 화살표 함수 =>
console.log("======================= 화살표 함수");
const f1 = function() {
    return "Hello";
};
console.log(f1());

const f1Arrow = () => "Hello";      // 매개변수가 없는 화살표 함수
console.log(f1Arrow());

const f2 = function(name) {
    return "Hello, " + name;
};
console.log(f2("홀길동"));

const f2Arrow = (name) => "Hello, " + name;
console.log(f2Arrow("Kminseung"));

const f3 = function(a, b) {
    return a + b;
};
console.log(f3(3, 7));

const f3Arrow = (a, b) => a + b;
console.log(f3Arrow(3, 7));

// 화살표 함수는 함수에 콜백함수를 전달할 때 유용
calcUsingCallback(3, 4, (a, b) => console.log(a+b));