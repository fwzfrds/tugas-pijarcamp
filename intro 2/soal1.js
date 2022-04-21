/*
Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya
(kecuali : split, reverse, join, foreach, map)

*/

// 1. Push : memasukan elemen baru di akhir pada sebuah array
// const fruits = ['apple', 'orange', 'grape'];
// fruits.push('banana');
// console.log(fruits);
// push merubah isi array aslinya

// 2. Pop : menghapus elemen paling akhir pada sebuah array
// const vehicle = ['taxi', 'bus', 'van'];
// vehicle.pop('banana');
// console.log(vehicle);
// push merubah isi array aslinya

// 3. Shift : Menghapus elemen awal pada sebuah array
// const phoneBrands = ['apple', 'samsung', 'huawei'];
// phoneBrands.shift();
// console.log(phoneBrands);
// shift merubah isi array aslinya

// 4. Unshift : Menambah elemen baru di awal sebuah array
// const footballClub = ['manchester united', 'real madrid', 'persib'];
// footballClub.unshift('bayern munchen');
// console.log(footballClub);
// unshift merubah isi array aslinya

// 5. slice : menyeleksi array di antara dua parameter yng di tenukan
// const bigCats = ['tiger', 'lion', 'leopard', 'jaguar', 'puma'];
// const eliminated = bigCats.slice(1, 3);
// console.log(bigCats);
// console.log(eliminated);
// slice tidak merubah isi array aslinya

// 6. replace : mengganti kata atau huruf pada sebuah string
// const text = 'Aku adalah kamu';
// const newText = text.replace('kamu', 'kalian');
// console.log(newText);
// replace tidak merubah string aslinya

// 7. toLowerCase : merubah string yang ada huruf kapitalnya menjadi huruf kecil
// const text2 = 'Mr. Smith has a Blue car';
// const result = text2.toLowerCase();
// console.log(result);
// toLowerCase tidak merubah string aslinya

// 8. toLowerCase : merubah seluruh string menjadi huruf besar
// const text3 = 'Real Madrid Club de Fútbol';
// const upperCase = text3.toUpperCase();
// console.log(upperCase);
// toUpperCase tidak merubah string aslinya

// 9. toString : merubah tipe data number menjadi string dengan value yang sama
// const number = 15;
// const stringNumber = number.toString();
// console.log(stringNumber);
// toString tidak merubah number aslinya

// 10. toFixed : Untuk membulatkan angka desimal
const number2 = 7.5758;
const fixed = number2.toFixed(2);
console.log(fixed);
// toFixed tidak merubah number aslinya
