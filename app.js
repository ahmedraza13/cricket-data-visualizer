const cricketMatchData = [
  {
    staging: {
      groupStage: "T20 29 of 55",
      date: "Yesterday",
    },
    country1: {
      flag: "./Images/card-one/papua-new-guinea-flag.png",
      name: "Papua New Guinea",
      score: 95,
      overs: 19.5,
    },
    country2: {
      flag: "./Images/card-one/afghanistan-flag.png",
      name: "Afghanistan",
      score: "101/3",
      overs: 15.1,
    },
    result: {
      title: "AFG won by 7 wickets (29 balls left)",
      image: "./Images/card-one/card-one-result.jpeg",
    },
  },

  {
    staging: {
      groupStage: "T20 26 of 55",
      date: "Thu, 13 Jun",
    },
    country1: {
      flag: "./Images/card-two/westindies-flag.png",
      name: "Westindies",
      score: "149/9",
      overs: 20,
    },
    country2: {
      flag: "./Images/card-two/newzeland-flag.png",
      name: "Newzealand",
      score: "136/9",
      overs: 20,
    },
    result: {
      title: "WI Won by 13 runs",
      image: "./Images/card-two/card-two-result.jpg",
    },
  },

  {
    staging: {
      groupStage: "T20 27 of 55",
      date: "Thu, 13 Jun",
    },
    country1: {
      flag: "./Images/card-three/bangladesh-flag.png",
      name: "Bangladesh",
      score: "134/8",
      overs: 20,
    },
    country2: {
      flag: "./Images/card-three/netherland-flag.png",
      name: "Netherland",
      score: "134/8",
      overs: 20,
    },
    result: {
      title: "BAN won by 25 runs",
      image: "./Images/card-three/card-three-result.jpg",
    },
  },
  {
    staging: {
      groupStage: "T20 28 of 55",
      date: "Yesterday",
    },
    country1: {
      flag: "./Images/card-four/oman-flag.png",
      name: "Oman",
      score: 47,
      overs: 13.2,
    },
    country2: {
      flag: "./Images/card-four/england-flag.png",
      name: "England",
      score: "50/2",
      overs: 3.1,
    },
    result: {
      title: "ENG won by 8 wickets",
      image: "./Images/card-four/card-four-result.jpg",
    },
  },
];

let cards = document.querySelector(".row.g-0");

cricketMatchData.map((card, index) => {
  return (
        cards.innerHTML += ` <div class="col-lg-6 col-12">
          <div class="card">
        <div class="card-sub d-flex justify-content-around">
        <div class="column-one d-flex flex-column gap-4 mt-4 mb-4">
          <span>${card.staging.groupStage}</span>
          <li class="list-unstyled"><img src="${card.country1.flag}" alt="" width="25">${card.country1.name}</li>
          <li class="list-unstyled"><img src="${card.country2.flag}" alt="" width="25">${card.country2.name}</li>
          <h6>${card.result.title}</h6>
        </div>
        <div class="column-two d-flex flex-column align-items-center gap-4 mt-4 mb-4">
          <span>${card.staging.date}</span>
          <li class="list-unstyled">${card.country1.score} (${card.country1.overs})</li>
          <li class="list-unstyled">${card.country2.score} (${card.country2.overs})</li>
          <img src="${card.result.image}" alt="" width="70">
        </div>
        </div>
        </div>
      </div>`);
});








   
  
       