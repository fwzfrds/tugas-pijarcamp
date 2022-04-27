const workindDayCheck = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dayData = ['Senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let check = dayData.find((item) => item.match(new RegExp(day, 'i')))
            if (check) {
                resolve(check)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

workindDayCheck('senIn')
    .then(
        (check) => {
            console.log(`Hari ini adalah hari ${check} dan hari ini adalah hari kerja`);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )

// .then() digunakan untuk menjalankan kode setelah promise resolve (terpenuhi)
// .catch() digunakan untuk menghandle apabila promise error atau tidak dipenuhi

// const handleDataPost = async () => {
//     try {
//         const result = await workindDayCheck('sabtu')
//         console.log(`Hari ini adalah hari ${result} dan hari ini adalah hari kerja`);
//     } catch (error) {
//         console.log(error);
//     }

// }
// handleDataPost()

// try catch digunakan untuk menghandle error pada async await
// apabila pada blok kode try terdapat error maka akan di handle oleh blok kode yang ada di catch
