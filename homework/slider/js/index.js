let slide = [
  {
    image:
      "https://kaboompics.com/cache/d/9/a/9/5/d9a95053e9df780b5922013e4840b88769687f6c.jpeg",
    box: {
      title: "Photo Camera",
      description: "Great camera",
      bgColor: ["#7D200F", "#ca7127"],
    },
  },
  {
    image:
      "https://kaboompics.com/cache/6/b/3/8/d/6b38d175fac8e9fcfdfa438ac0e52e063278ec12.jpeg",
    box: {
      title: "Шпалера",
      description: "Чудова шпалера",
      bgColor: ["#A5826F", "#300C0E"],
    },
  },
  {
    image:
      "https://kaboompics.com/cache/b/7/3/0/d/b730dbb76e707683aa973c77c2e79e9c0caac420.jpeg",
    box: {
      title: "Stairs",
      description: "Lenght stairs",
      bgColor: ["#66A6D0", "#00489A"],
    },
  },
  {
    image:
      "https://kaboompics.com/cache/9/f/f/d/2/9ffd225edb872ae0e21302ea924955dd7098f40d.jpeg",
    box: {
      title: "Tower",
      description: "Red sculpture",
      bgColor: ["#87BFD0", "#01507B"],
    },
  },
];

function createSlide(slide) {
  //parent elem
  const slideItem = document.createElement("div");
  slideItem.classList.add("item");

  //box
  const boxItem = document.createElement("div");
  boxItem.classList.add("box");
  //bgcolor box
  boxItem.style.background =
    "linear-gradient(12deg, " +
    slide.box.bgColor[0] +
    " 0%, " +
    slide.box.bgColor[1] +
    " 60%)";

  //box > h1
  const boxTitle = document.createElement("h1");
  const descBox = document.createElement("p");
  boxTitle.innerText = slide.box.title;
  descBox.innerText = slide.box.description;

  boxItem.append(boxTitle, descBox);

  //image
  const image = document.createElement("img");
  image.setAttribute("src", slide.image);
  image.setAttribute("alt", "slide photo");

  slideItem.append(boxItem, image);
  return slideItem;
}

const buttons = document.getElementById("buttons");

const upButton = document.createElement("button");
upButton.classList.add("up-button");
const angleUp = document.createElement("i");
angleUp.classList.add("fas", "fa-angle-up");
upButton.append(angleUp);

const downButton = document.createElement("button");
downButton.classList.add("down-button");
const angleDown = document.createElement("i");
angleDown.classList.add("fas", "fa-angle-down");
downButton.append(angleDown);

buttons.append(upButton, downButton);

const container = document.getElementById("container");

slide.forEach((s, index) => {
  container.append(createSlide(s));
});

let countSlides = container.childElementCount;
let slideActiveIndex = 0;
let activeEl = container.children[slideActiveIndex];

activeEl.classList.add("active");

// console.log(activeEl);

upButton.addEventListener("click", upChangeSlide);
downButton.addEventListener("click", downChangeSlide);

function upChangeSlide() {
  container.children[slideActiveIndex].classList.remove("active");
  slideActiveIndex++;
  if (slideActiveIndex >= countSlides) slideActiveIndex = 0;
  container.children[slideActiveIndex].classList.add("active");
}

function downChangeSlide() {
  container.children[slideActiveIndex].classList.remove("active");
  slideActiveIndex--;
  if (slideActiveIndex < 0) slideActiveIndex = countSlides - 1;
  container.children[slideActiveIndex].classList.add("active");
}

// let box = item.childNodes[0];
// let img = item.childNodes[1];

// img.style.transition = box.style.transition = "0.5s linear";

// img.style.transform = "translateY(-50%)";
// box.style.transform = "translateY(50%)";