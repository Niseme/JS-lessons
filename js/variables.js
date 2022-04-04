/*
KINTAMIEJI:
const - default iniciavimo budas
let - antirnis budas inicijuoti, jei zinom, kad reiksme tures keistis
var - pas seniausias, geriau nenaudoti

Duomenu tipas: 
- number
- string (tekstas)
- boolean (logine reiksme)
- array (masyvas, sarasas, matrica*)
*/

const skaicius = 1268;
console.log(`${skaicius} labai geras skaicius`);

let pinigai = 12;
console.log(`as turiu ${pinigai} pinigu`);
pinigai = 15;
console.log(`as turiu ${pinigai} pinigu`);

const vardas = 'Petras'
console.log(vardas);

//console.log('laba diena,' + vardas);

const pasisveikinimas = 'laba diena, ' + vardas;
console.log(pasisveikinimas);

const pazymiai = [10, 2, 5, 5, 10];
console.log('pazymiai', pazymiai);

const studentai = ['Petras', 'Jonas', 'Ona'];
console.log(studentai);

const random = [1, 'a', true, ['ok', 'no']];
console.log(random);

//Kintamuju iniciavimas

const skaicius1 = 1;
console.log(skaicius1);
const skaicius2 = 2;
console.log(skaicius2);
const skaicius3 = 3;
console.log(skaicius3);

const text1 = 'vienas';
console.log(text1);
const text2 = 'du';
console.log(text2);
const text3 = 'trys';
console.log(text3);

const sarasas1 = [1, 2, 55, 88, 99];
console.log(sarasas1);
const sarasas2 = [11, 72, 5, 878, 9];
console.log(sarasas2);
const sarasas3 = [14, 24, 545, 884, 949];
console.log(sarasas3);

const textsarasas1 = ['labas', 'rytas', 'as', 'esu', 'tu'];
console.log(textsarasas1);
const textsarasas2 = ['kas', 'tau', 'ryziai', 'grikiai', 'pomidoras'];
console.log(textsarasas2);
const textsarasas3 = ['krabas', 'vakaras', 'ok', 'ne', 'tau'];
console.log(textsarasas3);


//veiksmai su kintamaisiais

const sum = skaicius1 + skaicius2 + skaicius3;
console.log(sum);

const text = text1 + ' ' + text2 + ' ' + text3;
console.log(text);

const skaiciuSarasas = [1, 2, 3, 4, 5]
const veiksmai = skaiciuSarasas[0] - skaiciuSarasas[1] + skaiciuSarasas[2] - skaiciuSarasas[3] + skaiciuSarasas[4];
console.log(veiksmai);

const sarasoSujungimas = textsarasas3 + textsarasas2 + textsarasas1;
console.log(sarasoSujungimas);