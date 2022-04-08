const pirmas = 7;
const antras = 5;

function suma(a, b) {
    return a + b;
}

const r1 = suma(pirmas, antras);
console.log(r1);

function atimtis(a, b) {
    return a - b;
}

const r2 = atimtis(pirmas, antras);
console.log(r2);

//kintamajam priskirta naonimine funcija
const dalyba = function (a, b) { return a / b };
const r3 = dalyba(pirmas, antras);
console.log(r3);

//arrow funcija
const daugyba = (a, b) => { return a * b };
const r4 = daugyba(pirmas, antras);
console.log(r4);

//arrow funcija, jei yra 1 procedura, galim istrinti {} ir return
const daugyba2 = (a, b) => a * b;
const r5 = daugyba2(pirmas, antras);
console.log(r5);


//arrow funcija, jei parametras vienas, nereikia skliaustuku                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
const kvadratu = a => a * a;
const r6 = kvadratu(pirmas);
console.log(r6);


const tekstas = 'Labas rytas';

function pirmaRaide(text) {
    return text[0];
}
console.log(pirmaRaide(tekstas));

const pirmaRaide1 = function (text) {
    return text[0];
}
console.log(pirmaRaide1(tekstas));

const pirmaRaide2 = text => {
    return text[0]
}
console.log(pirmaRaide2(tekstas));

const pirmaRide3 = text => text[0];
console.log(pirmaRaide2(tekstas));