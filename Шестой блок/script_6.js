// 1. Реализовать функцию foo:
// let a = {
//     name: 'static',
//     count: 0
// }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
//  {name:'static', count:1}, ..., {name:'static', count:9}] */

let a = {
    name: 'static',
    count: 0
}

function foo(a, propName, num) {
  arr = [];
  for (var i = a.count; i < num; i++) {
    let obj = Object.assign({}, a);
    obj.count = i;
    arr.push(obj);
  }
  return arr;
}

console.log(foo(a, 'count', 10));

// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
// хранится массив чисел, которые уже были сгенерированы функцией.

function randomNum(min, max) {
let arr = [];

    return function getNewRandom() {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (arr.indexOf(num) < 0) {
          arr.push(num);
          console.log(arr);
          return num;
        } else if (arr.length !== max) {
          return getNewRandom();
     } return console.log('Массив полон, генерация уникального числа невозможна');
   }
}
let t = randomNum(1,100);
console.log(t());
console.log(t());
console.log(t());
console.log(t());



// 3. Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например:
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.

let objStudent = {
  firstName: "Eric",
  lastName: "Cartman",
  age: 12,
  interests: ["play games", "eat", "jokes"],
  placeOfStuding: "School of South Park",
  getAllInfo() {
    console.log(this.firstName + " " + this.lastName + ". " + this.age + " год. Интересы: " + this.interests.join(", ") + ". Учится в " + this.placeOfStuding + ".")
  }
}
objStudent.getAllInfo();

objSt2 = objStudent;

objSt2.firstName = "Петя";
objSt2.lastName = "Иванов";
objSt2.age = 21;
objSt2.interests[1] = "плавать";
objSt2.placeOfStuding = "ПТУ №9";

objStudent.getAllInfo();

// 4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1

function factorialis(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorialis(n - 1);
}
}
console.log(factorialis(5));

// 5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию,
// определяющую порядок сортировки. Массив для тестирования:
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];


let arr2 = [
  { 'price' : 10, 'count' : 2 },
  { 'price' : 5, 'count' : 5},
  { 'price' : 8, 'count' : 5 },
  { 'price' : 12, 'count' : 4 },
  { 'price' : 8, 'count' : 4},
];

arr2 = arr2.sort((a, b) => b.price - a.price);

console.log(arr2);
