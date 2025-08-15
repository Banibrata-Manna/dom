// Styling an element by DOM Manipulation.

const title = document.querySelector('#main-heading');
title.style.color = 'green';
title.style.fontSize = '2.5rem';
title.style.textAlign = 'center';


// you cannot apply style to a collection of elements directly, thus explains the loop.
const listElements = document.querySelectorAll('.list-items');

listElements.forEach(element => {
    element.style.color = 'lightgray';
    element.style.fontSize = '1.2rem';
    element.style.borderBottom = '1px solid #eee';
});


// This will change the color of the last list item to red
const lastListItem = document.querySelector('.list-items:last-child');
lastListItem.style.color = 'red';

// This will change the color of the first list item to blue
const firstListItem = document.querySelector('.list-items:first-child');
firstListItem.style.color = 'blue';

// This will change the color of the third list item to orange
const thirdListItem = document.querySelector('.list-items:nth-child(3)');
thirdListItem.style.color = 'orange';

// Styling an element using DOM Manipulation will change the inline styles of the elements directly.