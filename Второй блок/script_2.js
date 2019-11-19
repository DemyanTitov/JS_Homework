// 1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название
//     соответствующего времени года ("зима", "весна" и т.д.).

let numMonth = prompt("Введите номер месяца");
if (numMonth == 1 || numMonth == 2 || numMonth == 12) {
  console.log("Зима");
} else if (numMonth == 3 || numMonth == 4 || numMonth == 5) {
  console.log("Весна");
} else if (numMonth == 6 || numMonth == 7 || numMonth == 8) {
  console.log("Лето");
} else if (numMonth == 9 || numMonth == 10 || numMonth == 11) {
  console.log("Осень");
} else {
  console.log("Неверное значение");
}

// 2. Единицы длины пронумерованы следующим образом:
//     1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.
//     Дан номер единицы длины и длина отрезка L в этих единицах (вещественное
//     число). Вывести длину данного отрезка в метрах.

let typeLen = +prompt("Выберите единицу длины:\n 1 - Дециметр \n 2 - Километр \n 3 - Метр \n 4 - Миллиметр \n 5 - Сантиметр");
let L = +prompt("Введите длину отрезка");
let lenInMetr;
switch (typeLen) {
  case 1:
    lenInMetr = L * 0.1;
    console.log("Длина = " + lenInMetr + " м");
    break;
  case 2:
    lenInMetr = L * 1000;
    console.log("Длина = " + lenInMetr + " м");
    break;
  case 3:
    lenInMetr = L;
    console.log("Длина = " + lenInMetr + " м");
    break;
  case 4:
    lenInMetr = L * 0.001;
    console.log("Длина = " + lenInMetr + " м");
    break;
  case 5:
    lenInMetr = L * 0.01;
    console.log("Длина = " + lenInMetr + " м");
    break;
  default:
    console.log("Неверный ввод значений");
}

// 3. Дано целое число, лежащее в диапазоне от -999 до 999.
//     Вывести строку - словесное описание данного числа вида
//     "отрицательное двузначное число",
//     "нулевое число",
//     "положительное однозначное число" и т.д.
let N = parseInt(prompt("Введите целое число от -999 до 999"));

if (N >= -999 && N <= -100) {
  console.log(N + " - Отрицательное трехзначное число");
} else if (N >= -99 && N <= -10) {
  console.log(N + " - Отрицательное двузначное число");
} else if (N >= -9 && N <= -1) {
  console.log(N + " - Отрицательное однозначное число");
} else if (N == 0) {
  console.log(N + " - Нулевое число");
} else if (N >= 1 && N <= 9) {
  console.log(N + " - Положительное однозначное число");
} else if (N >= 10 && N <= 99) {
  console.log(N + " - Положительное двузначное число");
} else if (N >= 100 && N <= 999) {
  console.log(N + " - Положительное трехзначное число");
} else {
  console.log(N + " - Неверное значение");
}

// 4. Вывести через console.log все числа от 1 до 100, с двумя исключениями.
//     Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
//     а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
//     Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
for (let i = 1; i <= 100; i++) {
  if (i%3 == 0) {
    console.log("Three");
  } else if (i%5 == 0) {
    console.log("Five")
  } else if (i%3 == 0 && i%5 == 0) {
    console.log("ThreeFive")
  } else {
    console.log(i);
  }
}
