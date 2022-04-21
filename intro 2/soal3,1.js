/*
Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
mengurutkan hasil pencarian dan menampilkannya ke layar/console.

Contoh :
 
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
Output:
[8, 14, 17]

SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
Output:
“Nilai akhir harus lebih besar dari nilai awal”

SeleksiNilai(5, 17 , [2, 25, 4])
Output:
“Jumlah angka dalam dataArray harus lebih dari 5”

SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
Output:
“Nilai tidak ditemukan”

*/

function selectNumber(nilaiAwal, nilaiAkhir, arrayNum) {

    switch (true) {
        case ([nilaiAwal, nilaiAkhir, ...arrayNum].some(num => typeof (num) != 'number')):
            console.log('Input harus number');
            break;
        case (nilaiAwal > nilaiAkhir):
            console.log('Nilai Akhir harus lebih besar dari Nilai Awal');
            break;
        case (arrayNum.length <= 5):
            console.log('Data pada array harus lebih dari 5 elemen');
            break;
        default:
            const result = arrayNum
                .filter(num => num > nilaiAwal && num < nilaiAkhir)
                .sort((a, b) => a - b)

            result.length !== 0 ? console.log(result) : console.log('Data tidak ditemukan')
    }
}

selectNumber(5, 20, [2, 25, 4, 14, 17, 30, 8]);
selectNumber(15, 3, [2, 25, 4, 14, 17, 30, 8]);
selectNumber(5, 17, [2, 25, 4]);
selectNumber(5, 17, [2, 25, 4, 1, 30, 18]);
selectNumber('lima', 17, [2, 25, 4, 1, 30, 18]);
selectNumber(true, 17, [2, 25, 4, 1, 30, 18]);
selectNumber(5, 17, [2, 25, 4, 1, false, 18]);

