/* // document.getElementById()

console.log(document.getElementById("task-title"));

//Get things from the element

console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

//Change content

taskTitle.textContent = 'Roy\'s Task';
taskTitle.innerHTML = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; */

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('h5'));

document.querySelector('ul li:nth-child(3)').style.color = 'red';
document.querySelector('ul li:nth-child(odd)').style.color = 'red';
