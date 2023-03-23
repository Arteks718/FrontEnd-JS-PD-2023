// const boxes = document.querySelectorAll('.box');
// console.log(boxes);

// boxes.forEach(b => {
//   b.addEventListener('click', makeColor1);
//   b.children[0].addEventListener('click', ()=>{
//     b.remove();
//   })
// })

// function makeColor1(event){
//   // console.log(event);
//   // console.log(event.target);

//   this.classList.add('greenyellow');
//   this.removeEventListener('click', makeColor1);
//   this.classList.remove('white');
//   this.addEventListener('click', makeColor2);
// }

// function makeColor2(event){
//   this.classList.add('white');
//   this.removeEventListener('click', makeColor2);
//   this.classList.remove('greenyellow');
//   this.addEventListener('click', makeColor1);
// }

const users = [
  {
    img: "#",
    fullName: "Kate Adson",
    stats: {
      fb: "800",
      inst: "1000",
      twitter: "850",
    },
  },
  {
    img: "#",
    fullName: "Kate Adson",
    stats: {
      fb: "800",
      inst: "1000",
      twitter: "850",
    },
  },
  {
    img: "#",
    fullName: "Kate Adson",
    stats: {
      fb: "800",
      inst: "1000",
      twitter: "850",
    },
  },
];

function createUserPhoto(userImg) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-cointaner");
  //image container

  const img = document.createElement("img");

  img.setAttribute("src", userImg);
  img.setAttribute("alt", "user photo");

  imageContainer.append(img);
  return imageContainer;
}

function createBtnContainer(fullname, stats) {
  const infoContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");

  infoContainer.classList.add("info-cointaner");
  buttonContainer.classList.add("button-cointaner");

  //info container
  const pFullName = document.createElement("p");
  pFullName.classList.add("user_fullname");
  pFullName.innerText = fullname;

  const fb = document.createElement("div");
  const inst = document.createElement("div");
  const twitter = document.createElement("div");

  fb.classList.add("stat", "fb");
  inst.classList.add("stat", "inst");
  twitter.classList.add("stat", "twitter");

  fb.innerHTML = stats.fb;
  inst.innerHTML = stats.inst;
  twitter.innerHTML = stats.twitter;

  buttonContainer.append(fb, inst, twitter);

  infoContainer.append(pFullName, buttonContainer);

  return infoContainer;
}

function createUserCard(u) {
  const imageContainer = createUserPhoto(u.img);
  const btnContainer = createBtnContainer(u.fullName, u.stats);
  
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  cardContainer.append(imageContainer, btnContainer);
  return cardContainer;
}

const userCards = document.getElementById("userCards");

let cards = users.map((u) => {
  userCards.append(createUserCard(u));
})

console.log(cards);
// userCards.append(users[0])