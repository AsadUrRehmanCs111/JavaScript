// var btns = document.querySelectorAll('#book-list .delete')


// btns.forEach(btn => {
//     btn.addEventListener('click', function (e) {
//         const li = e.target.parentElement
//         li.parentNode.removeChild(li)
//     })
// });

const lists = document.querySelector('#book-list ul')

lists.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode
        lists.removeChild(li)
    }
})