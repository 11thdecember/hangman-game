var rat1 = document.getElementById("rat1");
var rat2 = document.getElementById("rat2");
var rat3 = document.getElementById("rat3");
var rat4 = document.getElementById("rat4");
var rat5 = document.getElementById("rat5");
var rat6 = document.getElementById("rat6");
var score = document.getElementById("score");
var count = 0;
var game = document.getElementById("game");
var youWin = document.getElementById("youwin");
var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var clapping = document.getElementById("clapping");

var missesDisplay = document.getElementById("misses");
let misses = 0;
let isClick = false;

let currentTime = 10;
setInterval(function () {
  var random = Math.floor(Math.random() * 6) + 1;
  var rat = "rat" + random;
  // eval function string convert to function
  var ra = eval(rat);

  misses++;
  missesDisplay = misses;
  if (misses > 4) {
    youlost.style.display = "block";
    game.style.display = "none";
    sound1.pause();
  }

  sound1.play();
  ra.classList.add("animate");
  setTimeout(function () {
    ra.classList.remove("animate");
  }, 1000);
  if (isClick) {
    
  }
  ra.onclick = function () {
    count++;
    sound2.play();
    score.innerHTML = count;
    misses = 0;
  };
}, 1000);

setInterval(function () {
  if (count > 3) {
    youWin.style.display = "block";
    game.style.display = "none";
    sound1.pause();
    clapping.play();
    clapping.play();
  }
}, 10);

