/*
CLASS
 */

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.spalva = color;
        this.turnedOn = false;
        this.money = 0;
    }


    switchOn() {
        this.turnedOn = true;
    }
    switchOff() {
        this.turnedOn = false;
    }
    //jei neijungtas - error
    //jei ne normalus skaicius - error
    //isskaiciuojam pinigus

    cashIn(money) {
        if (!this.turnedOn) {
            console.log(`bankomatas isjungtas`);
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log(`nepanasu i tikra piniga`);
            return;
        }
        if (money < 0) {
            console.log(`minusiniu pinigu neegzistuoja `);
            return;
        }

        this.money += money;
        console.log(`${this.gatve} inesta ${money} pinigu`);

    }
    cashOut(money) {
        if (!this.turnedOn) {
            console.log(`bankomatas isjungtas`);
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log(`nepanasu i tikra piniga`);
            return;
        }
        if (money < 0) {
            console.log(`minusiniu pinigu neegzistuoja `);
            return;
        }
        if (this.money < money) {
            console.log(`bankomate nera tiek pinigu`);
            return;
        }
        this.money -= money
        console.log(`${this.gatve} isimta ${money} pinigu`);

    }
    status() {
        console.log(`${this.gatve} pinigu likutis yra ${this.money}`);
    }

}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

//galima ijungti tokiu budu
/* bankomatas1.turnedOn = true;
 console.log(bankomatas1);

 bankomatas2.turnedOn = true;
 console.log(bankomatas2);*/

//kitas ijungimo budas
/*bankomatas1.switchOff();
console.log(bankomatas1);*/
bankomatas1.switchOn();
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas1.cashIn(9);
bankomatas1.cashOut(10);
console.log(bankomatas1.money);
bankomatas1.status()