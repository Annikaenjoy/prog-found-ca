// LEVEL 1

// Question 1 
var dog = "Poppy";

// Question 2
var person = {
    name: "Monica",
    age: 26,
}

// Question 3 
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of Stock");
}
else {
    console.log("In Stock");
}

// Question 4 
var numbers = [1, 2, 3, 4, 5];

var numberOfNumbers = numbers.length;

for (var i = 0; i < numberOfNumbers; i++) {
    console.log(numbers[i]);
}

// Question 5 
for (var i = 15; i <= 25; i++) {
    console.log(i);
}
// Question 6
for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}
// Question 7 
var pets = [
    // object one
    {
        name: "Luna",
        age: 9,
        colorBlack: false
    },
    // object two
    {
        name: "Peppa",
        age: 7,
        colorBlack: true
    }
];
for (var i = 0; i < pets.length; i++) {
    console.log(pets[i].age);
    console.log(pets[i].colorBlack);
}
// Question 8 
function whatIDontLike(insects) {
var together = "I don't like" + insects;
console.log(together)
}
whatIDontLike(" spiders");

// question 9 
function basketOfApples(basket1, basket2) {
    var sum = basket1 - basket2;
    console.log(sum);
}
basketOfApples(6, 2);

// Question 10
var empty = [];
function emptyArray(yellow) {
    var color = yellow;
    empty.push(yellow);
    console.log(empty.length)
    console.log(empty)
}
emptyArray("yellow");