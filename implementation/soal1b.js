// Reverse sentence order
const str = 'Saya Belajar Javascript';

if (typeof (str) == 'string') {

    // 1. Cara untuk misah tiap kata, akan menjadi sebuah array, lalu direverse susunannya
    let splitWord = '', arr = []

    for (let i = 0; i <= str.length - 1; i++) {
        splitWord = str[i] == ' ' ? (arr.push(splitWord), "") : (splitWord + str[i]);
    }

    arr = [splitWord, ...arr];

    // 2. Cara untuk merubah array jadi string
    let separator = " ", result = ''

    for (let i = 0; i < arr.length; i++) {
        if (result) result += separator;
        result += arr[i];
    }

    // 3. Cetak Hasilnya
    console.log(result)

} else {
    console.log('Input not A String Type!')
}






