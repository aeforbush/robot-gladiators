var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enenmyAttack = 12;



var fight = function(enemyName) {
    // repeat and excute as long as the enemy-robot is alive
    while(enemyHealth > 0) {

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose. ");


// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

// remove enemy's health by subtracting the amount set in the playerAttack variable.
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by substracting the amount set in the enemyAttack variable.
playerHealth = playerHealth - enenmyAttack;
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} 

else {
    window.alert(playerName + " still has " + playerHealth + " health remaining.");
}

// if player choses to skip

if (promptFight === "skip" || promptFight ==="SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        playerMoney = playerMoney - 2;

} 

else if (fight); {
    }
} 

else {
    window.alert("You need to pick a valid option.  Try again!");
}
}

for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    fight(enemyNames[i]);
}
    }
}

