let playerName;
let playerHP = 40;
let grantHP = 10;
let wins = 0;
let winnerName;

function startGame() {
  let newGame = confirm("Do you want to play?");

  if (newGame) {
    playerName = prompt("What's your name?");
  }

  startCombat();
}

function startCombat() {
  console.log(`${playerName} has ${playerHP} HP. Grant has ${grantHP} HP.`);
  while (playerHP >= 0 && wins < 3) {
    playerHP -= Math.floor(Math.random() * 2) + 1;
    console.log(`${playerName} has ${playerHP} health left.`);
    grantHP -= Math.floor(Math.random() * 2) + 1;
    console.log(`Grant has ${grantHP} health left.`);
  
    if (grantHP <= 0) {
      wins++;
      grantHP = 10;
      console.log(`Grant has been defeated. ${playerName} wins: ${wins}`);
    }
}

  let action = prompt(
    `${playerName} has ${playerHP} HP remaining. Grant has ${grantHP} HP remaining. Attack or Quit?`
  );

  if (action === ("attack" || "Attack")) {
    playerHP -= getDamage();
    grantHP -= getDamage();
  }
}

if (playerHP > 0 && wins === 3) {
  console.log(`${playerName} wins.`);
} else if (playerHP <= 0) {
  console.log("Grant wins.");
}


function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

startGame();