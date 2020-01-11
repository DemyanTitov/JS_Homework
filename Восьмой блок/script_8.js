// 1. Даны несколько div элементов на html.
// По первому нажатию на каждый div
// он перекрашивается зеленым цветом,
// при повторном нажатии перекрашивается
// обратно и так далее каждый клик
// происходит чередование цвета.

let divs = document.querySelectorAll(".changeColour");

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(){
    if (this.style.background != "green") {
      this.style.background = "green"
    } else {
      this.style.background = ""
    }
  };
}

// 2. Реализовать счётчик нажатий на
// кнопку: Дана кнопка внутри неё
// записана цифра. При клике на
// кнопку – её значение должно
// увеличиваться на единицу.

let btn = document.getElementById("btn");

btn.onclick = function () {
  btn.innerText++;
}
