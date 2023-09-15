let output;
const parent = document.querySelector('.parent');
4;

output = parent.childNodes;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Childe One';
output = parent.childNodes[3].style.color = 'red';
output = parent.firstChild;
output = parent.lastChild;
parent.lastChild.textContent = 'Hello';
// output = parent.childNodes[3];

// Parent node
const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
