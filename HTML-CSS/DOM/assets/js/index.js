const counterValue = document.getElementById('counterValue')
const incBtn = document.getElementById('inc')
const decBtn = document.getElementById('dec')
const updBtn = document.getElementById('udp')

let count = counterValue.innerText = localStorage.getItem('counterValue');;

incBtn.addEventListener('click',()=>{
  count++
  counterValue.innerText = count;
  localStorage.setItem('counterValue',count)
})
decBtn.addEventListener('click',()=>{
  count--
  counterValue.innerText = count;
  localStorage.setItem('counterValue',count)
})
updBtn.addEventListener('click',()=>{
  count = counterValue.innerText = 0;
  localStorage.setItem('counterValue',count)
})