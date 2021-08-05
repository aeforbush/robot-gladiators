var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enenmyAttack = 12;


// function to start a new game
var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.lengthj; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i +1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            // use debugger to pause script from running and checking what's going on at that moment in the code
            // debugger;
            fight(pickedEnemyName);
        }
        else {
            window.alert("you have lost your robot in battle! Game Over!");
            break;
        }
    }

};

var fight = function(enemyName) {
    // repeat and excute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose. ");

    // if player choses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight ==="SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
    }
}

    // remove enemy's health by subtracting the amount set in the playerAttack variable.
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    // if the enemy-robot's health is zero or less, exit from the fight loop.

    // award player money for winning
    playerMoney = playerMoney +20;

    //leave while () loop since eneymy is dead
    break;
    } else {
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
     // leave while () loop if player is dead
    break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }
};

// as player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

// function to end the game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle");
    }
};


startGame();


//fight();

