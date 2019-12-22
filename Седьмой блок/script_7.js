// 1. Создать функцию которая выводит время
// в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

function getTime() {
  let now = new Date();
  let h = now.getHours(),
      m = now.getMinutes(),
      s = now.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  function checkTime(i){
    if (i<10){
      i="0" + i;
}
    return i;
};
  document.getElementById("time").innerHTML = `Текущее время ${h}:${m}:${s}`;
  t = setTimeout("getTime()",500);
};
