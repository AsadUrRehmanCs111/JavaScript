var books = document.querySelector('#book-list li .name')
console.log(books)
// The querySelector() method only returns the first element 
// that matches the specified selectors. To return all 
// the matches, use the querySelectorAll() method instead.

var booksName = document.querySelectorAll('#book-list li .name')
Array.from(booksName).forEach(book => {
    console.log(book)
})
var bookName = document.querySelector('#book-list li:nth-child(3) .name')
console.log(bookName)