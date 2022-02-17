//modo 'strict'
console.log("MODO 'STRICT");

'use strict';

let hasDriversLincense = false;
const passTest = true;

if (passTest)
    hasDriversLincense = true;
if (hasDriversLincense)
    console.log('I can drive! :D');

console.log('\n\n\n');

//funções
console.log("FUNÇÕES");

const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const Brasil = describeCountry('Brazil', 200, 'Brasília');
const EUA = describeCountry('United States of America', 327, 'Washigton');
const Japão = describeCountry('Japan', 126, 'Tokyo');

console.log(Brasil);
console.log(EUA);
console.log(Japão);

console.log('\n\n\n');

//Declaração de Funções vs Expressões vs Funções Arrow
console.log('DECLARAÇÃO DE FUNÇÕES VS EXPRESSÕES VS FUNÇÕES ARROW');

console.log('DECLARAÇÃO DE FUNÇÕES');
function percentageOfWorld1(population) {
    return `${Math.round(((population / 7900) * 100) * 100) / 100}%`;
}
const China = `China has 1397 million people, so it's about ${percentageOfWorld1(1397)} of the world population`;
const Russia = `Russia has 145 million people, so it's about ${percentageOfWorld1(145)} of the world population`;
const Alemanha = `Alemanha has 82 million people, so it's about ${percentageOfWorld1(82)} of the world population`;
console.log(China);
console.log(Russia);
console.log(Alemanha, '\n\n');

console.log('DECLARAÇÃO DE EXPRESSÕES');
const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so it's about ${Math.round(((population / 7900) * 100) * 100) / 100}% of the world population`;
}
const India = percentageOfWorld2('India', 1409);
const Colombia = percentageOfWorld2('Colombia', 46);
const Portugal = percentageOfWorld2('Portugal', 4);
console.log(India);
console.log(Colombia);
console.log(Portugal, '\n\n');

console.log('FUNÇÕES ARROW');
const percentageOfWorld3 = (country, population) => {
    return `${country} has ${population} million people, so it's about ${Math.round(((population / 7900) * 100) * 100) / 100}% of the world population`;
}
console.log(percentageOfWorld3('Coreia', 51));

console.log('\n\n\n');
//Funções chamando outras funções
console.log('FUNÇÕES CHAMANDO OUTRAS FUNÇÕES');
const describePopulation = function (country, population) {
    return percentageOfWorld2(country, population);
}
console.log(describePopulation('Nova Zelândia', 4));
console.log(describePopulation('Canada', 38));
console.log(describePopulation('África do Sul', 55));


console.log('\n\n\n');
//Introdução a arrays
console.log('INTRODUÇÃO A ARRAYS');
var populations = [55, 38, 4, 51];
console.log("Array 'populations' tem 4 elementos: " + (populations.length == 4));
percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages)


console.log('\n\n\n');
//Operações básicas de array(métodos)
console.log('OPERAÇÕES BÁSICAS DE ARRAY(MÉTODOS)');
var neighbours = ['Brasil', 'Argentina', 'Paraguai'];
console.log('PUSH: adiciona como ultimo array');
neighbours.push('Utopia');
console.log(neighbours);
console.log('POP: exclui o ultimo array');
neighbours.pop('Utopia');
console.log(neighbours);
console.log('UNSHIFT:adiciona como primeiro array');
neighbours.unshift('China');
console.log(neighbours);
console.log('SHIFT: exclui o primeiro array');
neighbours.shift('China');
console.log(neighbours);
console.log('INCLUDES: verifica se existe');
if (!neighbours.includes('Alemanha')) {
    console.log('Probably not a central European country :D');
}
console.log('INDEXOF: numero do array')
neighbours[neighbours.indexOf('Brasil')] = 'Colombia';
console.log(neighbours);

console.log('\n\n\n');
//Introdução a objetos
console.log('INTRODUÇÃO A OBJETOS');
myCountry = {
    country: "Brasil",
    capital: "Brasilia",
    language: "Portuguese",
    population: 200,
    neighbours: ['Argentina', 'Paraguai', 'Equador']
}
console.log(myCountry);

