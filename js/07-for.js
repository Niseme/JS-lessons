/*
 */
/*const pazymiai = [10, 10, 5, 10, 10];
let sum = 0
for (let i = 0; i < pazymiai.length; i++) {
    sum += pazymiai[i]
}
const vidurkis = sum / pazymiai.length;
console.log('Vidurkis:', vidurkis);*/

//suma nuo 0 iki 0

/*let sum = 0;
for (let i = 0; i <= 0; i++) {
    sum += i
}
console.log(sum);*/

//suma nuo 0 iki 4

/*let sum = 0;
for (let i = 0; i <= 4; i++) {
    sum += i
}
console.log(sum);*/

//suma nuo 4 iki 0
/*
let sum = 0;
for (let i = 4; i >= 0; i--) {
    sum += i
}
console.log(sum);*/


//zodiz atvirksciai
//let text = 'hello'
//let newText = '';
/*for (let i = 1; i <= text.length; ++i) {
    newText = newText + text[text.length - i];
}
console.log(newText);*/

/*for (let i = text.length; i > 0; i--) {
    newText = newText + text[i - 1];
}
console.log(newText);*/

/*//WHILE
const pazymiai = [10, 10, 5, 10, 10];
let suma = 0;
let i = 0;
while (i < pazymiai.length) {
    suma += pazymiai[i]
    i++;
    console.log(i, suma);
}*/

//FOR-OF
/*const pazymiai = [10, 10, 5, 10, 10];
let suma = 0
for (const pazymys of pazymiai) {
    suma += pazymys;
    console.log(suma);
}*/

/*//FOREACH
const pazymiai = [10, 10, 5, 10, 10];
let sum = 0;
pazymiai.forEach((pazymys, i) => {
    sum += pazymys;
    console.log(sum);
});*/

//FOR-IN skirtas objektams, bet ne masyvams

/*//Suskaiciuoti kiek nurodytame intervale yra skaiciu, kurie dalinas be liekanos is 3, 5, 7

function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++
        }
    }
    return `skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${count} vienetai`
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));
console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(8, 31, 7));
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 5));
console.log(liekana(-18, 18, 7));
*/


/*//Funkcija daugyba

function daugyba(a, b) {

    if (typeof a !== "number") {
        return `Error, pirmas parametras turi buti skaicius`;
    }
    if (isNaN(a)) {
        return `Error, pirmas parametras turi buti skaicius`;
    }
    if (a === Infinity || a === -Infinity) {
        return `Error, pirmas parametras turi buti skaicius`;
    }

    if (typeof b !== "number") {
        return `Error, antras parametras turi buti skaicius`;
    }
    if (isNaN(b)) {
        return `Error, antras parametras turi buti skaicius`;
    }
    if (b === Infinity || b === -Infinity) {
        return `Error, antras parametras turi buti skaicius`;
    }

    return a * b
};


console.log(daugyba(7, 'labas'));
console.log(daugyba('labas', 7));
console.log(daugyba('', 7));
console.log(daugyba(7, ''));
console.log(daugyba(7, 5));
console.log(daugyba(NaN, 5));
console.log(daugyba(7, NaN));
console.log(daugyba(Infinity, 5));
console.log(daugyba(7, -Infinity));
*/

/*//Num Size

function numSize(num) {
    if (typeof num !== 'number'
        || !isFinite(num)) {
        return `netinkamas tipas`
    }
    if (typeof num === 'number') {
        const numString = String(num)
        let size = numString.length;
        //nustatome ar skaicius yra desimtainis, reiskai turi kableli
        if (num % 1 !== 0) {
            size--;
        }
        if (num < 0) {
            size--;
        }

        return size;
    }
}

console.log(numSize(5));
console.log(numSize(55.5));
console.log(numSize(-55.5));
console.log(numSize(true));
console.log(numSize("djkgh"));
console.log(numSize(NaN));
console.log(numSize(Infinity));
console.log(numSize(-Infinity));*/

