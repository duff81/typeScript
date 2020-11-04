let myName: string = "Michael Greene";
const numberOfStates: number = 50;
let simpleMath: number = (5 + 4); //simpleMath function as a place holder for 5 added to 4;

function sayHello ():void {
    alert ("Hello World!")
    
}

sayHello ()

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("james", 18)
checkAge("John", 17);



function checkAge(name:string, age:number):void {
    let nope = "Sorry " + name + ", you aren't old enough to view this page!";
    //let yep = name + " come on in!"; trying to add something if they could get in
    if (age >= 21) {
        //alert(yep);
    }
    else if (age < 21) {
        alert(nope);
    }
    
}

let i: number;
let favVeggies: string[] = ['aspargus', 'kale', 'cauliflower', 'brocolli']
for (i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
};

interface pet {
    name: string,
    breed: string
}
let pet: pet = {
    name: 'Felix',
    breed: 'bunny'
}

console.log(pet)

interface Family {
    name: string,
    age: number
}

let family: Array<Family> = [
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

function getLength (anyWord:string) {
    return anyWord.length;
}
let anyWord: number = getLength('Hello World')
//console.log(anyWord) wanted to see how many letters
if (anyWord%2 === 0){
    console.log('The world is nice and even!')}
else if (anyWord% 2 != 0) {
    console.log('The world is an odd place')}

 


