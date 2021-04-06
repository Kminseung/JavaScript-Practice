// 배열의 생성 방법 1. Array 객체 이용
const v1 = new Array(10);
const v2 = new Array();
const v3 = new Array(1, "JavaScrtpy", true);

// 길이 측정 가능
console.log(v1.length, v2.length, v3.length);

// 배열의 생성 방법 2. [] 리터럴 이용 (추천)
const v4 = [];
const colors = ['red', 'green', 'blue', 'yellow'];

// 배열의 타입 체크
console.log("타입 체크:", typeof v4, typeof colors);
// 배열 타입을 체크 추천
console.log("배열 체크:", Array.isArray(v4), Array.isArray(colors));

// 배열을 기본 값으로 채우기 .fill()
const v5 = new Array(10).fill(1);
console.log("v5:", v5);
v5.fill('change');
console.log("v5:", v5);

// 객체와 배열의 관계
// 객체의 속성들도 배열 인덱스처럼 접근
const person = {
    name: "홍길동",
    age: 28
};
console.log("속성 접근:", person.name, person.age);
console.log("속성 접근:", person['name'], person['age']);

// 자바스크립트 배열은 인덱스를 엄격하게 체크하지 않음
const arr = [];
console.log("Length of arr:", arr.length);
arr[10] = 2021;     // 인덱스 범위를 벗어난 접근 -> ok
console.log("Length of arr:", arr.length);
console.log("arr:", arr);

// 배열 합치기 : concat
const veges = ['배추', '무', '쪽파'];
const sources = ['소금', '고춧가루', '새우젓'];
const ingr = veges.concat(sources); // veges 배열에 sources 배열 연결하여 새 배열 생성
console.log("CONCAT:", veges, sources, ingr);

// 배열요소를 문자열로 합침 : join
console.log("JOIN:", ingr, '=>', ingr.join(", "));

//push, pop -> Stack(LIFO) 처럼 활용 가능
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("STACK:", fruits);
fruits.push("Kiwi");
console.log("STACK:", fruits);
console.log("POP:", fruits.pop());
console.log("POP:", fruits.pop());
console.log("STACK:", fruits);

// push, shift -> QUEUE(FIFO) 처럼 활용 가능
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());
console.log("QUEUE:", fruits);

// splice: 요소의 삭제와 추가
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);

// 인수가 1개 - 해당 인덱스부터 끝까지 추출 후 삭제
console.log("SPLICE(2):", fruits.splice(2));
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
// 인수가 2개 - 시작인덱스, 갯수 -> 추출 후 삭제
console.log("SPLICE(2, 1):", fruits.splice(2, 1));
console.log("원본:", fruits);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
// 인수가 3개 이상 - 시작 인덱스, 갯수, 추가할 아이템들
console.log("SPLICE(2, 1, items...):", fruits.splice(2, 1, "Kiwi", "Melon"));
console.log("원본:", fruits);

// reverse, slice
console.log("원본:", fruits);
fruits.reverse();       // 순서 뒤집기
console.log("REVERSE:", fruits);

let slices = fruits.slice(1, 2);
console.log("SLICE(1, 2):", slices);
console.log("원본:", fruits);

// sort
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("원본:", fruits);
fruits.sort()       // 기본적으로 오름차순 정렬
console.log("ASC SORT:", fruits);

// 내림차순 혹은 사용자 정의 기준으로 정렬 -> 정렬 기준 함수 전달
fruits.sort(function(v1, v2) {
    /* return 값
    0 : 두 값은 같은 순번
    음수 : v1이 먼저
    양수 : v2가 먼저
    */
    // 내림 차순 정렬
    if(v1 == v2) return 0;
    if(v1 < v2) return 1;
    if(v1 > v2) return -1;
});
console.log("DESC SORT:", fruits);

// split (String의 메서드): 문자열 특정 구분자를 기준으로 분리 배열로 반환
const str = "JavaScript is something than other languages."
let chunks = str.split(" ");

console.log("SPLIT:", chunks);

for(let i=0; i<chunks.length; i++) {
    console.log("CHUNKS:", chunks[i]);
}