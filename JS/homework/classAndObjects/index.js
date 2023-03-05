//Task1
let laptop = {
    serialNumber: '3V5E7EA',
    model: "HP 255 G8",
    screen: {
        typeOfScreen: "IPS",
        resolution: "1920x1080"
    },
    CPU: {
        modelCPU: "AMD Ryzen 7 5700U",
        cores: "8 core",
        frequency: "1.8-4.3 GHz"
    },
    RAM: "8 GB",
    Volume: {
        SSD: "256 GB",
        HHD: null
    },
    GPU: "AMD Radeon Graphics",
    Case: {
        color: "Silver",
        weigth: 1.7,
        size: {
            width: 358,
            length: 242,
            height: 19
        }
    }
}

//Task2
class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}
let user1 = new User("HenryWatson", "5g3ga23gh"),
    user2 = new User("TestUser123", "415653643"),
    user3 = new User("Qwerty123", "321ytrewQ");

let users = [user1, user2, user3];

//Task3
let logins = users.map((el) => el.login)
console.log(logins);

//Task4
//4.1
class Worker {
    constructor(id, fullname, category, salary) {
        this.id = id;
        this.fullname = fullname;
        this.category = category;
        this.salaryMonth = salary
    }
    printWorker(){
        console.log(this);
    }
    getSalaryPerYear(){
        return this.salaryMonth * 12
    }
}

class PartTimeWorker extends Worker {
    constructor(id, fullname, category, hoursWorked, hourlyRate){
        super(id, fullname, category);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.salaryDay = 0
        this.salaryMonth = 0
    }
    getSalaryPerDay(){
        this.salaryDay = this.hoursWorked * this.hourlyRate
        return this.salaryDay
    }
    getSalaryPerMonth(daysInMonth){
        this.salaryMonth = this.salaryDay * daysInMonth
        return this.salaryMonth
    }
}

let worker1 = new Worker(1, "Ivan Ivanov", "Builder", 12000),
    worker2 = new Worker(2, "Petr Sidorov", "Painter", 15000);

let partTimeWorker1 = new PartTimeWorker(3, "Alexander Hanson", "Carpenter", 8, 60),
    partTimeWorker2 = new PartTimeWorker(4, "Aleksey Molotkov", "Builder", 6, 50);

worker1.printWorker();
console.log(worker2.getSalaryPerYear());

console.log(partTimeWorker1.getSalaryPerDay());
console.log(partTimeWorker1.getSalaryPerMonth(30));
console.log(partTimeWorker1.getSalaryPerYear());