// 1. Создать функцию которая выводит время
// в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

let div = document.createElement("div");
let hSpan = document.createElement('span');
let mSpan = document.createElement('span');
let sSpan = document.createElement('span');

div.setAttribute("id", "time");
div.setAttribute("onload", getTime());
hSpan.style.color = "red";
mSpan.style.color = "green";
sSpan.style.color = "blue";

document.body.prepend(div);
div.append(hSpan,":",mSpan,":",sSpan);

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
  setTimeout("getTime()",1000);
};

// 2. Дан массив с объектами, где каждый объект
// описывает товар: фото, артикул, описание и т.п.
// Сформировать функцию, которой передаётся массив
// товаров, и которая создаст и внесёт все
// необходимые html элементы, стили, и содержание
// для отображения всей информации о товарах.

function Product(img_src, article, description) {
  this.img_src = img_src;
  this.article = article;
  this.description = description;
};

let obj1 = new Product("https://sun9-26.userapi.com/c851028/v851028946/1e7c65/VMAMwWZtui0.jpg", "Bla-bla", "Ho-ho-ho");
console.log(obj1);
let img = document.createElement("img");
div.after(img);
img.setAttribute("src", obj1.img_src);
// img.setAttribute("width",'300');
img.setAttribute("height",'300');
