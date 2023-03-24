const colors = ['red', 'pink', 'green', 'purple', 'yellow']
const items = document.querySelectorAll('.item');
const menuBar = document.querySelector('.container');

let itemIndex = 0;
let activeEl = menuBar[itemIndex];

items.forEach((i, index)=>{
  i.addEventListener('click',() => {changeSizeItem(i, index)})
})

function changeSizeItem(i, index){
  
  if(i == activeEl) return;
  if(activeEl) {activeEl.classList.remove('active');
  document.body.classList.remove(document.body.classList.item(0))
}
  
  i.classList.add('active');
  document.body.classList.add(colors[index]);
  
  indexActive = index;
  activeEl = i;
}