//ЗАДАЧА  No1 | напишите функцию generateRandomNumber,
//которая принимает диапазон чисел и колбэк-функцию,
//и передает в нее случайное число из этого диапазона.

// function myCallbackFn(number) {
//   console.log(`Рандомное число: ${number}`);
// }
// function generateRandomNumber(min, max, callback) {
//   let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//   callback(randomNum);
// }
// generateRandomNumber(1, 20, myCallbackFn);

// ЗАДАЧА No2 | напишите функцию checkEven,
//которая принимает число и колбэк-функцию,
//и передает в нее true, если число четное, и false, если нечетное.

// function myCallbackFn(booleanValue) {
//   console.log(booleanValue);
// }
// function checkEven(num, callback) {
//   if (num % 2 === 0) {
//     return callback(true);
//   } else {
//     return callback(false);
//   }
// }

// checkEven(4, myCallbackFn);

// ЗАДАЧА No3 | фильтрация положительных чисел из массива:
// создайте массив чисел, включающий в себя как положительные,
//так и отрицательные числа. Используя метод forEach,
//отфильтруйте только положительные числа и добавьте их в новый массив.
// Выведите новый массив с положительными числами.

// const numArr = [1, -2, 3, -4, 5];
// let newArr = [];
// numArr.forEach((numOfArr) => {
//   if (numOfArr > 0) {
//     newArr.push(numOfArr);
//   }
// });

// const result = newArr;
// console.log(result);

//ЗАДАЧА No4 | cоздание объекта из массива пар ключ-значение:
// cоздайте массив, состоящий из пар ключ-значение.
// Используя метод forEach, добавьте каждую пару ключ-значение в объект. Выведите объект.

// const arrToObj = [
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"],
// ];

// const obj = {};

// arrToObj.forEach((objProperty) => {
//   const key = objProperty[0];
//   const value = objProperty[1];
//   obj[key] = value;
// });

// console.log(obj);

//ЗАДАЧА No 5 | преобразование массива строк в массив их длин:
// создайте массив строк. Используя метод forEach,
//преобразуйте каждую строку в массиве в ее длину и добавьте
//результат в новый массив. Выведите новый массив с длинами строк.

// const stringArr = ["banana", "apple", "watermelon"];
// const newArr = [];

// stringArr.forEach((str) => {
//   newArr.push(str.length);
// });

// const result = newArr;
// console.log(result);
