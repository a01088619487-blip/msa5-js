//구조분해 문법
//배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];
let idx1 = arr[0];
let idx2 = arr[1];
let idx3 = arr[2];
let idx4 = arr[3];
let idx5 = arr[4];

let [i1, i2, i3, i4, i5] = arr;

// console.log(i3);

//-------------------
// 객체쪽에서 쓰는법
const uear = {
  name: "홍길동",
  age: 20,
  gender: "M",
  daar: "대구광역시",
  info: {
    board: 1,
  },
};
const { name: userName, age, addr2 = "없음" } = uear;
// const{내가 가져오고싶은것만} 넣으면됨
// addr2를 없음이라는 객체를 채워놓고싶을때
//console.log(userName, age, addr2);

// 기본값을 재대로햇을때? 파라미터의 디폴트 셋팅 코드?
// function test(num = -999) {
//   console.log(num);
// }
// test(1);
// // NaN:숫자가 없다!
