const ROLE = {
  ADMIN: "ADMIN",
  MODERATOR: "MODERATOR",
  USER: "USER",
};

const ACTION = {
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

// let mapRights = new Map();

// mapRights.set(ROLE.USER, [ACTION.READ]);
// mapRights.set(ROLE.MODERATOR, [ACTION.CREATE, ACTION.READ, ACTION.UPDATE]);
// mapRights.set(ROLE.ADMIN, [
//   ACTION.CREATE,
//   ACTION.READ,
//   ACTION.UPDATE,
//   ACTION.DELETE,
// ]);

// function checkPermission(role, action) {
//   role = role.toUpperCase();
//   action = action.toUpperCase();
//   if (mapRights.has(role)) {
//     let user = mapRights.get(role);
//     if (user.some((el) => el == action)) {
//       return true;
//     } else return false;
//   } else return false;
// }
//console.log(checkPermission("user", "update"));

class MapUsers {
  static map = new Map();
  static mapRights() {
    MapUsers.map.set(ROLE.USER, [ACTION.READ]);
    MapUsers.map.set(ROLE.MODERATOR, [ACTION.CREATE, ACTION.READ, ACTION.UPDATE]);
    MapUsers.map.set(ROLE.ADMIN, [
      ACTION.CREATE,
      ACTION.READ,
      ACTION.UPDATE,
      ACTION.DELETE,
    ]);
  }

  constructor(login, password, role) {
    this.login = login;
    this.password = password;
    this.role = role.toUpperCase();
  }
  checkPermission(action) {
    MapUsers.mapRights(this);
    action = action.toUpperCase();
    if (MapUsers.map.has(this.role)) {
      let user = MapUsers.map.get(this.role);
      if (user.some((el) => el == action)) {
        return true;
      } else return false;
    } else return false;
  }
}

let map1 = new MapUsers('TestUser', 'TestUserPassword', 'user')
let map2 = new MapUsers('Mod', 'Ffgh', 'moderator')
let map3 = new MapUsers('Ad', 'Fhfhfgw', 'admin')
// MapUsers.mapRights(map1)

console.log(map1.checkPermission('read'));
console.log(map2.checkPermission('delete'));

//task2

class Worker {
  static countWorkers = 0;
  static sumSalary = 0;
  constructor(name, salaryPerMonth) {
    this.name = name;
    this.salaryPerMonth = salaryPerMonth;
    Worker.countWorkers++;
    Worker.sumSalary += salaryPerMonth;
  }
  printSalary() {
    console.log(this.salaryPerMonth);
  }
  calcSalaryPerYear() {
    return this.salaryPerMonth * 12;
  }
}

let w1 = new Worker("Worker1", 5000);
let w2 = new Worker("Worker2", 52000);
let w3 = new Worker("Worker3", 50400);
let w4 = new Worker("Worker4", 50050);
let w5 = new Worker("Worker5", 50001);

//task3

class partTimeWorker extends Worker {
  static countPartTimeWorkers = 0;
  constructor(name, hoursWorkedPerDay, hourlyRate) {
    super(name);
    this.hoursWorkedPerDay = hoursWorkedPerDay;
    this.hourlyRate = hourlyRate;
    partTimeWorker.countPartTimeWorkers++;
  }
  calcSalaryPerDay() {
    return this.hoursWorkedPerDay * this.hourlyRate;
  }
  calcSalaryPerMonth(days) {
    return (super.salaryPerMonth = this.calcSalaryPerDay() * days);
  }
}

let part1 = new partTimeWorker("Test", 8, 15);

console.log(part1.calcSalaryPerMonth(30));
part1.printSalary();