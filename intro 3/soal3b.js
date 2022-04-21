const getAlbums = (method, url, id) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send()
        ajax.onload = function () {
            if (ajax.status === 200) {
                const result = JSON.parse(ajax.responseText);
                resolve([result, id])
            } else {
                reject(new Error('There is an error'))
            }

        };
    })
};

getAlbums('GET', 'https://jsonplaceholder.typicode.com/albums', 3)
    .then(
        (data) => {
            const show = data[0].filter((item) => item.userId === data[1])
            console.log(show);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )

// const handleGetAlbums = async (id) => {
//     try {
//         const result = await getAlbums('GET', 'https://jsonplaceholder.typicode.com/albums', id)
//         const show = result[0].filter((item) => item.userId === result[1])
//         console.log(show);
//     } catch (error) {
//         console.error(error);
//     }

// }
// handleGetAlbums(10)


