let math = 79;
let indonesia = 83;
let english = 80;
let science = 85;

const nilaiUN = [math, indonesia, english, science];
let message = '';

const validation = () => {

    let isValidated = false;
    let nilaiValidated = [];

    // Perulangan untuk validasi
    // Terdiri dari 4 validasi yang dimasukkan dalam satu loop
    for (let nilai of nilaiUN) {
        if (nilai != null && typeof (nilai) == 'number' && nilai >= 0 && nilai <= 100) {
            nilaiValidated.push(nilai)
        }
    }

    if (nilaiValidated.length == nilaiUN.length) {
        isValidated = true;
    } else {
        message = 'Perbaiki Data Terlebih Dahulu';
    }

    return isValidated;
}

const validated = validation();

if (validated == true) {

    let sum = 0
    for (let nilai of nilaiUN) {
        sum += nilai
    }
    const average = sum / nilaiUN.length;
    let grade = ''

    switch (true) {
        case (average >= 90):
            grade = 'A';
            break;
        case (average >= 80):
            grade = 'B';
            break;
        case (average >= 70):
            grade = 'C';
            break;
        case (average >= 60):
            grade = 'D';
            break;
        default:
            grade = 'E';
    }

    console.log(`Rata - rata nilai = ${average}`);
    console.log(`Grade = ${grade}`);
} else {
    console.log(message);
}




