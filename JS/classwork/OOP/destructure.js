// let arr = ['val1', 'val2', 'val3', 'val4'];

// let [a1, a2,, a4] = arr;

// let [a0, ...rest] = arr;
// console.log(a1);
// console.log(rest);
// console.log(arr);

// const arr2 = ['v1', [10,20,30,40,50], 'v2', 'v3', 'v4', 'v5'];
// let [,ar] = arr2;
// console.log(ar);
// let [, [,,ar2]] = arr2;
// console.log(ar2);

// const user = {
//   name: 'Vasya',
//   surname: 'Test',
//   car: {
//     model: 'modelX',
//     color:'black',
//     year: 2020,
//     engine: {
//       power: 2,
//       year: 2019
//     }
//   }
// }

// const {name} = user;
// const {firstName, lastName} = user;

// console.log(firstName, lastName);

// const {car: {model}} = user

// console.log(model);

// const obj1 = {
//   name: 'Tom',
//   surname: 'Adson'
// }

// const obj2 = {
//   age: 20,
// }

// const Tom ={
//   ...obj1,
//   ...obj2
// }

/*class User{
  constructor(...auth){
    const {login, password} = auth;
  }
  out(){
      console.log('out method of User class');
      console.log("Login: ", this.login);
  }
  printAuth(){
      console.log(`Auth: ${this.login} ${this.password}`);
  }
};

class Stud extends User{
  constructor(name, surname, auth){
      // super - вызов конструктора родителя
      const {login, password} = auth;
      super(login, password);
      this.name = name;
      this.surname = surname;
  }
  out(){
      super.out();
      console.log(`personal info: ${this.name} ${this.surname}`);
  }
  printFullname(){
      console.log(`Fullname: ${this.name} ${this.surname}`);
  }
};


const stud1 = new Stud('Tom', 'Fox', 'tom1', 'qwerty');
stud1.printFullname();
stud1.printAuth();
stud1.out();

let user = {
  login: "TestLogin",
  password: "TestPass",
  authData: function(){
    console.log('Auth data:', this.login, this.password);
  }
}

let stud = {
  fullName: "TestFullName",
}

stud.__proto__ = user;
*/

const ROLE = {
  ADMIN: "ADMIN",
  MODERATOR: "MODERATOR",
  USER: "USER"
};

const ACTION = {
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
}

let mapRights = new Map()

mapRights.set(ROLE.USER, [ACTION.READ]);
mapRights.set(ROLE.MODERATOR, [ACTION.CREATE, ACTION.READ, ACTION.UPDATE]);
mapRights.set(ROLE.ADMIN, ...ACTION);

function checkPermission(role, action){
  if(mapRights.has(role)){
    mapRights.get(role).includes(action);
  }
  return false;
}

class MapUsers{

  
}