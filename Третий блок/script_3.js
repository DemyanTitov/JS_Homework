// 1. Заданы два массива
// A = [ 12, 4, 3, 10, 1, 20 ]
// B = [-3, -7, -100, -33]
// необходимо их объединить
// в один массив C добавив
// массив B в конец(в начало) A.
let arrA = [ 12, 4, 3, 10, 1, 20 ] ;
let arrB = [-3, -7, -100, -33];
let arrC = arrA.concat(arrB);
console.log(arrC);

// 2. Одномерным массивом задана доска 3 на 3
// var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.
// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
let area = [ null, null, null, null, null, null, null, null, null ]

// 3. Задан массив  - [12,4,3,10,1,20].
// Удалить из него наименьшее и наибольшее значение.
let arrNum = [12,4,3,10,1,20];
for (var i = 0; i < arrNum.length - 1; i++) {
  //один проход
  for (let j = 0; j < arrNum.length - 1; j++){
    // одно попарное сравнение
    if (arrNum[j] < arrNum[j + 1]){
      let temp = arrNum [j];
      arrNum[j] = arrNum[j + 1];
      arrNum [j+1] = temp;
    }
  }
}
console.log(arrNum.pop() + " - Наименьшее значение");
console.log(arrNum.shift()+ " - Наибольшее значение");
console.log(arrNum);
