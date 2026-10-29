// 원시형 (Primitive Type)
let num1 = 1;
let num2 = num1;
num2 = 99;
// console.log(num1, num2);

//참조형 (Reference Type)
// let obj1 = {
//   id: 1,
//   name: "둘리" },
// };
// let obj2 = obj1;
// obj2.name = "홍길동";
// console.log(obj1.name, obj2.name);

// 얕은 복사 (Shallow Copy)
// 객체의 최상위 계층만 값을 복사하고,
// 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
let obj1 = {
  id: 1,
  name: "둘리",
  etc: { addr: "대구", test: { key1: "val1" } },
};
let obj3 = { ...obj1 }; //shallow Copy 완
obj3.name = "또치";
obj3.etc.addr = "서울";
// console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);

//깊은 복사 (Deep Copy)
//객체의 모든 계층의 값을 복사
//제이순(JSON) 방법으로 하면 쉬운방식이다 제인스가?무엇인가? 자바스크립트 객체 표현법이라고하는데
// 우리가 통신을 받는데 이때 사용하는 데이터 포멧 형식중 하나이다.,자바스크린트 객체와 가장 비슷함
//객체   obj1 = {id: 1, name: "둘리",etc: { addr: "대구"}}
//제인순(JSON)    `"{id: 1, name: "둘리",etc: { addr: "대구"}}"`
obj1 = { id: 1, name: "둘리", etc: { addr: "대구" } };
// let obj4 = JSON.stringify(obj1); 이걸 제이순으로 바꾸면
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = "또치";
obj4.etc.addr = "서울";
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);

const obj5 = { id: 2 };
obj5.id = 3;
const num5 = 1;
num5 = 2;
