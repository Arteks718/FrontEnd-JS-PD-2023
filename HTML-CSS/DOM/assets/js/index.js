const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach(b => {
  b.addEventListener('click', makeColor1);
  b.children[0].addEventListener('click', ()=>{
    b.remove();
  })
})

function makeColor1(event){
  // console.log(event);
  // console.log(event.target);

  this.classList.add('greenyellow');
  this.removeEventListener('click', makeColor1);
  this.classList.remove('white');
  this.addEventListener('click', makeColor2);
}

function makeColor2(event){
  this.classList.add('white');
  this.removeEventListener('click', makeColor2);
  this.classList.remove('greenyellow');
  this.addEventListener('click', makeColor1);
}