//подключен

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