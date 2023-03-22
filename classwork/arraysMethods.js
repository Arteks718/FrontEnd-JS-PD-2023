let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = Math.round(Math.random() * 10) ;
}
console.log(array);

//forEach
//не изменяет значения в массиве, не присваивается
console.log("forEach");
array.forEach((elem) => console.log(elem * 2));

//map
//может изменять значения в массиве, присваивается
console.log("map");
let res = array.map((elem) => elem * 2);
console.log(res);

//find
//ищет 1 значение и останавливается
console.log("find");
res = array.find((elem) => elem % 2 == 0)
console.log(res);

//filter
//ищет все значения подходящие под условие
console.log("filter");
res = array.filter((elem) => elem % 2 == 0);
console.log(res);

//findIndex
//ищет 1 означение подходящие под условие и возвращает его индекс
console.log("findIndex");
res = array.findIndex((elem) => elem % 2 == 0);
console.log(res);

//some 
//проверяет есть ли значения подходящие под условие в массиве и возвращает true or false
console.log("some");
res = array.some((elem) => elem > 20);
console.log(res);


//every
//проверяет все ли значения соответствуют условию,возвращает true or false. Принимает только функции
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