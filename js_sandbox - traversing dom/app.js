let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get childnodes
val = list.childNodes;
val = list.childNodes[1].nodeName;

// Get children elements
 val = list.children;
list.children[1].textContent = 'Hello Boy';

// First element
val = list.firstElementChild.children[0];
//val = list.lastElementChild;

val = list.childElementCount;

val = listItem.nextElementSibling;

console.log(val);