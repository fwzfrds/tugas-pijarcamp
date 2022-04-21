const getName = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();

            json.forEach(({ name }) => {
                console.log(name);
            });
        } else {
            throw new Error('Failed to fetch')
        }

    } catch (error) {
        console.log(error);
    }
};

getName('https://jsonplaceholder.typicode.com/users');