let tasks;

if(localStorage.getItem('tasks') == null) {
  tasks = [];
} else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

const countTasks = document.getElementById('count');
countTasks.innerText = `You have ${tasks.length} pending tasks`;

const textTask = document.getElementById('text-task');
const listTask = document.getElementById('tasks');
const addTask = document.getElementById('add-task');
const clearAllBtn = document.getElementById('clear-all')

tasks.forEach((t) => {
  const newTask = document.createElement('div');
  const textNewTask = document.createElement('p');
  const btnDel = document.createElement('button');
  btnDel.classList.add('delete', 'fa', 'fa-trash')
  btnDel.style.fontSize = '24px';
  textNewTask.innerText = t;
  newTask.append(textNewTask,btnDel);
  listTask.append(newTask);
})

addTask.addEventListener('click', () => {
  tasks.push(textTask.value);
  console.log(tasks);
  textTask.innerText = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
})

clearAllBtn.addEventListener('click', () => {
  tasks = [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
})

const delButtons = document.querySelectorAll('.delete');

delButtons.forEach((btn, index)=>{
  btn.addEventListener('click', () => {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })
})

console.log(delButtons);