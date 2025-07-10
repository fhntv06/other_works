// что нужно сделать
// 1) нужно тянуть за контейнер с текстом и он будет перемещаться за мышкой
// 2) сделать ползунки, чтобы можно было перемещать положение контейнера с текстом

const container = document.querySelector(".container");
let containerMove = false;

const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");

// ползунки
const barVertical = document.querySelector(".scroll-vertical .scroll-bar");
let barVerticalPositionBottom = barVertical.offsetTop + barVertical.offsetHeight;
const barVerticalParent = barVertical.offsetParent;
const barVerticalRect = barVertical.getBoundingClientRect();

let bar = false;

const barHorizontal = document.querySelector(".scroll-horizontal .scroll-bar");
let barHorizontalPositionRigth = barHorizontal.offsetLeft + barHorizontal.offsetWidth;
const barHorizontalParent = barHorizontal.offsetParent;
const barHorizontalRect = barHorizontal.getBoundingClientRect();

// подготовка к движению
let on = false;

// реализация движения - переписать
function dragMove(e) {
  if ( barVertical.offsetParent == e.target ) {
    offset(e);
    barVertical.style.top = `${e.clientY - barVertical.clientHeight}px`;
    container.style.top = `${e.clientY - barVertical.clientHeight}px`;
    barVerticalPositionBottom = e.clientY;
    
  }
  if ( barHorizontal.offsetParent == e.target ) {
    offset(e);
    barHorizontal.style.left = `${e.clientX - barHorizontalRect.right + barHorizontal.offsetWidth}px`;
    container.style.left = `${e.clientX - barHorizontalRect.right}px`;
    barHorizontalPositionRigth = e.clientX;
    
  }
  if ( containerMove ) {
    offset(e);
    barVertical.style.top = `${e.clientY - barVertical.clientHeight}px`;
    barHorizontal.style.left = `${e.clientX - barHorizontalRect.right + barHorizontal.offsetWidth}px`;
    container.style.left = `${e.clientX - container.clientHeight / 2}px`;
    container.style.top = `${e.clientY - container.clientWidth / 2}px`;
  }
}

function offset(e) {
  if ( barVerticalPositionBottom > (barVertical.offsetParent.clientHeight - barVertical.offsetHeight) ) {
    barVertical.style.top = `${barVertical.offsetParent.clientHeight - barVertical.clientHeight}px`;
  }
  if ( barHorizontalPositionRigth > (barHorizontal.offsetParent.clientWidth - barHorizontal.offsetWidth) ) {
    barHorizontal.style.left = `${barHorizontal.offsetParent.clientWidth - barHorizontal.clientWidth}px`;
  }
  // доделать чтобы не выходило за пределы
  // if ( (container.offsetLeft + container.offsetWidth) > (wrapper.offsetLeft + wrapper.offsetWidth - barVertical.offsetWidth) || (container.offsetTop + container.offsetHeight) > (wrapper.offsetTop + wrapper.offsetHeight - barHorizontal.offsetHeight) ) {
  //   container.style.left = `${e.clientX + container.clientHeight / 2}px`;
  //   container.style.top = `${e.clientY + container.clientWidth / 2}px`;
  // }
}

barVertical.offsetParent.addEventListener("mousedown", (e) => {
  on = true;
  bar = true;
});
barHorizontal.offsetParent.addEventListener("mousedown", (e) => {
  on = true;
  bar = true;
});
container.addEventListener("mousedown", () => {
  on = true;
  containerMove = true;
});

main.addEventListener("mouseup", (e) => {
  on = false;
  containerMove = false;
});

main.addEventListener("mousemove", (e) => {
  if ( on ) {
    dragMove(e);
  }
});

barVertical.offsetParent.addEventListener("click", (e) => {
  dragMove(e);
});
barHorizontal.offsetParent.addEventListener("click", (e) => {
  dragMove(e);
});


