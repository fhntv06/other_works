//подключен

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
    // window.setInterval(function() {
    //   if (visible === true) {
    //     con.className = 'console-underscore hidden'
    //     visible = false;

    //   } else {
    //     con.className = 'console-underscore'

    //     visible = true;
    //   }
    // }, 500) // скорость моргания палки _
      }
    }, 5000);
}

viewCSS();