// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');



// ARRAYS - Store multiple values in a variable
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));


const numbers = new Array(1, 2, 3, 4);
console.log(numbers)
numbers.push(5)
console.log(numbers)
numbers[3] = 10
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
console.log(numbers.pop())
console.log(numbers.shift())
console.log(numbers)

// OBJECT LITERALS
const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'Dinner with wife',
        isComplete: false
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isComplete: true
    }
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));

const Person = {
    firstName: 'Asad',
    lastName: ' Ur Rehman',
    age: 21,
    address: {
        chak: '303 GB',
        city: 'TTS',
        state: 'Punjab'
    }
}
console.log(Person)
console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age)
console.log(Person.address)
console.log(Person.address.chak)
console.log(Person.address.state)
console.log(Person.address.city)

Person.email = 'asad@gmail.com';
console.log(Person)

// Array of objects  // // 

const todo = [
    {
        id: '1',
        text: 'Fajjar Namaz',
        isCompleted: 'yes'
    },
    {
        id: '2',
        text: 'Jumma',
        isCompleted: 'yes'
    },
    {
        id: '3',
        text: 'Eat',
        isCompleted: 'False'
    }
]
console.log(todo)
console.log(todo[0].id)
console.log(todo[0].isCompleted)
console.log(todo[0].text)
console.log(todo[1].id)
console.log(todo[1].isCompleted)
console.log(todo[1].text)
console.log(todo[2].id)
console.log(todo[2].isCompleted)
console.log(todo[2].text)

// // converting it into json Format // // 

const todoJSON = JSON.stringify(todo)
console.log(todoJSON)


// LOOPS

// For
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
    console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for (let todo of todos) {
    console.log(todo.text);
}


// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
    return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function (todo) {
    // Return only todos where id is 1
    return todo.id === 1;
});

for (let i = 0; i < todo.length; i++) {
    console.log(todo[i].text)
}
// //another way of for loop
for (let t of todo) {
    console.log(t.text)
}

// //For Each method // //

todo.forEach(function (t) {
    console.log(t.text)
    console.log(t.id)
})
// CONDITIONALS

// Simple If/Else Statement
const x = 30;

if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10')
}

// Switch
color = 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
    case 'blue':
        console.log('color is blue');
    default:
        console.log('color is not red or blue')
}

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;


// FUNCTIONS in Javascript
function greet(greeting = 'Hello', name) {
    if (!name) {
        // console.log(greeting);
        return greeting;
    } else {
        // console.log(`${greeting} ${name}`);
        return `${greeting} ${name}`;
    }
}




function addNums(num1, num2) {
    console.log(num1 + num2)
}
addNums(1, 2)
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2)
}
addNums(5) //7
addNums(undefined, 2) // 3
addNums() //3
addNums(4, 4) //8

//Arrow function //

const addNum = (num1 = 1, num2 = 2) => {
    return num1 + num2
}
console.log(addNum())

const addNum = (num1 = 1, num2 = 2) => num1 + num2
console.log(addNum())

// OOP // 

// Constructor Function and ProtoTypes //

//constructor function

function Person(fName, lName, dob) {
    this.fName = fName;
    this.lName = lName;
    this.dob = dob;
    // this.getFullName = function () {
    //     return this.fName + this.lName;
    // }
}

// same with prototype
Person.prototype.getFullName = function () {
    return this.fName + this.lName;
}
// // Instantiate object

const person1 = new Person('Asad', ' Ur Rehman', '10-07-1998')
const person2 = new Person('Ali', ' Raza', '10-09-1998')
console.log(person1)
console.log(person1.fName)
console.log(person1.lName)
console.log(person2)
console.log(person2.fName)
console.log(person2.lName)
console.log(person1.getFullName())
// same with prototype
console.log(person1.getFullName())

// // Class  // // 

class Person {
    constructor(fName, lName, dob) {
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
    }
    getFullName() {
        return this.fName + this.lName;
    }
}
const person1 = new Person('Asad', ' Ur Rehman', '10-07-1998')
console.log(person1)
console.log(person1.fName)
console.log(person1.lName)
console.log(person1.getFullName())


//*************** DOM ****************//

// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
    document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
