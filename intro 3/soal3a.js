const filterAges = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ages = [3, 10, 18, 20, 17, 16, 31, 29, 23]
            let filtered = ages.filter((age) => age > 18).sort((a, b) => a - b)
            if (filtered.length) {
                resolve(filtered)
            } else {
                reject(new Error('Data tidak ditemukan'))
            }
        }, 3000)
    })
}

// filterAges()
//     .then(
//         (filtered) => {
//             console.log(filtered);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error);
//         }
//     )

const handleFilterAges = async () => {
    try {
        const result = await filterAges()
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
handleFilterAges()

