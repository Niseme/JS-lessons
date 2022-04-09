//IF 
7 > 5
if (a === b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

//zodiz atvirksciai
let text = 'hello'
let newText = '';
for (let i = 1; i <= text.length; ++i) {
    newText = newText + text[text.length - i];
}
console.log(newText);

for (let i = text.length; i > 0; i--) {
    newText = newText + text[i - 1];
}
console.log(newText);

//WHILE
const pazymiai = [10, 10, 5, 10, 10];
let suma = 0;
let i = 0;
while (i < pazymiai.length) {
    suma += pazymiai[i]
    i++;
    console.log(i, suma);
}

//FOR-OF
const pazymiai = [10, 10, 5, 10, 10];
let suma = 0
for (const pazymys of pazymiai) {
    suma += pazymys;
    console.log(suma);
}

//FOREACH
const pazymiai = [10, 10, 5, 10, 10];
let sum = 0;
pazymiai.forEach((pazymys, i) => {
    sum += pazymys;
    console.log(sum);
});

//rasti kas kazkelinta raide (kas 2,3..)
let raides = ''
for (let i = step - 1; i < text.length; i += step) {
    const raide = text[i];
    raides += raide;
}

return raides;

//rasti didziausia skaiciu
let biggestNumber = list[0];
for (let i = 0; i < list.length; i++) {
    const number = list[i];
    if (number > biggestNumber) {
        biggestNumber = number;
    }
}

//Raidziu atrana (kas 2,3), su teigiamu ir neigiamu zingsniu
let raides = ''
if (step > 0) {
    for (let i = step - 1; i < text.length; i += step) {
        const raide = text[i];
        raides += raide;
    }
}
if (step < 0) {
    for (let i = text.length + step; i >= 0; i += step) {
        const raide = text[i];
        raides += raide;
    }
}