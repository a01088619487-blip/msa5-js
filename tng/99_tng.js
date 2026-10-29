const nextBtn = document.querySelector(".next-btn");
const resetBtn = document.querySelector(".reset-btn");
const card = document.querySelector(".card");

let page = 1;
const limit = 3;

const baseURL = "https://picsum.photos";
const path = "/v2/list";

// 사진을 가져오는 함수
nextBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    response.data.forEach((item) => {
      // 1. 이미지 요소 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("header-img");
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 2. 카드 텍스트 요소
      const cardText = document.createElement("p");
      cardText.classList.add("img-text");
      cardText.textContent = `${item.id} : ${item.author}`;

      // 3. 이미지와 텍스트를 담을 카드 생성
      const headerCard = document.createElement("div");
      headerCard.classList.add("header-card");

      headerCard.appendChild(cardImg);
      headerCard.appendChild(cardText);

      // 4. 전체 카드 영역에 추가
      card.appendChild(headerCard);
    });
    page++; //루프 밖으로 해야 다음 page가 나온다.
  } catch (error) {
    console.error(error);
  }
  resetBtn.addEventListener("click", () => {
    page = 1; // 다시 번호 처음부터 시작가능
    card.textContent = ""; //빈페이지로
  });
});
//속도가 느린건 외국 서버에서 들고와서 그런거다.
