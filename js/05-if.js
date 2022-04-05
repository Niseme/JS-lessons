/*
IF

Sablonai:
- if () {}
- if () {} else {}
- 

Palyginimo operatoriai:
- visi: <, >, <=, >=, ==, !=, ===, !==
- naudotini:<, >, <=, >=, ===, !==
- NEnaudotini: ==, !=
*/

const a = 7;
const b = 5

7 > 5

if (a === b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

const tt = 'labas';
console.log(tt.length);
const ee = [1, 2, 5];
console.log(ee.length);

const day = 4;
if (day === 1) {
    console.log('Pirmadienis');
} else if (day === 2) {
    console.log('Antradienis');
} else if (day === 3) {
    console.log('treciadienis');
}
else if (day === 4) {
    console.log('ketvirtadienis');
}
else if (day === 5) {
    console.log('penktadienis');
}
else if (day === 6) {
    console.log('sestadienis');
}
else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}


console.log('----------------------');

const akiuSpalva = 'balta'

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('melynakiai megsta melynes');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('rudaakiai yra melagiai');
        } else {
            if (akiuSpalva === 'raudona') {
                console.log('tu pavardges');
            } else {
                console.log('rinkis kita spalva');
            }
        }
    }
}

console.log('----------------------');

const temperatura = 25;
const nuoKadaSilta = 15;
const arLyja = true;

if (arLyja === true) {
    if (temperatura >= nuoKadaSilta) {
        console.log('silta ir lyja');
    } else {
        console.log('salta ir lyja');
    }

} else {
    if (temperatura >= nuoKadaSilta) {
        console.log('gali nesirengti');
    } else {
        console.log('uzsidek striuke');
    }

}