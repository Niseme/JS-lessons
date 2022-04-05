/* 
ARRAY
- pozicijos prasideda 0
- pozicijos tik sveikieji skaiciai
- ilgis -> .length
*/

const pazymiai = [10, 2, 5, 8];
console.log('Pazymiai:', pazymiai);

//pazymiu vidurkis
//pazymiu kiekis
//koks maziausias
//koks didziausias
//mediana

console.log('pirmas', pazymiai[0]);
console.log('antras', pazymiai[1]);

const pazymiuKiekis = pazymiai.length
const paskutinioPozicija = pazymiuKiekis - 1;
console.log(pazymiai[paskutinioPozicija]);

const studentai = ['Petras', 'Maryte', 'Lukas', 'Mantas'];
console.log(studentai);

let index = 0

console.log(`Cia yra studentas ${studentai[index++]}`);
console.log(`Cia yra studentas ${studentai[index++]}`);
console.log(`Cia yra studentas ${studentai[index++]}`);
console.log(`Cia yra studentas ${studentai[index++]}`);
