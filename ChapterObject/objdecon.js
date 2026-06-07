const user = {
    name1: "Joji",
    age: 45,
    city: "NYC"
}

const { name1, age } = user; //deconstrcut
console.log(name1);
console.log(age);

//renaming
const { name1: Uname, age: Uage } = user;
console.log(Uname);
console.log(Uage);

const { country = 'USA' } = user;
console.log(country);
