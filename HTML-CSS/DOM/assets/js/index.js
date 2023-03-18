// let containerEl = document.getElementById('container');

// containerEl.style.backgroundColor = 'yellow';

// let redTextEl = document.querySelector('.redText');
// redTextEl.style.color = 'purple';

// let markEl = document.getElementById('mark');

// let textMarkElems = document.querySelectorAll('p.mark');
// // textMarkEl.style.backgroundColor = 'pink';
// console.log(textMarkElems);

// textMarkElems.forEach(el => {
//   el.style.backgroundColor = 'purple';
//   el.style.color = 'white';
//   el.style.fontSize = '20px'
//   console.log(el.classList);
//   console.log(el.attributes);
// })

// let textMarkEl2 = document.getElementsByClassName('mark');
// console.log(textMarkEl2);

// console.log(document.body.childNodes);

/* const divContaineEl = document.querySelector('.container');

// divContaineEl.style.backgroundColor = 'purple';
// // divContaineEl.remove();

// const pEl = document.createElement('p');
// pEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, optio";
// pEl.classList.add('mark');
// pEl.setAttribute('isSelected', true);
// document.body.append(pEl);

// divContaineEl.prepend(pEl);
*/

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

function createUserCard(imageContainer, infoContainer) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-cointaner");

  cardContainer.append(imageContainer, infoContainer);
  return cardContainer;
}

const userCards = document.getElementById("userCards");
const imageContainer = createUserPhoto(user.img);
const infoContainer = createBtnContainer(user.fullName, user.stats);
const cardContainer = createUserCard(imageContainer, infoContainer);

userCards.append(cardContainer);


