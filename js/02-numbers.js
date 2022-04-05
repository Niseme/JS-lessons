/*
NUMBERS:
- normalus:
    - sveikieji
    - desimatianiai
- nenormalus:
    - NaN (Not a number)
    - Infinity (+, -)

- Operatoriai:
++ - padidinimas 1 vnt
-- - sumazinimas 1 vnt
+= - saves padidinimas 1 vnt, 
-= - saves sumazinimas 1 vnt
/=
*=
 */

const sveikasis = 5;
const desimatianis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 'labas';
const antras = 'rytas';

const dalmuo = pirmas / antras;

console.log(dalmuo);

console.log('number number');
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('string number');
console.log('7' + 5);
console.log('7' - 5);
console.log('7' * 5);
console.log('7' / 5);

console.log('string (number) string (number)');
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');

console.log('string string');
console.log('a' + 'b');
console.log('a' - 'b');
console.log('a' * 'b');
console.log('a' / 'b');

console.log('number true');
console.log('7' + true);
console.log('7' - true);
console.log('7' * true);
console.log('7' / true);

console.log('number false');
console.log('7' + false);
console.log('7' - false);
console.log('7' * false);
console.log('7' / false);

console.log('true number');
console.log(true + 5);
console.log(true - 5);
console.log(true * 5);
console.log(true / 5);

console.log('false number');
console.log(false + 5);
console.log(false - 5);
console.log(false * 5);
console.log(false / 5);

console.log('--------------');
console.log(2 ** 4);
console.log(7 % 4);

console.log('--------------');
let pinigineAfter = 0;
console.log(pinigineAfter++);
console.log(pinigineAfter++);
console.log(pinigineAfter++);
console.log(pinigineAfter++);

console.log('--------------');
let pinigineBefore = 0;
console.log(++pinigineBefore);
console.log(++pinigineBefore);
console.log(++pinigineBefore);
console.log(++pinigineBefore);

console.log('--------------');
let skolaAfter = 0;
console.log(skolaAfter--);
console.log(skolaAfter--);
console.log(skolaAfter--);
console.log(skolaAfter--);

console.log('--------------');
let skolaBefore = 0;
console.log(--skolaBefore);
console.log(--skolaBefore);
console.log(--skolaBefore);
console.log(--skolaBefore);

console.log('--------------');
let a = 0;
console.log(a);
a = a + 1;
console.log(a);
a++;
console.log(a);
++a;
console.log(a);


console.log('--------------');
let b = 0;
console.log(b);
b = b + 3;
console.log(b);
b += 3
console.log(b);

console.log('--------------');
let c = 16;
const d = 2;
c /= d;
console.log(c);

