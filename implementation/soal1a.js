// Palindrom Detection
const str = 'Kasur ini Rusak'

let newStr = '';

if (typeof (str) == 'string') {

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    if (newStr.toLowerCase() == str.toLowerCase()) {
        console.log('Palindrom')
    } else {
        console.log('Not Palindrom')
    }

} else {
    console.log('Not A String Type');
}


