//Delete Books
const lists = document.querySelector('#book-list ul')

lists.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode
        lists.removeChild(li)
    }
})


//add book-lits 

const addBooks = document.forms['add-book'];

addBooks.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addBooks.querySelector('input[type="text"]').value
    console.log(value)

    //Add ELements
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    //add content

    bookName.textContent = value
    deleteBtn.textContent = 'delete'

    //Styles and CLasses by classList 

    bookName.classList.add('book')
    deleteBtn.classList.add('delete')

    //Append these Elements to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    lists.appendChild(li)

})

var book = document.querySelector('li:first-child .name')
console.log(book)

//Getting ClassName 

console.log(book.getAttribute('class'))

//Getting href if any 

console.log(book.getAttribute('href'))

//Setting Attribute

console.log(book.setAttribute('class', 'name-2'))
console.log(book)

//Checking if a Node has a particular Attribute.
console.log(book.hasAttribute('class'))

//Removing attribute
console.log(book.removeAttribute('class'))
console.log(book)

