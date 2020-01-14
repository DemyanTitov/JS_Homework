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

// 3. Реализовать возможность добавления комментариев.
// Комментарий вводится в textarea.
// Комментарий добавляется по нажатию на кнопку Комментировать.
// При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый),
// имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата),
// текст комментария (тот, что был введен в textarea).
document.getElementById("textarea").value;
let commentBtn = document.getElementById("commentBtn");
commentBtn.onclick = function () {
  let comments = document.getElementById("comments");
  let comment = document.createElement("div");
  comment.classList.add("comment");
  comments.append(comment);

  let img = document.createElement("img");
  let divImg = document.createElement("div");
  divImg.append(img)
  comment.append(divImg);
  img.setAttribute("src", "./img/1.png");
  // img.setAttribute("width", "100%");
  divImg.classList.add("divImg");

}
