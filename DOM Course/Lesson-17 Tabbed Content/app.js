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

//Hide Books 

const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        lists.style.display = 'none'
    }
    else {
        lists.style.display = 'initial'
    }
})

//Filter Books 

const searchBook = document.forms['search-books'].querySelector('input')
searchBook.addEventListener('keyup', function (e) {
    const search = e.target.value.toLowerCase()
    const books = lists.getElementsByTagName('li')
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent
        if (title.toLocaleLowerCase().indexOf(search) != -1) {
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    })
})

const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target)
        Array.from(panels).forEach((panel) => {
            if (panel == targetPanel) {
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })
    }
})