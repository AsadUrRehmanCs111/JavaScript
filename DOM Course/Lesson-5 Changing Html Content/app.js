//changing 1st BookName
var bookName = document.querySelector('#book-list li:nth-child(1) .name')
//console.log(bookName)

//For changing the content of html we will use 'innerHTML'

// bookName.innerHTML = 'BOOK 1 MODIFIED'

// What if we want the the older data is also stay and new data appends

bookName.innerHTML += ' (BOOK 1 MODIFIED)'

// What if we want to change all the name of the books ? 

var booksName = document.querySelectorAll('#book-list li .name')

Array.from(booksName).forEach(book => {
    book.innerHTML += ' (modified)'
})