console.log('\n\n\n');
//Dot vs.Bracket Notation
console.log('DOR VS. BRACKET NOTATION');
var frase = `${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(frase + '\n\n');
myCountry.population += 2;
frase = `${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(frase + '\n\n');
myCountry['population'] -= 2;
frase = `${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(frase);

console.log('\n\n\n');
//Metodos de objetos
console.log('METODOS DE OBJETOS');
myCountry = {
    country: "EUA",
    capital: "Washington",
    language: "English",
    population: 327,
    neighbours: ['Canada', 'Mexico'],
    isIsland: this.neighbours.length == 0,
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        return this.isIsland;
    }
}
console.log(myCountry.describe());
console.log('Is a island:' + myCountry.checkIsland());

console.log('\n\n\n');
//O loop for
console.log('O LOOP FOR');
for (let a = 1; a <= 50; a++) {
    console.log(`Voter number ${a} is currently voting`);
}

console.log('\n\n\n');
//Loop de array, break e continue
console.log('LOOP DE ARRAY, BREAK E CONTINUE');
let percentages2 = [];
for (let b = 0; b < populations.length; b++) {
    console.log(percentageOfWorld1(populations[b]));
}

console.log('\n\n\n');
//Loop em ordem descrescente e loops dentro de lopps
console.log('LOOP EM ORDEM DESCRESCENTE E LOOPS DENTRO DE LOOPS');
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let c = 0; c < listOfNeighbours.length; c++) {
    for (let d = 0; d < listOfNeighbours[c].length; d++) {
        console.log('Neighbour: ' + listOfNeighbours[c][d]);
    }
}

console.log('\n\n\n');
//O loop while
console.log('O LOOP WHILE');
let percentages3 = [];
let e = 0;
while (e < populations.length) {
    console.log(percentageOfWorld1(populations[e]));
    e++;
}

console.log('\n\n\n\n\n');
//Coding Challenge 1#
console.log('CONSOLE CHALLENGE 1#');
const calcAverage = (score1, score2, score3) => {
    const media = (score1 + score2 + score3) / 3
    return media;
}
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win(${avgDolphins} vs.${avgKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win(${avgKoalas} vs.${avgDolphins})`;
    }
    else return 'No team wins';
}
console.log(checkWinner(avgDolphins, avgKoalas));

console.log("\n\n\n");
//Coding Challenge 2#
console.log('CODING CHALLENGE 2#');
const calcTip = function (bill) {
    if ((bill > 50) && (bill < 300)) {
        tip = bill * (15 / 100);
    }
    else {
        tip = bill * (20 / 100);
    }
    return tip;
}
let bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
total = [];
for (var i = 0; i < bills.length; i++) {
    total[i] = bills[i] + tips[i];
    console.log(total[i]);
}

console.log('\n\n\n');
//Coding Challenge 3#
console.log('CODING CHALLENGE 3#');
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        var BMI = this.mass / this.height ** 2;
        return BMI;
    }
}
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        var BMI = this.mass / this.height ** 2;
        return BMI;
    }
}

const JohnBMI = John.calcBMI().toFixed(1);
const MarkBMI = Mark.calcBMI().toFixed(1);
console.log('John BMI: ' + JohnBMI)
console.log('Mark BMI: ' + MarkBMI)


if (JohnBMI > MarkBMI) {
    console.log(`John's BMI ($ JohnBMI}) is higher than Mark's (${MarkBMI})!"`);
} else if (MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!"`);
} else {
    console.log(`Mark's BMI (${MarkBMI}) and John's BMI (${JohnBMI}) are equal`);
}


console.log('\n\n\n');
//Coding Challenge 4#
console.log('CODING CHALLENGE 4#');
let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let total2 = [];

for (let i = 0; i < bills2.length; i++) {
    tips2[i] = calcTip(bills2[i]);
    total2[i] = bills2[i] + tips2[i];
    console.log(total2[i]);
}

const calcAverage2 = function (arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    total = sum / arr.length;
    return total;
}
console.log('------------------------------')
console.log(calcAverage2(total2))