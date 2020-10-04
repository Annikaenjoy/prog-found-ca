//LEVEL 2

// Question 1
for (i = 15; i < 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Question 2
function whatIAm (){
    console.log("I am a function");
}
var innerFunction = whatIAm; 
function outerFunction(argument) {
    argument();
}
outerFunction(whatIAm);