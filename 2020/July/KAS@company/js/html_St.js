function viewHTML(){
    $("#text-html").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(900); // 5s
      setTimeout(()=>{
            const outText = document.querySelector(".out-text");
            // код для перебора кода на консоли
            // function([string1, string2],target id,[color1,color2])   
             consoleText(["1_&lt!DOCTYPE html&gt <br> 2_&lthtml lang='en'&gt <br> 3_&lthead&gt <br> 4____&lttitle&gtHello  World!&lt/title&gt <br> 5____&ltmeta charset='utf-8'&gt <br> 6____&ltlink href='https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;300;500;700;900&display=swap' rel='stylesheet'&gt <br> 7____&ltlink rel='stylesheet' type='text/css' href='./css/style.css'&gt <br> 8_&lt/head&gt <br> 9_&ltbody&gt <br> 10___&ltdiv class='main'&gt <br> 11_______&ltdiv class='main-content'&gt  <br> 12___________&lth1&gtHello  World!&lt /h1&gt <br> 13_______&lt/div&gt <br> 14___&lt/div&gt <br> 15___&ltscript src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'&gt&lt/script&gt <br> 16___&ltscript type='text/javascript' src='./js/main.js'&gt&lt/script&gt <br> 17_&lt/body&gt <br> 18_&lt/html&gt"], 
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