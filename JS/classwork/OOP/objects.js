//first lesson
//first lerning objects OOP
/*
let user1 = {};
console.log(user1);

let user2 = {
    login: 'Login',
    password: 'Password'
}
console.log(user2);

let cat = {
    nickname: "Murzik",
    color: "Red",
    age: 6,
    favouriteFeed: "kitekat"
}

// console.log(`${cat.nickname} иди кушать корм ${cat.favouriteFeed}`)

let user = {
    personalData: {
        name: "Harry",
        surname: "Johnson",
        age: "22",
        address: "USA, Washington, California",
        phone: "1324566"
    },
    login: "HarJoh",
    password: "hoJraH",
    langs: ["English", "Ukranian", "Mexican"]
}

console.log(`Personal data: ${user.personalData.name} ${user.personalData.surname}\n
            Language: ${user.langs}\n
            Login${user.login}`);
// console.log(user);

user.staff = "Software Engineer";
user.exp = 10;
user.car = {
    brand: "Skoda",
    model: "Octavia",
    year: 2004
}

user.birthday = "01.01.1999";
user.langs.push("German");
user.langs.splice(2,0);

console.log(user);

let arrayUsers = [
    {name: "Test", surname: "Tset"},
    {name: "Test", surname: "Tset"},
    {name: "Test", surname: "Tset"},
];

console.log(arrayUsers);
*/

//Second lesson
//object freeze
/*
let user = {
    name: 'Boris',
    surname: 'Johnson',
    age: 54,
    isMale: true,
    greeting(){
        console.log(`Hello ${this.name}`);
    }, 
    hiDearUser(user = "користувач"){
        console.log(`Шановний ${user} вітаємо Вас у вивченні JavaScript`);
    }
}

user.greeting();
user.hiDearUser();
user.hiDearUser("Артем")

delete user.isMale;

const user1 = {
    name: "Nike",
    surname: "Fox"
}

Object.freeze(user1)

let rectangle = {
    sideA: 3,
    sideB: 6,
    square() {
        return this.sideA * this.sideB
    },
    setA(value) {
        this.sideA = value;
    },
    setB(value) {
        this.sideB = value;
    },
    getA(){
        return this.sideA
    },
    getB(){
        return this.sideB
    }
}

console.log(user.square);
rectangle.setA(8);

Object.freeze(rectangle);

//copy object

let user2 = {name: "Kerry"};

let user3 = Object.assign({}, user2)

let user4 = {...user2}

console.log(user2, user3, user4);

user2.name = "Tom"

console.log(user2, user3, user4);

user3.age = 16;

user4.sex = "Male";

let user5 = {name: "John"};
Object.assign(user5, user2, user3,user4)

console.log(user5);

let user6 = {name:"Robert"};

let user7 = {...user6, login:"fgh"}

console.log(user7);
user6.name = "ghfhf";

console.log(user6);

console.log(Object.keys(user3));
console.log(Object.values(user));
console.log(Object.entries(user));
*/

let purchase = {
        name: "Banana",
        quantity: 100,
        unitPriceUSD: 1.5,
        client: {
            dataOfPurchase: "03.03.2023",
            quantityPurchased: 20,
            login: "TestClient"
        },
        sum: 0,
        purchasedPrice(){
            this.sum = this.unitPriceUSD * this.client.quantityPurchased
            if(this.sum > 1000) {
                this.sum -= this.sum * 0.05;
            }
            return this.sum
        },
}

// console.log(purchase.purchasedPrice());