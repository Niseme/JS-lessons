/*NUMBER*/

//skaiciaus konvertavimas i stringa
console.log('-----------');
console.log(`skaiciu konvertavimas i stringa`);
console.log((5255).toString());
console.log('' + 5255);

//desimtaines dalies nukirpimas
console.log('-----------');
console.log(`desimtaines dalies nukirpimas`);
console.log((3.1415256).toFixed(3));

//is teksto konvertavimas i skaiciu
console.log('-----------');
console.log(`teksto konvertavimas i skaicius`);
console.log(parseFloat('25.36'));
console.log(parseInt('25.36'));
console.log(+'25.36');                          //JS Casting

console.log('-----------');
console.log(`stringas ir skaiciai viename`);
console.log(parseFloat('labas253')); //NaN
console.log(parseFloat('253labas253'));
console.log(parseFloat('25.36labas253'));

console.log('-----------');
console.log(`Math class`);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-7));

console.log(Math.round(1.5));
console.log(Math.floor(1.5));
console.log(Math.ceil(1.5));

console.log(Math.round(1.49999));
console.log(Math.floor(1.49999));
console.log(Math.ceil(1.49999));

console.log(Math.round(1.00001));
console.log(Math.floor(1.00001));
console.log(Math.ceil(1.00001));

console.log(Math.round(1.9999));
console.log(Math.floor(1.9999));
console.log(Math.ceil(1.9999));

console.log('-----------');
console.log(`random skaicius[0..1)`);
console.log(Math.random());
console.log(Math.min(1, 5, 7));
console.log(Math.max(1, 5, 7));
console.log(Math.trunc(55.88));

/*STRING */

console.log('-----------');
console.log('-----------');
console.log('-----------');

console.log(`labas rytas`.length);
console.log('-----------');
console.log(`ar stringe yra kitas 'sub-stringas'?`);
console.log(`labas rytas`.includes('y'));
console.log(`labas rytas`.includes('rytas'));
console.log(`labas rytas`.includes('rytas '));
console.log('-----------');
console.log(`kur stringe yra kitas 'sub-stringas'?`);
console.log(`labas rytas`.indexOf('y'));
console.log(`labas rytas`.indexOf('rytas'));
console.log(`labas rytas`.indexOf('rytas '));           //-1 jei nera
console.log(`labas rytas`.indexOf('s'));                //randa pati pirma
console.log('-----------');
console.log(`sukarpyti stringa i dalis`);
console.log(`Labas rytas`.split(' '));
console.log(`Labas rytas`.split(''));
console.log(`Labas rytas`.split('a'));
console.log(`Labas rytas`.split('L'));
console.log(`labas rytas`.charAt(2));                   //charAt tas pats kas [2]
console.log(`labas rytas`[2]);
console.log('-----------');
console.log(`kartojimas`);
console.log(`Steve`.repeat(3));
console.log(`a`.repeat(20));
console.log(`labas rytas. Lietuva. Kaip tu laikaisi`.slice(6, 11));         //prasides 6, baigsis 11 pozicija
console.log('-----------');
console.log('jei nebutu slice, butu taip sudetingai:');
const labas = `labas vakaras, Lietuva!`
console.log(labas.slice(labas.indexOf('v')));
console.log(labas.slice(labas.indexOf('v'), 13));
console.log(labas.slice(labas.indexOf('v'), labas.indexOf('s', labas.indexOf('v')) + 1));
console.log('-----------');
console.log(`teksto konvertavimas`);
console.log(`Labas rytas`.toLowerCase());
console.log(`Labas rytas`.toUpperCase());
console.log('-----------');
console.log(`teksto apvalymas nuo tarpu`);
console.log(`    Labas       rytas!        `.trimStart() + `.`);
console.log(`    Labas       rytas!        `.trimEnd() + `.`);
console.log(`    Labas       rytas!        `.trim() + `.`);
console.log('-----------');
console.log(`replace`);
console.log(`labas rytas`.replace('rytas', 'vakaras'));
console.log(`labas rytas`.replace('a', '_'));
console.log(`labas rytas`.replaceAll('a', '_'));
console.log(`labas rytas`.replace(/a/gi, '_'));

/*BOOLEAN */
console.log('-----------');
console.log('-----------');
console.log('-----------');
console.log(true.toString());

/*ARRAY */
console.log('-----------');
console.log('-----------');
console.log('-----------');

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log(rytas.length);

console.log('sujungimas');
console.log(rytas.join(' '));
console.log(rytas.join('-=-'));
console.log(rytas.join(', '));

console.log('-----------');
console.log(`paieska`);
console.log(rytas.includes('a')); //pati a raide kaip irasas
console.log(rytas.includes('rytas'));

console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Lietuva'));

console.log(rytas.push('PUSH'));
console.log(rytas.unshift('unshift'));
console.log(rytas.pop());
console.log(rytas.shift());
console.log(rytas);

//map, filter, sort, reduce, every, flat, forEach



/*console.log('-----------');
console.log(`extra`);
console.log(rytas.reverse());*/




/*OBJECT */