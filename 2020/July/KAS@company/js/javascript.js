const Navigation1 = document.querySelector(".navigation-1");
const winHeightNav1 = window.outerHeight * 0.3;
const winHeightNav2 = window.outerHeight * 5;
const Navigation = document.querySelector(".navigation");
$(document).ready(function(){ //Вызов функции по загрузке интерфейса
  var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
  $(window).scroll(function(){ //Вызов функции при прокрутке страницы
    currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
      if(currentScrollTop > (winHeightNav1) / 5){
        Navigation1.style.background = "#0000004d";
      }
      else{
        Navigation1.style.background = "";
      }
      if (currentScrollTop > winHeightNav1 ) { //Проверка условия 'переменная больше высоты шапки'
        $('.navigation-1').addClass('fixed-navigation-1'); // создание класса 'fixed-header' в селекторе 'body'
        if (currentScrollTop > (winHeightNav2) ) {
          $('.navigation-2').addClass('fixed-navigation-2');   
        }else{
          $('.navigation-2').removeClass('fixed-navigation-2');
        }
      } else  { // выполнение, если первое условие не прошло проверку
        $('.navigation-1').removeClass('fixed-navigation-1'); // удаление класса 'fixed-header' в селекторе 'body'
        $('.navigation-2').removeClass('fixed-navigation-2'); 
      }
  });
});
// параллакс
const header = document.querySelector(".header");
const code = document.querySelector('.content-directions-parallax');
const containerNickname = document.querySelector('.container-nickname');
window.addEventListener('mousemove', function(e) {
  if($(window).scrollTop() < (header.offsetHeight * 0.85)){
    let x = (((window.innerWidth - window.innerWidth / 2) - e.clientX) / window.innerWidth) / -10;
    let y = (((window.innerHeight - window.innerHeight / 2) - e.clientY) / window.innerHeight) / 10 ;
    let K = 20;
    let L = 0.2;

    code.style.transform = `translate(${x * -K}vw, ${y * K}vh) rotate3d(${x * K}, ${y * K}, 0, ${-1 * (x * y) * -8000}deg)`;

    containerNickname.style.transform = `translate(${-x * K * L}vw, ${-y * K * L}vh) rotate3d(${x}, ${y}, 0, ${(x * y) * K * 200}deg)`;
    containerNickname.style.textShadow = `${x * 325}px ${y * -325}px 10px #bdbdbd`;
    
  }
});
// кнопка вверх
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
  if(top > 0) {  
    window.scrollBy(0,((top+100)/-10));  
    t = setTimeout('up()',20);  
  } else clearTimeout(t);  
  return false;  
} 
// функции для skill
function move() {
    var elem = document.getElementById("htmlBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move2() {
    var elem = document.getElementById("cssBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move3() {
    var elem = document.getElementById("jsBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move4() {
    var elem = document.getElementById("jqBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move5() {
    var elem = document.getElementById("bootBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
move();
move2();
move3();
move4();
move5();