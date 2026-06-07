const data = {
    user: {

        name: "John",
        address:
        {
            city: "NYC"
        }

    }
}
const { user: { address: { city } } } = data;
console.log(data.user.address.city);

