// 에러(error) 와 예외(Excption)가있음
// 에러: 소스코드에 의해서 수습될수없는 심각한 오류
// 예외: 소스코드에 의해서 수습될 수 있는 다소 미약한 오류
// console.log("Hello,world!");

// console.log(1);
// console.log(2);
// // console.log(Text.name);
// try {
//   // 내가 실행할 처리를 작성 하는공간.
//   console.log("try문 시작");
//   console.log(test.name);
//   console.log("try문 끝");
// } catch (error) {
//   //try문 안에서 에러나 예외가 발생했을 때 처리할 로직
//   console.log("Error 발생");
//   console.log(error.name); //발생한 에러명
//   console.log(error.message); //발생한 에러 내용
//   console.log(error.stack); //발생한 에러 상세 정보
//   //   다 확인했으면 콘솔로그는 최대한 다지우는게 좋다 프로그램 만들때..
// }
// // catch(e)로 해도되지만 event랑 햇갈리므로 error라고 적자
// console.log(3);
// console.log(4);
// console.log(5);

// try {
//   console.log(1);

//   // 강제 예외 발생 시키기
//   throw new Error("강제로 예외 발생 시켰다.");
//   // 새로운 객체를 생성할때 new라고 쓴다, 타입스크립트 란 무엇인가?

//   console.log(2);
// } catch (error) {
//   console.log(error.stack);
// }

// Finally[마지막]- 예외여부와 상관없이 무조건 실행되는 로직작성을 위해 사용
// try {
//   console.log(test);
//   console.log(1);
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("finally");
// } //일정하게 처리를 해야할때 사용한다..

// 에러를 상세하게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을 때
// - instanceof 연산자를 사용해서 예외를 구체적으로 처리
try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    // 체크하고싶은 객체 / instabceof(내가 사용할수있는 생성된 객체)/ SyntaxError or ReferenceError
    //새로만든 new키워드로 인하여 새로운객체를 생성하고 메모리에 올라가있는것이 'instance'라고 불린다
    //[자세한건 자바할때 알려주신다함]
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("참조 에러");
  } else {
    console.log("에러 에러!");
  }
}
