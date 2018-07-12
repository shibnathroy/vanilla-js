/* // document.getElementsByClassName()

const items = document.getElementsByClassName('collection-item');

console.log(items[0]);
items[0].style.color = 'red';
items[3].innerHTML = 'Hello Roy';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis[1]);
lis[0].innerText = 'Hello Boy';

// convert html collection into an array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  li.textContent = li.textContent;
}) */

// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = 'Hello Babe';
})

const liOdd = document.get 

console.log(items);