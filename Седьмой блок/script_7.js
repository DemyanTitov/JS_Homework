// 1. Создать функцию которая выводит время
// в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

let divTime = document.createElement("div");
let hSpan = document.createElement('span');
let mSpan = document.createElement('span');
let sSpan = document.createElement('span');

divTime.setAttribute("id", "time");
divTime.setAttribute("onload", getTime());
hSpan.style.color = "red";
mSpan.style.color = "green";
sSpan.style.color = "blue";

document.body.prepend(divTime);
divTime.append(hSpan,":",mSpan,":",sSpan);

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

let divProducts = document.createElement("div");
divProducts.setAttribute("id", "products");
divProducts.style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr 1fr";
divTime.after(divProducts);

function Product(img_src, article, description) {
  this.img_src = img_src;
  this.article = article;
  this.description = description;
  this.pushToArr = function() {
    return arrProduct.push(this);
  };
};

function addToHTML(arr) {
  for (var i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    divProducts.append(div);
    div.style.cssText = "margin: 5px; border: solid black 1px";

    let img = document.createElement("img");
    div.append(img);
    img.setAttribute("src", arr[i].img_src);
    img.setAttribute("width", "100%");

    let h3 = document.createElement("h3");
    div.append(h3)
    h3.innerHTML = arr[i].article;
    h3.style.cssText = "text-align: center; margin: 5px";

    let p = document.createElement("p");
    div.append(p)
    p.innerHTML = arr[i].description;
    p.style.cssText = "text-indent: 1.5em; margin: 10px; text-align: justify"
  }

};

let arrProduct=[];

let img_src1 = "https://cdn1.ozone.ru/s3/multimedia-e/c1200/6005708318.jpg";
let art1 = "Дисковый телефон.";
let descr1 = "Этот прибор времён древних богов доставит Вам не мало радости, если Вы будете лицезреть, как нео-люди пытаются им воспользоваться.";
let obj1 = new Product(img_src1, art1, descr1);

obj1.pushToArr();
obj1.pushToArr();
obj1.pushToArr();
obj1.pushToArr();
obj1.pushToArr();
obj1.pushToArr();

addToHTML(arrProduct);
