// define the UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'),
clearBtn = document.querySelector('.clear-tasks'),
filter = document.querySelector('#filter'),
taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  // Document Load
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Remove all task at once
  clearBtn.addEventListener('click', clearTasks);
  // Filter the list
  filter.addEventListener('keydown', filterTasks);
}

// Add Task
function addTask(e){

  if(taskInput.value === ''){
     alert('Add a task');
  }
  else{

      // Create li element
      const li = document.createElement('li');
      // Add Class 
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(taskInput.value));

      // create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      //Append the link to li
      li.appendChild(link);

      //Append li to ul
      taskList.appendChild(li);

       // add task to localstorage
       addTaskToLocalStorage(taskInput.value);


      // Clear input
      taskInput.value = '';

     

  }


  e.preventDefault();
}

// Add to localstorage
function addTaskToLocalStorage(task){
   let tasks;

   if(localStorage.getItem('tasks') === null){
      tasks = [];
   }
   else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.push(task);

   localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get task from localstorage and set it
function getTasks(){

  let tasks;

  if(localStorage.getItem('tasks') === null){
     tasks = [];
  }
  else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){

      
      // Create li element
      const li = document.createElement('li');
      // Add Class 
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));

      // create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      //Append the link to li
      li.appendChild(link);

      //Append li to ul
      taskList.appendChild(li);

  });

}

// Remove task
function removeTask(e){

   if(e.target.parentElement.classList.contains('delete-item')){
     if(confirm('Are you sure?')){

      e.target.parentElement.parentElement.remove();
      removeFromLocalStorage(e.target.parentElement.parentElement);

     }
     
   }
}

// Remove task from localstorage
function removeFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks') === null){
     tasks = [];
  }
  else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
     if(taskItem.textContent === task){
       tasks.splice(index, 1);
     }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks(e){
  e.preventDefault();
  while(taskList.firstChild){
     taskList.firstChild.remove();
     clearLocalStorage();
  }
}

// Clear Task from localstorage
function clearLocalStorage(){
    localStorage.clear();
}

// Filter Tasks
function filterTasks(e){
   const allLi = document.querySelectorAll('.collection-item');
   const filterVal = e.target.value.toLowerCase();

   allLi.forEach(function(task){

      if(task.textContent.toLowerCase().indexOf(filterVal) != -1){
        task.style.display = '';
      }
      else{
         task.style.display = 'none';
      }

   });

}

