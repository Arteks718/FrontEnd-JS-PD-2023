console.log("Перше завдання");
let int = 100,
  float = 2.5,
  bool = false,
  string = "Hello, JavaScript",
  greeting = "Hi, ";
console.log(`${int} - ${float} - ${bool} - ${string}`);

console.log("Друге завдання");
let userName = String(prompt("Як вас звати?"));
console.log(greeting + userName);

console.log("Третє завдання");
let n = 10;
while (n <= 50) {
  if (n % 5 == 0) console.log(n);
  n++;
}

console.log("Четверте завдання");

let numOfMonth,
  isMonth = false;
while (!isMonth) {
  numOfMonth = Number(prompt("Введіть номер будь-якого місяця"));
  if (numOfMonth <= 12 && numOfMonth >= 1) {
    isMonth = true;
  }
}
if (numOfMonth > 0 && numOfMonth < 3) console.log("Зима");
else if (numOfMonth >= 3 && numOfMonth < 6) console.log("Весна");
else if (numOfMonth >= 6 && numOfMonth < 9) console.log("Літо");
else console.log("Осінь");

console.log("П'яте завдання");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) sum += i;
}
console.log(sum);

console.log("Шосте завдання");
let znak = Number(prompt("Введіть скільки раз буде виводитись знак '*'"));
n = 1;
while (znak >= n) {
  console.log("*");
  n++;
}

console.log("Сьоме завдання");
let hungred = 1000,
  k = 0;
while (hungred >= 50) {
  hungred /= 2;
  k++;
}
console.log(`Залишилось - ${hungred}; Кількість разів ділення - ${k}`);

console.log("Восьме завдання");
let x = -1,
  y = 0;
while (x < 1) {

    y = 5 * x + 2;
    x += 0.1;
    console.log(`x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);
}
