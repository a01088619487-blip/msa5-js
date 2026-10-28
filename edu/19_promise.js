// 콜백 지옥  >
// setTimeout(() => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//   }, 1000);
// }, 1500);

// 위 콜백 지옥을 회피하기 위해서 프로미스 기반으로 변경
const timer = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (
        str === "A" ||
        str === "B" ||
        str === "C"
        // 참인게 먼저 맨위에 올려야함.
      ) {
        // if(false) 로 해도됨
        resolve({ code: "허용", word: str });
        // 성공버튼으로왓을때 반환하는값
      } else {
        reject(new Error("허용하지 않은 문자가 입력됐다."));
      }
    }, 2000);
  });
};
timer("A") //A가 성공시
  .then((result) => {
    console.log(result.code, result.word); // recolve 일때 실행되는 코드 작성
    return timer("B"); //동기처리를 하기위한 방법 프로미스객체를 만들어서 return함.
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("C");
  })
  .then((result) => {
    console.log(result.code, result.word);
  }) //비동기처리를 동기처리 순서대로 만들고싶으면 then을 계속 생성 프로미스Hell..
  //콜백지옥을 벗어날려고햇는데 이것도 헬인뒈? 시간을 빠르게 할려면 위에 객체에 ms를 추가해 초를 빠르게 하면됨
  //const timer = (str,ms=500) => {
  // }, 500); 하면되고
  //return timer("C",100); 이런식으로 더 빨리 더 늦게든 초를 정할수잇다.

  .catch((error) => {
    console.log(error.message); // reject 일때 실행되는 코드 작성
  })
  .finally(() => {
    console.log("피이널리"); // resolve,recolve 중 하나라도 무조건 실행되는 코드
  });
console.log("외부외부");
