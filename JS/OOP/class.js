let users = [];

class User{
    constructor(nameValue = "anov", surnameValue = "anov"){
        this.name = nameValue;
        this.surname = surnameValue;
    }
}

let user1 = new User("Tom", "Fox");

console.log(user1);

let user2 = new User("Ann", "Smith");

console.log(user2);

for (let i = 0; i < 20; i++) { 
    users[i] = new User(`name${i}`, `surname${i}`)
}

const user3 = new User();

class Car{
    constructor(color, year, brand, model, engineCapacity){
        this.color = color;
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.engineCapacity = engineCapacity;
    }
    printObject(){
        console.log(this);
    }
}

let car1 = new Car("Gray", 2004, "Skoda", "Octavia", 2.3)
car1.printObject();

class Rect{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    calcSquare(){
        this.square = this.a * this.b;
        return this.square;
    }
    outSquare(){
        console.log(this.square);
    }
}

let r1 = new Rect(20,4)

console.log(r1.calcSquare());