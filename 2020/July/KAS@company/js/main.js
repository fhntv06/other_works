//crossbrouser
// скрипт для apple device
const buttonRight = document.querySelector(".button-right");
const buttonLeft = document.querySelector(".button-left");
const device = document.querySelector(".device");
let devices = ['iphone', 'mini', 'ipad', 'macbook', 'imac'];
let i = 0;
function nextDevice(event){
	let target = event.target;
	if(target == buttonRight){
		i++;	
		if(i != devices.length){
			device.className = "device " + devices[i];
		}else{
			i = 0;
			device.className = "device " + devices[i];
		}
	}
	if(target == buttonLeft){
		i--;
		if(i < 0){
			i = devices.length - 1;
			device.className = "device " + devices[i];
		}else{
			device.className = "device " + devices[i];
		}
	}
}
buttonRight.addEventListener("click", nextDevice);
buttonLeft.addEventListener("click", nextDevice);

//css_St
function viewCSS(){
    $("#text-css").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(900); // 5s
    setTimeout(()=>{  
       consoleText(["1_.main{ <br> 2___display: flex; <br> 3___flex-direction: row; <br> 4___justify-content: center; <br> 5___align-items: center; <br> 6___height: 20vh;<br> 7___width: 100%;<br> 8___transition: 2s; <br>}<br><br> 9_.main-content{ <br> 10___display: flex; <br> 11___flex-direction: row; <br> 12___justify-content: center; <br> 13___align-items: center; <br> 14___height: 100%; <br> 15___width: 40%; <br> 16___background-color: #29b6f6;<br> 17___border-radius: 10px; <br> 18___box-shadow: 0 -2px 10px 1px #00acff; <br> }"], 
       'text-css',['white']); // начала печатает string1, затем string2 и т.д.
      function consoleText(words, id, colors) {
        if (colors === undefined){
          colors = ['#fff'];  
        } 
        var visible = true;
        var con = document.getElementById('console-css');
        var letterCount = 1;
        var x = 1;
        var waiting = false;  // ожидание после прохождения кода вперед и назад
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {
          if (letterCount === 0 && waiting === false) {
            waiting = true; 
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = false; // true - печать вперед-назад,false - печать вперед
            window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = true; // false - печать вперед-назад, true - печать вперед
            }, 1000 )//скорость печатания строк 
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 45) // скорость печати каждой буквы
          }
        }, 5000);
    }
viewCSS();

// форма обратной связи
$(document).ready(function() {
    // для bottom
        //E-mail Ajax Send
        $("#form-bottom-feedback").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("POST!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    // для modal form
        //E-mail Ajax Send
        $("#form-modal-feedback").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    });

//html_St
function viewHTML(){
    $("#text-html").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(900); // 5s
      setTimeout(()=>{
            const outText = document.querySelector(".out-text");
            // код для перебора кода на консоли
            // function([string1, string2],target id,[color1,color2])   
             consoleText(["1_&lt!DOCTYPE html&gt <br> 2_&lthtml lang='en'&gt <br> 3_&lthead&gt <br> 4____&lttitle&gtHello  World!&lt/title&gt <br> 5____&ltmeta charset='utf-8'&gt <br> 6____&ltlink href='https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;300;500;700;900&display=swap' rel='stylesheet'&gt <br> 7____&ltlink rel='stylesheet' type='text/css' href='./css/style.css'&gt <br> 8_&lt/head&gt <br> 9_&ltbody&gt <br> 10___&ltdiv class='main'&gt <br> 11_______&ltdiv class='main-content'&gt  <br> 12___________&lth1&gt &lt /h1&gt <br> 13_______&lt/div&gt <br> 14___&lt/div&gt <br> 15___&ltscript src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'&gt&lt/script&gt <br> 16___&ltscript type='text/javascript' src='./js/main.js'&gt&lt/script&gt <br> 17_&lt/body&gt <br> 18_&lt/html&gt"], 
              'text-html',['white']);
            function consoleText(words, id, colors) {
              if (colors === undefined){
                colors = ['#fff'];  
              } 
              var visible = true;
              var con = document.getElementById('console-html');
              var letterCount = 1;
              var x = 1;
              var waiting = false; // ожидание после прохождения кода вперед и назад
              var target = document.getElementById(id)
              target.setAttribute('style', 'color:' + colors[0])
              window.setInterval(function() {
                if (letterCount === 0 && waiting === false) {
                  waiting = true;
                  target.innerHTML = words[0].substring(0, letterCount)
                  window.setTimeout(function() {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                  }, 1000)
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                  waiting = false; // true - печать вперед-назад,false - печать вперед
                  window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = true; // false - печать вперед-назад, true - печать вперед
                  }, 1000 )//скорость печатания строк 
                } 
                else if (waiting === false) {
                  target.innerHTML = words[0].substring(0, letterCount)
                  letterCount += x;
                }
              }, 30) // скорость печати каждой буквы
            }
          }, 5000);
}
viewHTML();

