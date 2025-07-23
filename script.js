const cardList = [
  {
    name: "crow",
    image: '<i class="fa-solid fa-crow text-yellow-700 text-4xl"></i>',
  },
  {
    name: "dove",
    image: '<i class="fa-solid fa-dove text-yellow-700 text-4xl"></i>',
  },
  {
    name: "kiwi",
    image: '<i class="fa-solid fa-kiwi-bird text-yellow-700 text-4xl"></i>',
  },
  {
    name: "hippo",
    image: '<i class="fa-solid fa-hippo text-yellow-700 text-4xl"></i>',
  },
  {
    name: "cow",
    image: '<i class="fa-solid fa-cow text-yellow-700 text-4xl"></i>',
  },
  {
    name: "dog",
    image: '<i class="fa-solid fa-dog text-yellow-700 text-4xl"></i>',
  },
  {
    name: "crow",
    image: '<i class="fa-solid fa-crow text-yellow-700 text-4xl"></i>',
  },
  {
    name: "dove",
    image: '<i class="fa-solid fa-dove text-yellow-700 text-4xl"></i>',
  },
  {
    name: "kiwi",
    image: '<i class="fa-solid fa-kiwi-bird text-yellow-700 text-4xl"></i>',
  },
  {
    name: "hippo",
    image: '<i class="fa-solid fa-hippo text-yellow-700 text-4xl"></i>',
  },
  {
    name: "cow",
    image: '<i class="fa-solid fa-cow text-yellow-700 text-4xl"></i>',
  },
  {
    name: "dog",
    image: '<i class="fa-solid fa-dog text-yellow-700 text-4xl"></i>',
  },
];

let cardGameDiv = document.getElementById("cardGame");
let gridCards = document.createElement("div");
gridCards.setAttribute(
  "class",
  " grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-3 lg:w-8/12 w-full flex-grow md:px-10 px-1 justify-center items-center"
);

cardGameDiv.append(gridCards);

//
let flippedCards = [];
let matchedPair = 0;
let moveCount = 0;
shuffaleCard();
displayCards();
function shuffaleCard() {
  for (let i = cardList.length - 1; i >= 0; i--) {
    const randemIndex = Math.floor(Math.random() * (i + 1));
    [cardList[i], cardList[randemIndex]] = [cardList[randemIndex], cardList[i]];
  }
}
function displayCards() {
  cardList.forEach((value, index, accva) => {
    const card = document.createElement("div");
    card.setAttribute("class", " card card-body xl:w-[100px] w-[80px] xl:h-[150px] h-[120px]");
    card.setAttribute("id", index);
    gridCards.append(card);
    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  if (!timerStarted) {
    startTimer();
  }

  if (
    flippedCards.length < 2 &&
    !this.classList.contains("active") &&
    this.innerHTML === ""
  ) {
    let cardId = this.getAttribute("id");
    flippedCards.push(this);
    this.classList.remove("card-body");
    this.innerHTML = cardList[cardId].image;
    if (flippedCards.length == 2) {
      setTimeout(checkCards, 500);
    }
    moveCount++;
  }

  document.getElementById("move").innerText = moveCount;
}

function checkCards() {
  const cardId_1 = flippedCards[0].getAttribute("id");
  const cardId_2 = flippedCards[1].getAttribute("id");

  if (cardList[cardId_1].name === cardList[cardId_2].name) {
    flippedCards[0].classList.add("bg-yellow-300", "active");
    flippedCards[1].classList.add("bg-yellow-300", "active");
    matchedPair++;
    checkGameOver();
  } else {
    flippedCards[0].innerHTML = "";
    flippedCards[0].classList.add("card-body");
    flippedCards[1].innerHTML = "";
    flippedCards[1].classList.add("card-body");
  }
  flippedCards = [];
}
function checkGameOver() {
  if (matchedPair === cardList.length / 2) {
    gridCards.remove();
    let finalDiv = document.createElement("div");
    finalDiv.setAttribute(
      "class",
      "text-center text-pink-900 py-32 font-bold text-4xl font-serif animate-youWon"
    );
    finalDiv.innerText = "YOU WIN";
    cardGameDiv.append(finalDiv);
    stopTimer();
  }
}

function resetCall() {
  while (gridCards.firstChild) {
    gridCards.removeChild(gridCards.firstChild);
  }
  flippedCards = [];
  matchedPair = 0;
  moveCount = 0;
  shuffaleCard();
  stopTimer();
  displayCards();
  timerStarted = false;
  document.getElementById("timer").innerText = `00:00`;
  document.getElementById("move").innerText = moveCount;
  const winMessage = document.querySelector(".animate-youWon");
  if (winMessage) {
    winMessage.remove();
    cardGameDiv.append(gridCards);
  }
}

let timerInterval;
let secondsElapsed = 0;
let timerStarted = false;

function startTimer() {
  timerStarted = true;
  secondsElapsed = 0;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    secondsElapsed++;

    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerStarted = false;
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const seconds = String(secondsElapsed % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}
