//variaveis

console.log('VARIAVEIS\n');
let country = "Brasil";
let continent = "América";
let population = 211755692;

console.log("País: " + country);
console.log("Continente: " + continent);
console.log("População: " + population + "\n\n\n");

//tipo de variavel
console.log('TIPO DE VARIAVEL\n');
let isIsland;
if (country === "Brasil") {
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

language = 'portugues';

//operadores
console.log('\n\nOPERADORES\n');
console.log("Metade da população em metade do país: " + population / 2);
population++;
console.log("População mais 1 pessoa: " + population);
let findland = 6000000;
population--;
console.log("Finlanda tem mais população que meu país? ");
console.log(findland > country);
console.log("Meu país tem menos pessoas do que a média mundial: ");
console.log(country < 33000000);
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description + "\n\n");

//declaração if e else
console.log('DECLARAÇÃO IF E ELSE\n');
if (population > 33000000) {
    console.log(`${country} 's population is above average`);
}
else {
    console.log(`${country} population is ${33000000 - population} below average`);
}

console.log("\n\n\n");

//Operadores lógicos
console.log('OPERADORES LÓGICOS\n');
if ((language === "ingles") && (population < 55000000) && (!isIsland))
    console.log(`You should live in ${country} :)`);
else
    console.log(`${country} does not meet your criteria :(\n\n\n`);

//Declaração switch
console.log('DECLARAÇÃO SWITCH\n');
if ((language === 'chines') || (language === 'mandarim'))
    console.log('MOST number of native speakers!');
switch (language) {
    case 'chines':
        break;
    case 'mandarim':
        break;
    case 'espanhol':
        console.log('2nd place in number of native speakers');
        break;
    case 'ingles':
        console.log('3rd place');
        break;
    case 'hindu':
        console.log('Number 4');
        break;
    case 'arabe':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

console.log('\n\n');

//Operador de condição
console.log('OPERADOR DE CONDIÇÃO\n');
const maiorpopulação = population > 33000000 ? 'above' : 'below';
console.log(`${country}'s population is ${maiorpopulação} average`);


//tipos de Coesão e Conversão
console.log('TIPOS DE COESÃO E CONVERSÃO\n');
console.log('9' - '5');  //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

console.log('\n\n');

//Operadores de igualdade : == vs. ===
console.log('OPERADORE DE IGUALDADE\n');
/*
numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1)
    console.log('More than 1 border');
else
    console.log('No borders');
*/

numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1)
    console.log('Only 1 border!');
else if (numNeighbours > 1)
    console.log('More than 1 border');
else
    console.log('No borders');

console.log('\n\n');

//coding challenge 1#
console.log('CODING CHALLENGE 1#\n');
let Markmassa = 78;
let Markaltura = 1.69;
let Johnmassa = 92;
let Johnaltura = 1.95;

MarkIDC = Markmassa / Markaltura ** 2;
JohnIDC = Johnmassa / Johnaltura ** 2;
console.log("Mark's BMI: " + MarkIDC);
console.log("John's BMI: " + JohnIDC);

console.log('\n\n');

//coding challenge 2#
console.log('CODING CHALLENGE 2#\n');
if (MarkIDC > JohnIDC) {
    console.log(`Mark's BMI(${MarkIDC}) is higher than John's(${JohnIDC})!`);
}
else if (MarkIDC < JohnIDC) {
    console.log(`John's BMI(${JohnIDC}) is higher than Mark's(${MarkIDC})!`);
}
else {
    console.log(`Mark's BMI(${MarkIDC}) and John's BMI(${JohnIDC}) are the same!`);
}

console.log('\n\n');

//coding challenge 3#
console.log('CODING CHALLENGE 3#\n');
let Dolphins1 = Number(prompt(`Digite a pontuação dos Dolphins no jogo 1`));
let Koalas1 = Number(prompt(`Digite a pontuação dos Koalas no jogo 1`));
let Dolphins2 = Number(prompt(`Digite a pontuação dos Dolphins no jogo 2`));
let Koalas2 = Number(prompt(`Digite a pontuação dos Koalas no jogo 2`));
let Dolphins3 = Number(prompt(`Digite a pontuação dos Dolphins no jogo 3`));
let Koalas3 = Number(prompt(`Digite a pontuação dos Koalas no jogo 3`));

dolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
koalas = (Koalas1 + Koalas2 + Koalas3) / 3;

if ((koalas > dolphins) && (koalas > 100))
    console.log('Os Koalas ganharam o troféu!');
else if ((koalas < dolphins) && (dolphins > 100))
    console.log('Os Dolphins ganharam o troféu!');
else if ((koalas === dolphins) && (koalas > 100) && (dolphins > 100))
    console.log('Os times dividirão o troféu!');
else
    console.log('Nenhum time ganhará o troféu...');

console.log('\n\n');

//coding challenge 4#
console.log('CODING CHALLENGE 4#\n');
let bill = Number(prompt('Qual o valor da conta?'));

let tip = (bill >= 50) && (bill <= 300) ? bill * (15 / 100) : bill * (20 / 100);
console.log(`A conta foi de R$${bill}, a gorjeta de R$${tip} e o valor total é de R$${bill + tip}`);