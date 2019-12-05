// 1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива,
// сравнивает их и возвращает true, если массивы равны и false, если не равны.
let arr1 = [1,2,3];
let arr2 = [1,2];

function compareArrs(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(compareArrs(arr1, arr2));

// 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

let firstNum = +prompt("Введите первое число диапазона");
let lastNum = +prompt("Введите последнее число диапазона");
let step = +prompt("Введите шаг");
let arr = [];
let count = 1;

while (firstNum > lastNum || firstNum == lastNum) {
  firstNum = prompt("Первое число должно быть меньше последнего");
  lastNum = prompt("Последнее число должно быть больше первого");
}
if (step == null || step == "") {
  step = 1;
} else if (step <= 0) {
  step = +prompt("Шаг должен быть больше или равен 1");
}

console.log(firstNum, lastNum, step);
function showArr() {



arr.push(firstNum);
for (var i = firstNum + 1; i <= lastNum; i++) {
        count++
        if (count%step != 0 || step == 1) {
          arr.push(i);
        }
};
}
showArr();
console.log(arr);

// 3. Построить объект студент со свойствами:
// Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент,
// а она выводит его содержимое.

let objStudent = {
  firstName: "Eric",
  lastName: "Cartman",
  age: 12,
  interests: ["play games", "eat", "jokes"],
  placeOfStuding: "School of South Park",
}

function objProp(obj) {
  for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

objProp(objStudent);
