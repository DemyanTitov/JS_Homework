// 1. Создать функцию которая выводит время
// в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

let divTime = document.createElement("div");
let hSpan = document.createElement('span');
let mSpan = document.createElement('span');
let sSpan = document.createElement('span');

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
  t = setTimeout("getTime()",1000);
};