//js_St
function viewJS(){
  $("#text-js").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(900); // 9s
  setTimeout(()=>{  
    consoleText(['// js <br> 1_H1 = document.querySelector("h1"); <br> 2_H1.innerHTML = "Hello World!"; <br><br> // jquery <br>'], 'text-js',['white']);

    function consoleText(words, id, colors) {
    if (colors === undefined){
      colors = ['#fff'];  
    } 
    var visible = true;
    var con = document.getElementById('console-js');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = false;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = true;
        }, 1000 )//скорость печатания строк 
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120) // скорость печати каждой буквы
    // window.setInterval(function() {
      }
  }, 5000);
};
viewJS();

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

// modal!!
const body = document.querySelector("body");
const input = document.querySelector(".input");
const modalDialogBottomTextInnerHTML = document.querySelector(".modal-dialog-bottom-text-innerHTML");
const containerModal = document.querySelector(".container-modal");
const btn = document.querySelectorAll(".btn");
const formButton = document.querySelector(".form-button");

// закрытие modal
function modalNoActive(){
	containerModal.style.display = "";
	body.style.overflowY = "";
	input.value = "";
}
// открытие modal
function modalActive(){
	containerModal.style.display = "block";
	body.style.overflowY = "hidden ";
	formButton.addEventListener("click", modalNoActive);
	modalDialogBottomTextInnerHTML.value = "I'm happy! (￣▽￣)";
}

// для верхней кнопки
btn[0].addEventListener("click", modalActive);
// для нижней кнопки
btn[1].addEventListener("click", modalActive);
// работа с эмоджи
document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
	const angry = document.querySelector("#angry");
    const sad = document.querySelector("#sad");
    const ok = document.querySelector("#ok");
    const good = document.querySelector("#good");
    const happy = document.querySelector("#happy");
    const modalDialogBottomTextInnerHTML = document.querySelector(".modal-dialog-bottom-text-innerHTML");
	let target = e.target;
    if(target === angry){
		modalDialogBottomTextInnerHTML.value = " I'm angry! (◣_◢)";
    }else if(target === sad){
		modalDialogBottomTextInnerHTML.value = " I'm sad! (╯_╰)";
    }else if(target === ok){
		modalDialogBottomTextInnerHTML.value = " I'm ok! (ー_ー )";
    }else if(target === good){
		modalDialogBottomTextInnerHTML.value = " I'm good! (◕‿◕)";
    }else if(target == happy){
		modalDialogBottomTextInnerHTML.value = " I'm happy! (￣▽￣)";
    }
    // отвечает за active эмоджи
    if(!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));
const modalDialog = document.querySelector(".modal-dialog");
// работа с background
containerModal.addEventListener("mousemove", function(e){
	let x0 = -((window.innerWidth - window.innerWidth / 2) - e.clientX);
	let y0 = (window.innerHeight - window.innerHeight / 2) - e.clientY;
	let w = window.innerWidth;
	let h = window.innerHeight;
  	modalDialog.style.background = `linear-gradient(90deg, rgb(30, 136, 229, 0.95) ${(x0 / w) * 200 + 30}%, rgba(63, 81, 181, 0.55) ${((x0 / w) + 0.1) * 200 + 30}%,  rgb(30, 136, 229, 0.95) ${(x0 / w) * 200 + 70}%`;
});

//slider
$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
});