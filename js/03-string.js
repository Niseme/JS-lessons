/*
STRING:

kabutes:
- viengubos '
- dvigubos "
- backtick'as `

Teksto simboliu kiekis
 */
const kabutes = 'cia yra kabutes (\') ';
console.log(kabutes);

const clientName = 'Maryte';
const clientAge = 87;
console.log('Client ' + clientName + ' is ' + clientAge + ' years old');

console.log(`Client ${clientName} is ${clientAge} years old`);

const n1 = 7;
const n2 = 5;

const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const abc = 'sds\'d\\f' //jei norim / kaip simbolio, rasom \\
const abcDydis = abc.length;
console.log(abcDydis);