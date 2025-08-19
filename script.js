const taskContainer = document.querySelector('.taskContainer');
const field = document.querySelector ('.field');
const btn = document.querySelector('.btn');


btn.addEventListener('mouseover', () => {
  btn.classList.add('mouseOn');
  btn.classList.remove('mouseOff');
});

btn.addEventListener('mouseout', () => {
  btn.classList.remove('mouseOn');
  btn.classList.add('mouseOff');
});

btn.addEventListener('click', addTask);

field.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    addTask();
  }
});

function addTask() {
  if (field.value.trim() === '') {
    return; 
  }
  
  const item = document.createElement('li');
  item.innerText = field.value;
  item.classList.add('taskAdded');
  taskContainer.appendChild(item);
  field.value = '';
  
  item.addEventListener('click', () => {
    item.classList.add('taskCompleted');
  });

  item.addEventListener('dblclick', () => {
    taskContainer.removeChild(item);
  });
}






