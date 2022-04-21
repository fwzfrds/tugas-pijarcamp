const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found'), [])
        }
    }, 4000)
}

getMonth((error, data) => {
    if (!error) {
        data.map(item => {
            console.log(item);
        })
    } else {
        console.log(error);
    }
})