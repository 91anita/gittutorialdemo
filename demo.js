var itemList=document.querySelector('#items');
//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement)

//chiledNodes
//console.log(itemList.childNodes)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow'

//firstchild
// console.log(itemList.firstChild);

//firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello"

//lastchild
// console.log(itemList.lastChild);

// //lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello last"

//nextsibling
// console.log(itemList.nextSibling);

// //nextelementsibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// console.log(itemList.previousSibling)

///previouselementsibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='green'

//createelement
var newDiv=document.createElement('div')
newDiv.className='hello';
newDiv.id='hello1'
newDiv.setAttribute('title', 'hello')
var newDivText=document.createTextNode('HEllo')
newDiv.appendChild(newDivText)
var container =document.querySelector('header .container')
var h1=document.querySelector('header h1')
console.log(newDiv)
container.insertBefore(newDiv, h1)

var newdiv=document.createElement('div')
newdiv.className='hello';
newdiv.id='hello2'
newdiv.setAttribute('ul', 'hello')
var newdivText=document.createTextNode('HEllo')
newdiv.appendChild(newdivText)
var container =document.querySelector('div .list-group')
var h1=document.querySelector('div li')
console.log(newdiv)
container.insertBefore(newdiv, h1)
