// let users = [];

// class User{
//     constructor(nameValue = "anov", surnameValue = "anov"){
//         this.name = nameValue;
//         this.surname = surnameValue;
//     }
// }

// let user1 = new User("Tom", "Fox");

// console.log(user1);

// let user2 = new User("Ann", "Smith");

// console.log(user2);

// for (let i = 0; i < 20; i++) { 
//     users[i] = new User(`name${i}`, `surname${i}`)
// }

// const user3 = new User();

// class Engine{
//     constructor(name, power){
//         this.name = name;
//         this.power = power;
//     }
// }

// class Car{
//     constructor(color, year, model, engine){
//         this.color = color;
//         this.year = year;
//         this.model = model;
//         this.engine = engine;
//     }
//     printObject(){
//         console.log(this);
//     }
// }

// let engine1 = new Engine('2JZ', 1.9)

// let car1 = new Car("Gray", 2004, "Skoda", engine1)
// car1.printObject();

// class Rect{
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//         this.square = 0;
//     }
//     calcSquare(){
//         this.square = this.a * this.b;
//         return this.square;
//     }
//     outSquare(){
//         console.log(this.square);
//     }
// }

// let r1 = new Rect(20,4)

//Наследование
class User{
    #login;
    #password;
    constructor(login, password, fullname="anov"){
        this.#login = login
        this.#password = password;
        this.fullname = fullname;
    }
    set login(value){
        this.login = value
    }
    set password(value){
        this.password = value
    }
    get login(){
        return this.login
    }
    get password(){
        return this.password
    }
}

let user1 = new User("Tom", "fghfhg")

console.log(user1);