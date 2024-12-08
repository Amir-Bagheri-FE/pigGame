// dice in game
let dice = document.querySelector(".roll"); //roll button
let picdi = document.getElementById("dice");
let points = document.querySelector(".current-p1");
let points2 = document.querySelector(".current-p"); //using point
let turn = document.querySelector(".turn");
let side = true; // an vriable to check the side of players
//dice
dice.addEventListener("click", () => {
  // checking if anyone has won the game
  if (holdp1.innerHTML >= 100) {
    dice.disabled = true;
    document.querySelector(".title").innerHTML = "player 1 is the winner";
    document.querySelector(".title").style.color = "red";
  } else if (holdp2.innerHTML >= 100) {
    dice.disabled = true;
    document.querySelector(".title").innerHTML = "player 2 is the winner";
    document.querySelector(".title").style.color = "red";
  }

  //just display dice image
  let random = Math.floor(Math.random() * 6 + 1); //making random num 1 to 6
  document.querySelector(".dice").src = `images/dice-${random}.png`;

  // calculate points
  if (random == 1) {
    switchside();
  } else {
    if (side == true) {
      points.innerHTML = Number(points.innerHTML) + random;
    }

    if (side == false) {
      points2.innerHTML = Number(points2.innerHTML) + random;
    }
  }
});

function switchside() {
  if (side) {
    turn.textContent = "it's player 2 turn";
  } else {
    turn.textContent = "it's player 1 turn";
  }
  side = !side;
  points.innerHTML = 0;
  points2.innerHTML = 0;
}
// use of hold points
let holdp1 = document.querySelector(".pl1-point");
let holdp2 = document.querySelector(".pl2-point");
// write the contniue of the functions for hold button
let hold = document.querySelector(".hold");
hold.addEventListener("click", () => {
  if (side == true) {
    holdp1.innerHTML = Number(holdp1.innerHTML) + Number(points.innerHTML);
    switchside();
  } else {
    holdp2.innerHTML = Number(holdp2.innerHTML) + Number(points2.innerHTML);
    switchside();
  }
});

document.querySelector(".start").addEventListener("click", () => {
  dice.disabled = false;
  document.querySelector(".title").innerHTML = "welcome to the pig game";
  document.querySelector(".title").style.color = "";
  holdp1.innerHTML = 0;
  holdp2.innerHTML = 0;
});
