// "use strict";
// //function declaration
// /*
// function sum1(a, b) {
//   return a + b;
// }
// */

// //function expression
// /*
// let sum2 = function (a, b) {
//   return a + b;
// };
// */

// //easy calc with array functions
// /*
// let sum = (a, b) => a + b;

// let sub = (a, b) => a - b;

// let divi = (a, b) => a / b;

// let mult = (a, b) => a * b;

// let x1 = Number(prompt("Enter 1 value"));
// let x2 = Number(prompt("Enter 2 value"));
// // console.log(sum(x1, x2));
// // console.log(sub(x1, x2));
// // console.log(divi(x1, x2));
// // console.log(mult(x1, x2));
// */

// //arrays classwork
// /*
// let array1 = [];
// let summary = 0;
// for (let i = 0; i < 10; i++) {
//   array1[i] = Math.round(Math.random() * 10) - Math.round(Math.random() * 10);
//   summary += array1[i];
//   console.log(array1[i]);
// }
// console.log(`sum = ${summary}`);

// let positiveArray = (a) => {
//   for (let i = 0; i < 10; i++) {
//     a[i] = Math.round(Math.random() * 10) - Math.round(Math.random() * 10);
//     console.log(array1[i]);
//   }
// };
// */

// //arrays homework
/*
// let newArray = function (n = 10) {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     array[i] = Math.round(Math.random() * 25) - Math.round(Math.random() * 25);
//   }
//   return array;
// };

// console.log("Задание 1");

// //function declaration

// function sumOfNegativeDec() {
//   let sum = 0,
//     arr = newArray();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) sum += arr[i];
//   }
//   return sum;
// }

// console.log(`Function Declaration. Sum = ${sumOfNegativeDec()}`);

// //function expression

// let sumOfNegativeExp = function () {
//   let sum = 0,
//     arr = newArray();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) sum += arr[i];
//   }
//   return sum;
// };

// console.log(`Function Expression. Sum = ${sumOfNegativeExp()}`);

// //arrow function

// let sumOfNegativeArr = () => {
//   let sum = 0,
//     arr = newArray();
//   arr.forEach((elem) => {
//     if (elem < 0) sum += elem;
//   });
//   return sum;
// };

// console.log(`Arrow function. Sum = ${sumOfNegativeExp()}`);
// console.log("============================================================");
// console.log("Задание 2");

// let replaceNegativeArr = () => {
//   let arr = newArray();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) arr[i] = 0;
//     console.log(arr[i]);
//   }
// };
// replaceNegativeArr();

// console.log("============================================================");
// console.log("Задание 3");

// let multiplyArr = () => {
//   let mult = 1,
//     arr = newArray();
//   console.log(arr);
//   arr.forEach((elem) => {
//     if (elem < 10 && elem > 0) mult *= elem;
//   });
//   return mult;
// };

// console.log(multiplyArr());

// console.log("============================================================");
// console.log("Задание 4");

// let nullsIndex = () => {
//   let arr = newArray(),
//     secondArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] == 0) secondArr.push(i);
//   }
//   return secondArr;
// };

// console.log(`Массив с индексами: ${nullsIndex()}`);

// console.log("============================================================");
// console.log("Задание 5");

// let elemArrayN = (n) => {
//   let arr = newArray();
//   if (n < arr.length) {
//     for (let i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   } else console.log("Число больше длины массива");
// };
// let n = prompt("Введите число");
// elemArrayN(n);

// console.log("============================================================");
// console.log("Задание 6");

// let maxElement = () => {
//   let arr = newArray();
//   arr.forEach((elem) => {
//     console.log(elem);
//   });
//   console.log(`Максимальный элемент = ${Math.max.apply(null, arr)}`);
// };

// maxElement();

// console.log("============================================================");
// console.log("Задание 7");

// let sumTwoArrays = () => {
//   let arr1 = newArray(),
//     arr2 = newArray(5),
//     sum = 0;
//   console.log("Первый массив");
//   arr1.forEach((elem) => {
//     console.log(elem);
//     sum += elem;
//   });
//   console.log("Второй массив");
//   arr2.forEach((elem) => {
//     console.log(elem);
//     sum += elem;
//   });
//   console.log(`Сумма двух массивов = ${sum}`);
// };

// sumTwoArrays();

// console.log("============================================================");
// console.log("Задание 8");

// let moveArray = (a, b) => {
//   let arr = newArray(),
//     temp;
//   if (arr.length > a && arr.length > b) {
//     console.log("Изначальный массив");
//     arr.forEach((elem) => console.log(elem));
//     console.log(`Массив с поменяными местами элементами ${a} и ${b}`);
//     temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//     arr.forEach((elem) => console.log(elem));
//   } else console.log(`Числа должны быть меньше = ${arr.length}`);
// };

// let firstElem = prompt("Введите первый элемент"),
//   secondElem = prompt("Введите второй элемент");

// moveArray(firstElem, secondElem);
*/

// let b = 25 ** (1 / 2);
// console.log(typeof NaN);

// console.log(5 !== "5" || (5 > 6 && 10 > 5 && 3 > 5));
// let k = 5
// console.log(-5/0);

// for (x = 10, y = 5; x <= 15, y >= 0; x++, y--) {
//   console.log(x, y);
// }

// let a = [10, 20, 30, 40, 50];
// //1
// console.log("-----------");
// a.forEach((el) => console.log(el));
// //2
// console.log("-----------");
// a.forEach((el, i) => console.log(el, ":", i));
// //3
// console.log("-----------");
// function out(el, i, arr) {
//   console.log(i, el);
// }

// a.forEach(out);

let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = Math.round(Math.random() * 10) - Math.round(Math.random() * 10);
}
console.log(array);

//forEach
array.forEach((elem) => console.log(elem * 2));

//map
console.log("map");
let res = array.map((elem) => elem * 2);
console.log(res);

//find
console.log("find");
res = array.find((elem) => elem % 2 == 0)
console.log(res);

//filter
console.log("filter");
res = array.filter((elem) => elem % 2 == 0);
console.log(res);

//findIndex
console.log("findIndex");
res = array.findIndex((elem) => elem % 2 == 0);
console.log(res);

//some 
console.log("some");
res = array.some((elem) => elem > 0);
console.log(res);


//every 
function isPositive(elem, index, array){
  return elem > 0
}

console.log("every");
res = array.every(isPositive);
console.log(res);

//concat
console.log(array.concat([4,2,5,1,6]));

//join
console.log(array.join("."));

//reduce

res = array.reduce((sum, elem) => sum + elem)
console.log(res);