//OBJECTS

/*
Mokiniai:
-vardas
-pazymiai
-kontakinis asmuo 
    -vardas 
    -telefono nr
*/
const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contacts: {
            name: 'p.p',
            phone: 111
        }
    },
    {
        name: 'Maryte',
        marks: [10, 5],
        contacts: {
            name: 'm.m',
            phone: 222
        }
    },
    {
        name: 'Jonas',
        marks: [9, 6],
        contacts: {
            name: 'j.j',
            phone: 333
        }
    },
    {
        name: 'Ona',
        marks: [10, 10],
        contacts: {
            name: 'o.o',
            phone: 444
        }
    },

];

const studentIndex = 3;
const student = students[studentIndex]
console.log(student);

const name = student['name']; //const name = student.name;
console.log(name);
const marks = student['marks']; //student.marks
console.log(marks);
const contact = student['contacts'];
console.log(contact);
const contactName = contact['name'];
console.log(contactName);
const contactPhone = contact['phone'];
console.log(contactPhone);



