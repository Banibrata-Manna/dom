// Traversing up in DOM

const ul = document.querySelector('ul');

console.log("This is the parent of the ul: ", ul.parentElement);
console.log("This is the parent of the ul: ", ul.parentNode);

// can also be chained
console.log("This is the grandparent of the ul: ", ul.parentElement.parentElement);
console.log("This is the grandparent of the ul: ", ul.parentNode.parentNode); // recommended because, if you try to access the parent of html or body tag the parentElement will give null.

// Traversing down in DOM

console.log("These are children of the ul: ", ul.children); // returns only element nodes
console.log("These are children of the ul: ", ul.childNodes); // returns all child nodes, including text nodes

// Note the the indentation in an HTML document become text nodes

// Traversing through siblings

console.log("This is the next sibling of the ul: ", ul.nextElementSibling); // returns element
console.log("This is the next sibling of the ul: ", ul.nextSibling); // returns all child nodes, including text nodes
console.log("This is the previous sibling of the ul: ", ul.previousElementSibling); // returns element
console.log("This is the previous sibling of the ul: ", ul.previousSibling); // returns all child nodes, including text nodes