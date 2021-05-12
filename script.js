/*
let js = "amazing"
if (js ==="amazing") alert("JavaScript is FUN")  
40 + 8 + 23 -10;
console.log(40 + 8 + 24 - 10);
console.log("Testando porra")

console.log("Jonas");
console.log(23)

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob)
*/


/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'YES!'
console.log(typeof javaScriptIsFun)

let year; 
console.log(year);
console.log (typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); 
*/

/* let age = 30; 
age = 31;

const birthYear = 1991; 
birthYear = 1990;

var job = "programmer";
job = 'teacher' 

lastName = "Schmedtmann";
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas *2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);

let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x*= 4; // x = x * 4 = 100 
x++; // x = x + 1
x--;
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <= 
console.log(ageSarah >= 18);

*/
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y; 
x = y = 25-10-5; // x = y = 10 
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge); 

*/

/*
const massMark = 95;
const heightMark = 1.10;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)

} else 

{console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`)

}
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); 
console.log(Number("Jonas"));

console.log(String(23), 23); 

// type coercion 
console.log('I am' + 23 + ' years old'); 
console.log('23' - '10' - 3); 
console.log('23' * '2'); 
console.log('23' / '2'); 
console.log('23' > '18');

// Soma junta strings, subtração faz operação matemática
let n = "1" + 1; 
n = n -1; 
console.log(n)
*/ 

// 5 falsy values: 0, "", undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));
*/
/*
const money = 0; 
if (money) { 
   
    console.log("Don't spend it all");
} else { 
    console.log("You should get a job!");
}

*/


let golfinhoPlacar = (100 + 5000131 + 515) / 3  
let coalaPlacar = (8 + 5151 + 55) / 3 

if (golfinhoPlacar === coalaPlacar){console.log("Empate")}
if (coalaPlacar < golfinhoPlacar) {console.log("Vitória do Coala")}
if (golfinhoPlacar < coalaPlacar) {console.log("Vitória do Golfinho")}
if (golfinhoPlacar && coalaPlacar <= 100){console.log("Draw Caralho")} 


console.log(`Golfinho placar é ${golfinhoPlacar}`)
console.log(`Coala placar é ${coalaPlacar}`)


/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName} , a ${year - birthYear} years old ${job}!`
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log("Sarah can start driving license")
} else { 
    const yearsLeft = 18 - age; 
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);

}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21; 
}
console.log(century);

*/

//Function declaration

/*
function calcAge1(birthYear) { 
    return 2037 - birthYear;
}


// Function expression
const calcAge2 = function (birthYear) { 
    return 2037 - birthYear;
}

const age2 = calcAge2(1991); 



// Calcular Número de Cigarros no Maço 


// Meu exemplo de function com if


const CalculadoraDeCigarro = function(Cigarros) { 
    if (Cigarros > 1 && Cigarros < 20) {
        console.log(`Pode fumar meu bom! Ainda tem ${Cigarros} Cigarros`)
    } else { 
        console.log("Acabou o cigarrim meu bom")}
}
*/


// Exercício de Funções - Usando Arrow Function e Function declarada 

/*
const CalcMédia = (a, b, c) => (a + b +c) / 3 

MédiaGolfinho = CalcMédia(99, 116, 99)
MédiaKoala = CalcMédia(65, 15, 49)

const CalcVence = function(Golfinhos, Koalas)
{ if (Koalas > (Golfinhos * 2)) 
    console.log(`Vitória dos Koalas - ${MédiaKoala} x ${MédiaGolfinho}`)
else if (Golfinhos > (Koalas *2)) 
console.log(`Vitória dos Golfinhos - ${MédiaGolfinho} x ${MédiaKoala}`)
else
console.log("Ninguém Ganhou")
}

console.log(MédiaGolfinho)
console.log(MédiaKoala)


CalcVence(MédiaGolfinho, MédiaKoala)
*/
/*
// Add Elements
const friends = ['Michael', 'Steven', 'Peter']
const newLenght = friends.push('Jay');
console.log(friends)
console.log(newLenght)

friends.unshift('John');
console.log(friends);
// Remove Elements

friends.pop(); //Last Elements
const popped = friends.pop();

console.log(friends)
console.log(popped);

friends.shift();  // First
console.log(friends) 

// Check Elements
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
//E6S Method
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// You can write conditionals with it 
/*
if (friends.includes('Steven')){
    console.log("Steven is your friend")
}
*/ 


/*
let billValue1 = 125
let billValue2 = 555 
let billValue3 = 44

function calcTip(billValue1)
{
    if (billValue1 > 50 && billValue1 <= 300) 
 return ((15 * billValue1) / 100)

 else 
 return ((20 * billValue1) / 100)
}

calcTip(billValue1)

let bills = [billValue1, billValue2, billValue3]
let tips = [calcTip(bills[0]), calcTip(billValue2), calcTip(billValue3)]
let total = [calcTip(billValue1) + billValue1, calcTip(billValue2) + billValue2, calcTip(billValue3) + billValue3]

console.log(bills)
console.log(tips)
console.log(total)

*/

/*
const jonas = { 
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher', 
    friends: ['Michel', 'Peter', 'Steven']
}
console.log(jonas)
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name'; 
console.log(jonas['first' + nameKey]); 
console.log(jonas['last' + nameKey]); 

const interestedIn = prompt('What do you want to know about Jonas? Choose Between firstName, lastName, age, job, and friends')

console.log(jonas[interestedIn])
*/

// Exercício sobre colocar funções dentro de um objeto 
/*
let mark = { 
    name: "Mark",
    mass: 78, 
    height: 1.69, 
   CalcIMC: function() { 
       this.IMC = this.mass / this.height ** 2; 
       return this.IMC
   }
       
} 
mark.CalcIMC()


let john = { 
    name: "John",
    mass: 95, 
    height: 1.95,
    CalcIMC: function() { 
        this.IMC = this.mass / this.height ** 2; 
        return this.IMC
}
} 
john.CalcIMC()

if (john.IMC > mark.IMC) { 
    console.log(`${john.name} IMC ${john.IMC} is Higher than ${mark.name}IMC ${mark.IMC}`)
} else { 
    console.log(`${mark.name} IMC (${mark.IMC}) is Higher than ${john.name}IMC (${john.IMC})`)
}

*/



