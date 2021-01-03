//Access Element By Class Name 
var titles = document.getElementsByClassName('title') // There will be HTML Collection in console
console.log(titles)

//As there are two title Classes 
// method to Access them 
//Method 1 (same as we acces array Elements)
console.log(titles[0])
console.log(titles[1])

// Method 2 :Using For loop
for (var i = 0; i < titles.length; i++) {
    console.log(titles[i])
}
//Using for each loop

/*titles.forEach(i => {
    console.log(i)
});*/ //there will be error as titles is not an array it's HTML collection so 
// we will tell that it is array.

Array.from(titles).forEach(e => {
    console.log(e)
});

//Let if an element contains no class and no id then how can we access

// By TagNAME

var lists = document.getElementsByTagName('li')
console.log(lists)

//As there are 4 list  
// method to Access them 
//Method 1 (same as we acces array Elements)
console.log(lists[0])
console.log(lists[1])

// Method 2 :Using For loop
for (var i = 0; i < lists.length; i++) {
    console.log(lists[i])
}
//Using Foreach 

Array.from(lists).forEach(e => {
    console.log(e)
})



