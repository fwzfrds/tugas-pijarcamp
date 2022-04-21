const getAlbums = (method, url) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send()
        ajax.onload = function () {
            if (ajax.status === 200) {
                const result = JSON.parse(ajax.responseText);
                resolve(result)
            } else {
                reject(new Error('There is an error'))
            }

        };
    })
};

// getAlbums('GET', 'https://jsonplaceholder.typicode.com/albums')
//     .then(
//         (data) => {
//             const show = data.filter((item) => item.userId === 3)
//             console.log(show);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error);
//         }
//     )

const handleGetAlbums = async (id) => {
    try {
        const result = await getAlbums('GET', 'https://jsonplaceholder.typicode.com/albumsaaa')
        const show = result.filter((item) => item.userId === id)
        console.log(show);
    } catch (error) {
        console.error(error);
    }

}
handleGetAlbums(10)


