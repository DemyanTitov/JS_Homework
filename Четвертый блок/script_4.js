// 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.

let str1 = "55555";
let sum = 0;
for (let i = 0; i < str1.length; i++) {
  sum += parseInt(str1[i]);
}
console.log(sum);

// 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.

let str2 = "Строка в которой необходимо удвоить вхождение символа";
let symbol = "о";
let str3 = "";

for (let i = 0; i < str2.length; i++) {
  str3 += str2[i];
  if (str2[i] === symbol) {
    str3 += str2[i];
  }
}
console.log(str3);

// 3. Проверить что введенный пароль удовлетворяет
// следующим условиям сложности:
// - длинна от 9 символов;
// - содержит обязательно английские буквы верхнего и нижнего регистра;
// - содержит более двух цифр;
// - содержит обязательно один из неалфавитных символов (например, !, $, #, %).

let pass = prompt("Введите пароль:");
let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[0-9]){3,})(?=.*[^\w\s]).{9,}/g;
let result = regExp.test(pass);
console.log(result);
if (pass.length < 9) {
  console.log("Длина пароля должна составлять минимум 9 символов");
} else if (result == true){
  console.log(pass);
} else {
  console.log("Неверно введён пароль");
}
