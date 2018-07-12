const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Li title');

li.appendChild(document.createTextNode('Hello World'));

//Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// append li to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);