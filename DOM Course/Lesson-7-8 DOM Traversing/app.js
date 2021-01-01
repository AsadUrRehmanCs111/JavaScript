// This lesson is about traversing Dom from parent node to child and thier siblings etc..
var bookList = document.querySelector('#book-list')
console.log('Parent Element:', bookList.parentElement)
console.log('Parent Node:', bookList.parentNode)
console.log('Parent Node of the Parent:', bookList.parentNode.parentNode)
console.log('Children Node:', bookList.childNodes)
console.log('Child Element :', bookList.children)

console.log('book-list next sibling is:', bookList.nextSibling)
console.log('book-list next sibling Element is:', bookList.nextElementSibling)

console.log('book-list previous sibling is:', bookList.previousSibling)
console.log('book-list previous sibling Element is:', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('h1').innerHTML += '<br> YOOO Super Amazing!'