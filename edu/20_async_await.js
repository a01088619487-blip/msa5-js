const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않은 문자가 입력됐다."));
      }
    }, ms);
  });
};

const process = async () => {
  //  앞에 async를 적어야 await를 사용가능
  try {
    const result1 = await timer("A");
    console.log(result1.code, result1.word);

    const result2 = await timer("B");
    console.log(result2.code, result2.word);

    const result3 = await timer("D");
    console.log(result3.code, result3.word);
  } catch (error) {
    console.log(error.message);
  }
};

process();
