const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); //기존 이벤트 취소

  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
  // target= form태크 칭함. page = 첫번째 input상자 , limit= 두번째 input상자

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`; //백틱

  try {
    const response = await axios.get(url);
    console.log(response);

    //https에서 스테이더스에서 오류가 낫느냐 http 메소드로..? 텍스트느 이미지를 받아오는(get:조회기능만잇음,delete등등 잇다)
    //   <div class="card-container">
    //    <div class="card">
    //     <div class="card-img"></div>
    //       <p class="card-text">5: 초코라떼</p>
    //    </div>
    //이걸 로 통해서 만들거임 카드, 카드이미지,카드텍스트 만들어야하며
    //이걸 카드컨네이너에 넣어야함

    // 카드를 넣을 컨테이너 요소
    const cardContainer = document.querySelector(".card-container");
    // 똑같은 작업이 반복될시 for문같은 'loop'처리를 한다 ->for Each
    cardContainer.textContent = "";

    response.data.forEach((item) => {
      // 2. card-img 요소 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      // 인라인 스타일 넣는법
      cardImg.style.backgroundImage = `url('${item.download_url}')`;
      // 이걸로 통하여 CSS에 있는
      // card-img {background-image: url("../imgs/img.jpg");} 는 필요가 없어짐!

      // 3. card-text 요소 생성
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      // 카드 속성명 넣는법?
      cardText.textContent = `${item.id}: ${item.author}`;

      // card 요소 를 마지막에 두면좋다!
      const card = document.createElement("div");
      card.classList.add("card");
      card.appendChild(cardImg);
      card.appendChild(cardText);
      //  or 애드어트릭?..믱?  "card"만 넣으면 안됨! 이유가
      // 기존에 있던걸 가져오면.. 00속성이기때문에 문자열을 덮어버릴수이있으니
      // 내가 넣고자하는 기존것도 같이 넣어야 안사라진다 우.뭔말이야..

      // 4.card-container'에 생성한 요소를 담는다.
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});
