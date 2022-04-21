const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found'), [])
        }
    }, 2000)
}

getMonth((data1, data2) => {
    if (data1 == null) {
        data2.map(item => {
            console.log(item);
        })
    } else {
        console.log(data1);
    }
})