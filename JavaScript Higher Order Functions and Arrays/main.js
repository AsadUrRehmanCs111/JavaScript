const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//FOR loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}

//ForEach Loop (Synchronous call back)

companies.forEach(function (company) {
    console.log(company)
})

//Get Ages 21 and older 

// Filter 

let canDrink = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}
console.log(canDrink)

//Now doing same thing with Filter

const canDrink1 = ages.filter(function (age) {
    if (age >= 21)
        return true
})
console.log(canDrink1)

// Filter + Arrow Function

const canDrink2 = ages.filter(age => age >= 21)
console.log(canDrink2)

// Filtering the Retail Company with Filter Function 

const retailComapnies1 = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true
    }
})
console.log(retailComapnies1)

// Filtering the Retail Company with Filter Function + Arrow Function

const retailComapnies2 = companies.filter(company => company.category === "Retail")
console.log(retailComapnies2)

//Getting Companies Started at 80's

const eighteensCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eighteensCompanies)

// Getting Companies that last's at least 10 years or more

const tenyearCompany = companies.filter(company => ((company.end - company.start) >= 10))
console.log(tenyearCompany)


// Creating Company names Arrays using MAP function
// Map

const companyName = companies.map(function (company) {
    return company.name
})
console.log(companyName)
// Creating Company names Arrays using MAP function + Arrow function
const companyName1 = companies.map(company => company.name)
console.log(companyName1)
const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap)
const testMap1 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap1)


// sort

// Sort companies by start year

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start)
        return 1
    else
        return -1
})
console.log(sortedCompanies)

// doing by another way 

const sortedCompanies1 = companies.sort((a, b) => a.start > b.start ? 1 : -1)
console.log(sortedCompanies1)
// Sort ages
const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum)

// Ages sum using Reduce Function
const ageSum1 = ages.reduce(function (total, age) {
    return total + age;
}, 0);
console.log(ageSum1)

// Same thing
const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2)

// Get total years for all companies

const totalYear1 = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
