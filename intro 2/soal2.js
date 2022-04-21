/*
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan 
callback function dengan data sebagai berikut:

const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]

Contoh:
searchName(“an”, 3, callback)

Output: 
[“Alexandra”,”Amanda”,”Angela”]
*/

const people = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella", "Adrian",
    "Carol", "Caroline", "Carolyn", "Firman",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(str, n, callback) {

    switch (true) {
        case (typeof (str) !== 'string'):
            console.log('Str harus bertipe string');
            break;
        case (typeof (n) !== 'number'):
            console.log('N harus bertipe number');
            break;
        case (n < 0):
            console.log('N tidak boleh kurang dari nol');
            break;
        case (typeof (callback) !== 'function'):
            console.log('Callback harus bertipe function');
            break;
        default:
            const found = people.filter((name) => {
                return name.match(new RegExp(str, 'i'))
            })

            callback(found, n);
    }
}

const printData = (data, n) => {
    let result = [];
    result = data.slice(0, n)
    result.length != 0 ? console.log(result) : console.log('Data Tidak ditemukan');
}

searchName('an', 4, printData);