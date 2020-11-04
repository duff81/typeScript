let myName = "Michael Greene"
const numberOfStates = "50"
let simpleMath = (5 + 4); //simpleMath function as a place holder for 5 added to 4;

/*let sayHello = "Hello World!";
console.log(sayHello);*/

//alert(sayHello); wrong!

function sayHello () {
    alert ("Hello World!")
    
}

sayHello ()

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("james", 18)
checkAge("John", 17);



function checkAge(name, age) {
    let nope = "Sorry " + name + ", you aren't old enough to view this page!";
    //let yep = name + " come on in!"; trying to add something if they could get in
    if (age >= 21) {
        //alert(yep);
    }
    else if (age < 21) {
        alert(nope);
    }
    
}


let favVeggies = ['aspargus', 'kale', 'cauliflower', 'brocolli']
for (i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
};


let pet = {
    name: 'Felix',
    breed: 'bunny'
}

console.log(pet)

let family = [
    {
        name: "Seymour",
        age: 7
    },
    {
        name: "John",
        age: 24
    },
    {
        name: "Pete",
        age: 16
    },
    {
        name: "Trish",
        age: 99

    },
    {
        name: "Mary",
        age: 18
    }
]
    for (let i = 0; i < family.length; i++) {
        console.log(family[i])
    
checkAge(family[i].name, family[i].age)
}

function getLength (anyWord) {
    return anyWord.length;
}
let anyWord= getLength('Hello World')
//console.log(anyWord) wanted to see how many letters
if (anyWord%2 === 0){
    console.log('The world is nice and even!')}
else if (anyWord% 2 != 0) {
    console.log('The world is an odd place')}

 


