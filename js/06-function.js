/*
Visi mokiniai turi tik 4 pazymius. Suskaiciuoti vidurki
*/
const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 3];
const jonas = [9, 9, 9, 7];
const ona = [10, 10, 10, 9];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('jonas', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona', onosVidurkis);

/*
Funkcija
 */