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

// 4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
// Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов
// с номерами от 000001 до 999999.
// «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна
// сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576.
// Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и
// теперь раздумывает, как много сувениров потребуется.
// С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.

let t = [0, 0, 0, 0, 0, 1],
    luckyT = 0
for (t[5];  t[0] <= 9; t[5]++){
    if (t[5] == 10) {
        t[5] = 0;
        t[4]++
    }
    if (t[4] == 10) {
        t[4] = 0;
        t[5] = 0;
        t[3]++
    }
    if (t[3] == 10) {
        t[5] = 0;
        t[4] = 0;
        t[3] = 0;
        t[2]++
    }
    if (t[2] == 10) {
        t[5] = 0;
        t[4] = 0;
        t[3] = 0;
        t[2] = 0;
        t[1]++
    }
    if (t[1] == 10) {
        t[5] = 0;
        t[4] = 0;
        t[3] = 0;
        t[2] = 0;
        t[1] = 0;
        t[0]++
    }
    if (t[5] + t[4] + t[3] == t[2] + t[1] + t[0]) {
        luckyT++
    }
}
console.log(luckyT + " - столько подарков потребуется для обладателей счастливых билетов")
