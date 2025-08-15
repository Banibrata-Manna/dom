// Selecting an element
// elements can be selected using various methods.

// getElementById returns the first element with the specified ID
const mainHeading = document.getElementById('main-heading');
console.log("This is the main heading : ", mainHeading);


// getElementsByClassName returns a live HTMLCollection of elements with the specified class name
const listItems =  document.getElementsByClassName('list-items');
console.log("These are the list items : ", listItems);


// getElementsByTagName returns a live HTMLCollection of elements with the specified tag name
console.log("These are all divs : ", document.getElementsByTagName('div')); // You can get any element by its tag name.
// ex: <div>, <span>, <p>, <li>, <ul>, <header>, <footer>, <main>, <section>, <article>, <script>, <aside>, <nav> etc.


console.log("These are all elements : ", document.getElementsByTagName('*'));


// querySelector returns the first element that matches the specified CSS selector
const container = document.querySelector('.container');
console.log("This is the container : ", container);
console.log("This is the first list item : ", document.querySelector('.list-items')); // You can use any CSS selector here, like .class, #id, tag, etc.

// getElementById returns the first element with the specified ID
const marvelListNode = document.querySelectorAll('#marvel');
console.log("This is the Marvel list item : ", marvelListNode);