/*//didziausias skaicius sarase

function bigNum(list) {
    if (typeof list !== 'object') {
        return `klaida`;
    }
    if (list.length === 0) {
        return `sarasas negali buti tuscias`;
    } else if (list.length === 1) {
        return list[0];
    }

    let biggestNumber = list[0];
    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    return biggestNumber;
}
console.log(bigNum([5]));
console.log(bigNum([1, 2, 3, 5]));
console.log(bigNum(['pomidoras']));
console.log(bigNum([]));
console.log(bigNum([-1, -5, -8]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([65, 55, -96, -411]));
console.log(bigNum([-1, -5, -8]));
console.log(bigNum([]));*/


/* // didziausias skaicius, kai masyve yra ne tik skaiciai
function bigNum(list) {
    if (typeof list !== 'object') {
        return `klaida`;
    }
    if (list.length === 0) {
        return `sarasas negali buti tuscias`;
    }

    let biggestNumber = -Infinity;
    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number !== 'number' || !isFinite) {
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    if (biggestNumber === -Infinity) {
        return `Error, sarase nera nei vieno baigtinio skaiciaus`
    }

    return biggestNumber;
}
console.log(bigNum(['x']));
console.log(bigNum(['x', true, [1, 12]]));
console.log(bigNum(['x', 1, 2, 3, 5]));*/

//letters

/*function letters(text, step) {
    if (typeof text !== 'string') {
        return `textas netinkamo tipo`;
    }
    if (typeof step !== 'number' || isNaN(step) || step === Infinity || step === -Infinity) {
        return `zingsnis netinkamo tipo`;
    }
    if (step % 1 !== 0) {
        return `zingsnis turi buti sveikas skaicius`;
    }
    if (step === 0) {
        return `0 netinkamas zingsnis`;
    }
    if (text.length < step) {
        return `zodis per trumpas`;
    }
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

    return raides;
}

console.log(letters("elizabeth", -2));
console.log(letters("abcdefg", 2));
console.log(letters("abcdefghijkl", 3));
console.log(letters("abc", 0));
console.log(letters("abc", 4));
console.log(letters(1561, 2));
console.log(letters(1561, 'sdf'));
*/





























/* bet kokie uzdaviniai kartojimui*/
/*
function skaicius(num) {
    if (typeof num !== 'number') { return `tai nera skaicius` };
    if (isNaN(num)) { return `tai yra NaN` };
    if (num === Infinity || num === -Infinity) { return `tai nera  baigtinis skaicius` };
    return num;
}

console.log(skaicius(NaN), '--->', 'tai yra NaN');
console.log(skaicius(Infinity), '--->', 'tai nera  baigtinis skaicius');
console.log(skaicius(-Infinity), '--->', 'tai nera  baigtinis skaicius');
console.log(skaicius(true), '--->', 'tai nera skaicius');
console.log(skaicius("abc"), '--->', 'tai nera skaicius');
console.log(skaicius(5), '--->', '5');*/

/*function countNumber(num) {
    if (typeof num !== 'number') { return `tai nera skaicius` };
    if (isNaN(num)) { return `tai yra NaN` };
    if (num === Infinity || num === -Infinity) { return `tai nera  baigtinis skaicius` };
    if (num % 1 !== 0) {
        return --num.toString().length;
    }
    return num.toString().length;
}
console.log(countNumber(NaN), '--->', 'tai yra NaN');
console.log(countNumber(Infinity), '--->', 'tai nera  baigtinis skaicius');
console.log(countNumber(-Infinity), '--->', 'tai nera  baigtinis skaicius');
console.log(countNumber(true), '--->', 'tai nera skaicius');
console.log(countNumber("abc"), '--->', 'tai nera skaicius');
console.log(countNumber(5), '--->', '1');
console.log(countNumber(5.555), '--->', '4');*/

/*function bigNum(list) {
    if (typeof list !== 'object') {
        return `klaida`;
    }
    if (list.length === 0) {
        return `sarasas tuscias`
    }

    let maxNumber = list[0];
    for (let i = 0; i < list.length; i++) {
        const number = list[i]
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}
console.log(bigNum([5]));
console.log(bigNum([1, 2, 3, 5]));
console.log(bigNum('pomidoras'));
console.log(bigNum([]));
console.log(bigNum([-1, -5, -8]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([65, 55, -96, -411]));
console.log(bigNum([-1, -5, -8]));
console.log(bigNum([]));
*/
