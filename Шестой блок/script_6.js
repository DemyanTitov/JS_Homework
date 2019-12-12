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

    return function() {
      function getNum() {
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        return num;
      } ;
      let r = getNum();
      console.log(r);
      for (var i = 0; i < max; i++) {
        getNum();
        arr.length = i + 1;
        arr[i] = arr.push(r);
      }
      return arr;
    };
}
let t = randomNum(1,10);
console.log(t());
console.log(t());
console.log(t());
console.log(t());


// 3. Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например:
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
