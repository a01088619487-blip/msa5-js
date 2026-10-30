// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 	1-1. 다음 페이지를 가져올 때 기존 데이터는 지워지지 않습니다.
// 	1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 	2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- paramers:
// 	  - page: number
// 	  - limit: number
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
