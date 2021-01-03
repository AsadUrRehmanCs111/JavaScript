//Delete Books
/*const lists = document.querySelector('#book-list ul')

lists.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode
        lists.removeChild(li)
    }
})*/

// forms = document.forms
// console.log(forms)
// console.log(forms[0])
// //Get form by id
// console.log(forms['add-book'])

//add book-lits 

const addBooks = document.forms['add-book'];

addBooks.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addBooks.querySelector('input[type="text"]').value
    console.log(value)
})