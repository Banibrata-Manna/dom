const newListItem = document.createElement('li');

const listItems = document.querySelector('ul');

newListItem.innerText = 'New Item';
newListItem.style.color = 'blue';

console.log('New item added:', newListItem);

listItems.append(newListItem);

// Can set class attribute using classList
// newListItem.classList.add('list-items');

// Alternatively, you can use setAttribute
newListItem.setAttribute('class', 'list-items');


console.log('New item class:', newListItem.contains('list-items'));
console.log('New item class set:', newListItem.classList.contains('list-items'));

// newListItem.remove();