let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// Bagian A
data = {
    ...data,
    name: "Muhammad Fawwaz Firdaus",
    email: "muhammadfawwaz463@gmail.com",
    hobby: ['Sepakbola', 'musik', 'workout']
}
console.log(data);

// Bagian B
const { street, city } = data.address;
console.log(`Street : ${street}, City : ${city}`);