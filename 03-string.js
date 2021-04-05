// JavaScript의 문자열
// 
let s1 = "Modern JavaScript and Java";
let s2 = String("Modern JavaScript and Java");

console.log(s1, s2);
console.log(typeof s1, typeof s2);

console.log("s1 == s2 ?" , s1==s2);

// 문자가 여러개 연결된 타입 : 길이 잡기 가능
console.log("string: ", s1, ", length: ", s1.length);

// 문자열 추출 메서드, 인덱스 이용하여 내용 접근
console.log(s1);
console.log("7th char : ", s1.charAt(7));
// 그 자체로 배열처럼 접근할 수 있음
console.log("7th char : ", s1[7]);
console.log(s1.substr(7, 10));  // 7번부터 10글자
console.log(s1.substr(7));  // 7번부터 끝까지
console.log(s1.substring(7, 17));  // 7번부터 16번까지
console.log(s1.substring(7));   // 7번부터 끝까지

console.log("===================== Search");
console.log("원본:", s1);

let position = s1.indexOf("Java");
console.log("1st search:", position);

// 검색 시작 위치 조정
position += 4;
position = s1.indexOf("Java", position);
console.log("2nd search:", position);

position = s1.indexOf("java");
console.log("없는 키워드 검색:", position); // -1 Not Found
console.log("뒤쪽으로부터의 검색:", s1.lastIndexOf("Script"));

console.log("================ 치환");
console.log("replace JavaScript -> JS:", s1.replace("JavaScript", "JS"));
console.log("원본:", s1);
// String은 불변 객체 -> 내용을 바꿀 수는 없음 -> 새로운 객체가 생성되어 반환

console.log("TRIM:", "          Hello, JavaScript           ".trim());

// String 추가 내용
// 이스케이프 문자: 특수문자를 부여할 수 있음
//              \n: 개행
//              \t: 탭
//              \': 작은 따옴표
//              \": 큰 따옴표
//              \`: 백틱(ES6)

// JavaScript의 문자열은 "" or ''
let message = "He said, \"Hello\"";
message = 'He said, \'Hello\'';

// 템플릿 문자열
console.log("====================== Template String");
let temp = 24;
// 현재 실내 온도는 24도 입니다.
// ES5 방식
message = "현재 실내 온도는 " + temp + "도 입니다.";
console.log("ES5 Way:", message);

// ES6 방식
// 백틱(`)dhk ${}로 쉽게 해결 가능
message = `현재 실내 온도는 ${temp}도 입니다.`;
console.log("ES6 Way:", message);

// 여러 줄 문자열을 만들 때
message = "예전에는 여러줄 문자열을 만드는 게\n쉽지 않았아요.";
console.log(message);

message = `하지만 ES6에서는
    아주 손쉽게
    여러 줄 문자열을
만들 수 았습니다.`;
console.log(message);
