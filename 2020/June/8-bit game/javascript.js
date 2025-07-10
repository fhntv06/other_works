const Main = document.querySelector(".main");

const Scope = document.querySelector(".scope");
const containerBottom = document.querySelector(".container-bottom");

const Gif = document.querySelector(".gif");

const ScopeNum = document.querySelector("#scopeNum");
const CoinsNum = document.querySelector("#coinsNum");
const LiveNum = document.querySelector("#liveNum");
const TimeNum = document.querySelector("#timeNum");

const Coins = document.querySelector(".img-coins");
const blockCoins = document.querySelector(".block-coins");

const Ground = document.querySelector(".block-ground");

//модальные окно
  // start
  const modalStart = document.querySelector(".modal-start");
  const modalStartBtn = document.querySelector(".modal-start-btn");

  // end
  const modalEnd = document.querySelector(".modal-end");
  const modalText = document.querySelector(".modal-text-end");
  const modalBtnEnd = document.querySelector(".modal-btn-end");
//

// получение облаков
const cloudRight1 = document.querySelector(".cloud-right-1");
const cloudRight2 = document.querySelector(".cloud-right-2");
const cloudLeft1 = document.querySelector(".cloud-left-1");
const cloudLeft2 = document.querySelector(".cloud-left-2");

let Degree = 0;
let coin = 0;
let scope = 0;
let lives = 1;

LiveNum.innerHTML = lives;
CoinsNum.innerHTML = coin;
ScopeNum.innerHTML = coin;

// ширина браузерного окна
let winWidth = window.outerWidth;
let groundWidth = Ground.width;

// границы ground
let CoordinatGround = Ground.getBoundingClientRect()
TopGround = CoordinatGround.top;
RightGround = CoordinatGround.right;

BottomGround = CoordinatGround.bottom;
LeftGround = CoordinatGround.left;

// падение gif
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyD' || event.code == "ArrowRight") {
    let CoordinatGif = Gif.getBoundingClientRect();
    LeftGif = CoordinatGif.left;
    BottomGif = CoordinatGif.bottom;
    if((RightGround - (RightGround * 0.05)) < LeftGif){
      Gif.style.bottom = `-40vh`;
       if(BottomGif >= TopGround){
        if(lives != 0){
          lives--;
          LiveNum.innerHTML = lives;
        }
        
        // работа с modal-end
        modalEnd.style.display = "block";
        modalText.innerHTML = "You Lose!";
      }
    }
  }
});

//счетчик time
let time = 300;
let Timer = setInterval(function(){
  if(time > 0){
    time--;
    TimeNum.innerHTML = time;
  }
}, 1000)


//нажатие клавиш + движение персонажа + нельзя пройти за экран влево
document.addEventListener('keydown', function(event) {
  let CoordinatGif = Gif.getBoundingClientRect();
  LeftGif = CoordinatGif.left;
  if((LeftGround <= LeftGif) && (LeftGround != LeftGif)){
    if (event.code == 'KeyW' || event.code == "ArrowUp"){
      Gif.classList.add("gif-jump");
      setTimeout(function(){
        Gif.classList.remove("gif-jump");
      }, 1000);
    }
    if(event.code == 'KeyS' || event.code == "ArrowDown"){
      Gif.classList.remove("gif-jump");
    }
    if (event.code == 'KeyA' || event.code == "ArrowLeft") {

        Gif.style.transform = `translate(${Gif.d = (Gif.d | 0) - (winWidth / 76.8)}px)` + ` rotateY(180deg)`;
    }
  }
  if (event.code == 'KeyD' || event.code == "ArrowRight") {
      Gif.style.transform = `translate(${Gif.d = (Gif.d | 0) + (winWidth / 76.8)}px)` + ` rotateY(0deg)`;
  }
});

// addCoin
document.addEventListener('keydown', function(event) {
  //код для получения coin - движение вправо и влево
  if ((event.code == 'KeyD' || event.code == 'ArrowRight') || (event.code == 'KeyA' || event.code == 'ArrowLeft')) {
    let CoordinatblockCoins = blockCoins.getBoundingClientRect();
    let blockCoinsWidth = CoordinatblockCoins.width;  
    LeftBlockCoins = CoordinatblockCoins.left;
    RightBlockCoins = CoordinatblockCoins.right;
    TopBlockCoins = CoordinatblockCoins.top;

    let CoordinatGif = Gif.getBoundingClientRect()
    RightGif = CoordinatGif.right;
    BottomGif = CoordinatGif.bottom;
    LeftGif = CoordinatGif.left;

    if(
      // между левой и серединной границей + праваяGif граница
      ((LeftBlockCoins + (blockCoinsWidth * 0.4)) <= RightGif) 
      // ограничение до правой границы
      && (RightBlockCoins >= RightGif) 
      // ограничение по высоте
      && (BottomGif >= TopBlockCoins) 
      ){

      blockCoins.style.display = "none";
      CoinsNum.innerHTML = `${coin = coin + 1}`;
      ScopeNum.innerHTML = `${scope = scope + 50}`;

      // работа с modal
      modalEnd.style.display = "block";
      modalText.innerHTML = "You Win!";

      // time - stop
      clearInterval(Timer);
    }
    if(
      // между левой и серединной границей + праваяGif граница
      ((LeftBlockCoins + (blockCoinsWidth * 0.4)) >= LeftGif) 
      // ограничение до правой границы
      && (LeftBlockCoins <= LeftGif) 
      // ограничение по высоте
      && (BottomGif >= TopBlockCoins) 
      ){

      blockCoins.style.display = "none";
      CoinsNum.innerHTML = `${coin = coin + 1}`;
      ScopeNum.innerHTML = `${scope = scope + 50}`;

      console.log(CoinsNum.getBoundingClientRect().right);
      // работа с modal
      modalEnd.style.opacity = "1";
      modalEnd.style.display = "block";
      modalText.innerHTML = "You Win!";

      // time - stop
      clearInterval(Timer);
    }
  }
});



// перезапуск уровня
modalBtnEnd.addEventListener("click", function stopDefAction() {
    window.location.reload();
});

modalStartBtn.addEventListener("click", function(){
  modalStart.style.display = "none";
  Gif.style.display = "block";
  Gif.style.transform = `translate(${Gif.d = 0}px)` + ` rotateY(0deg)`;
  containerBottom.style.opacity = "1";
  Scope.style.display = "flex";

  // движение облаков
  setTimeout(function(){
   cloudRight1.style.transform = `translate(${cloudRight1.d = (cloudRight1.d | 0) - winWidth}px)`;
   cloudRight2.style.transform = `translate(${cloudRight2.d = (cloudRight2.d | 0) - winWidth}px)`;
   cloudLeft1.style.transform = `translate(${cloudLeft1.d = (cloudLeft1.d | 0) - winWidth}px)`;
   cloudLeft2.style.transform = `translate(${cloudLeft2.d = (cloudLeft2.d | 0) - winWidth}px)`;
  }, 500);

//rotate coin
setInterval(function(){
  if(Degree == 360){
    Degree = 0;
  }
  Degree+=1;
  Coins.style.transform = `rotateY(${Degree}deg)`;
}, 10)
});