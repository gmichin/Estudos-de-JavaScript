//variaveis
/*
let country = "Brasil";
let continent = "América";
let population = 211755692;

console.log("País: " + country);
console.log("Continente: " + continent);
console.log("População: " + population + "\n\n\n");

//tipo de variavel

let isIsland;
if (country == "Brasil") {
    isIsland = true;
}
else {
    isIsland = false;
}

let language;

console.log("Tipo de variavel de isIsland: " + typeof isIsland);
console.log("Tipo de variavel de population: " + typeof population);
console.log("Tipo de variavel de country: " + typeof country);
console.log("Tipo de variavel de language: " + typeof language);

language = "português";


//operadores

console.log("\n\nMetade da população em metade do país: " + population / 2);
population++;
console.log("População mais 1 pessoa: " + population);
let findland = 6000000;
population--;
console.log("Finlanda tem mais população que meu país? ");
console.log(findland > country);
console.log("Meu país tem menos pessoas do que a média mundial: ");
console.log(country < 33000000);
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log("\n\n" + description+ "\n\n");


if (population > 33000000) {
    console.log(`${country} 's population is above average`);
}
else {
    console.log(`${country} population is ${33000000 - population} below average`);
}
*/


//coding challenge 1#

let Markmassa = 78;
let Markaltura = 1.69;
let Johnmassa = 92;
let Johnaltura = 1.95;

MarkIDC = Markmassa / Markaltura ** 2;
JohnIDC = Johnmassa / Johnaltura ** 2;


//coding challenge 2#

if (MarkIDC > JohnIDC) {
    console.log(`Mark's BMI(${MarkIDC}) is higher than John's(${JohnIDC})!`);
}
else if (MarkIDC < JohnIDC) {
    console.log(`John's BMI(${JohnIDC}) is higher than Mark's(${MarkIDC})!`);
}
else {
    console.log(`Mark's BMI(${MarkIDC}) and John's BMI(${JohnIDC}) are the same!`);
}

