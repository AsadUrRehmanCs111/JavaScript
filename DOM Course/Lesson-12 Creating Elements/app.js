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

    //Append these Elements to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    lists.appendChild(li)

})

