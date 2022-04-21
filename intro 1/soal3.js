num = 5;

if (typeof (num) == 'number') {
    for (let i = num; i >= 1; i--) {
        let output = "";
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        console.log(output);
    }

} else {
    console.log('Validasi : Input harus bertipe number!');
}

