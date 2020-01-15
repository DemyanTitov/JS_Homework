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

let commentBtn = document.getElementById("commentBtn");
commentBtn.onclick = function sendComment () {
  let comments = document.getElementById("comments");
  let comment = document.createElement("div");
  comment.classList.add("comment");
  comments.append(comment);

  let img = document.createElement("img");
  // let divImg = document.createElement("div");
  // divImg.append(img)
  comment.append(img);
  img.setAttribute("src", "./img/1.png");
  // img.setAttribute("width", "100%");
  img.classList.add("img");

  let name = document.createElement("h3");
  comment.append(name);
  name.innerHTML = "Иван Иванович";
  name.classList.add("name");

  let text = document.createElement("p");
  comment.append(text);
  text.innerHTML = document.getElementById("textarea").value;
  text.classList.add("text");

  let date = document.createElement("div");
  let hSpan = document.createElement('span');
  let mSpan = document.createElement('span');
  let sSpan = document.createElement('span');
  comment.append(date);
  date.append(hSpan,":",mSpan,":",sSpan);
  date.setAttribute("onload", getTime());
  function getTime() {
    let now = new Date();
    let h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    function checkTime(i){
      if (i<10){
        i="0" + i;
  }
      return i;
  };
    hSpan.innerHTML = h;
    mSpan.innerHTML = m;
    sSpan.innerHTML = s;
  };
  date.classList.add("date");
}

// 4. Дан массив с объектами, где каждый объект
// описывает книгу: артикул, автор, название, описание.
// Сформировать функцию, которой передаётся массив
// книг, и которая создаст и внесёт все
// необходимые html элементы, стили, и содержание
// для отображения всей информации о книгах в виду таблицы.
