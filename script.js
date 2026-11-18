const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }

});

// Find the picture on the homepage
const gameImage = document.querySelector("#start-game");

// Start the game when the picture is clicked
gameImage.addEventListener("click", function() {
    startGame();
});

let sword = false;

//this code runs when the player clicks the start button.
function startGame() {
	//save their choice as a boolean variable.
	//we use const because we won't change this variable later on.
	const choice = confirm(
		"You wake up in a dark room. There are two doors in front of you. Click OK to go left, or Cancel to go right.",
	);

	//use an if statement to check the player's choice and call the appropriate function.
	if (choice) {
		chooseLeftDoor();
	} else {
		chooseRightDoor();
	}
}

function chooseLeftDoor() {
	//we can call this variable choice again because it's a different variable that only exists inside this function.
	const choice = confirm(
		"You enter the left door and find a treasure chest. Click OK to open it, or Cancel to keep walking.",
	);
	if (choice) {
		openTreasureChest();
	} else {
		leaveTreasureChest();
	}
}

function openTreasureChest() {
	const choice = confirm("You open the treasure chest and find that it is a mimic! Click OK to fight it, or click Cancel to run away.");
	if (choice) {
		fightMimic();
	} else {
		runAwayFromMimic();
	}
}

function killMimic() {
	const choice = confirm(
		"you decide to fight the mimic with your sword. you kill it and get a huge pile of gold! you are rich and live happily ever after.",
	);
}

function fightMimic() {
	if (sword === true) {
		killMimic();
	} else {
		confirm(
			"You decide to fight the mimic, but you forgot you don't have a weapon. You die and are slowly digested. Game over.",
		);
	}
}

function runAwayFromMimic() {
	const choice = confirm(
		"You run away from the mimic and find a sword. Click OK to pick it up and return to the treasure chest, or Cancel to keep walking without it.",
	);
	if (choice) {
		sword = true;
		fightMimic();
	} else {
		sword = false;
		leaveTreasureChest();
	}
}

function leaveTreasureChest() {
	const choice = confirm(
		"You decide to leave the treasure chest alone and continue on your adventure. you find a princess that is trapped! Click OK to try and Save her, or click Cancel to let the moncarcy die.",
	);
	if (choice) {
		savePrincess();
	} else {
		letPrincessDie();
	}
}

function savePrincess() {
	const choice = confirm(
		"You decide to save the princess. thus the tryranical and brutal rule of the monarchy continues. you are alive and wealthy, but at what cost?"
	);
}

function letPrincessDie() {
	const choice = confirm(
		"You decide to let the princess die. thus the tyranical and brutal monarchy comes to and end. you see light ahead of you. Click OK to walk into the light, or click Cancel to stay in the darkness.",
	);
	if (choice) {
		walkIntoLight();
	} else {
		stayInDarkness();
	}
}

function walkIntoLight() {
	const choice = confirm(
		"You walk into the light and find yourself looking down the blade of a fellow adventurer. he demands to know how you got here. click OK to tell him the truth, or click Cancel to lie.",
	);
	if (choice) {
		tellTruth();
	} else {
		lie();
	}
}

function tellTruth() {
    const choice = confirm(
        "You tell the truth and he is grateful for your honesty. he is here to kill all the monsters in this dugeon and he invites you to join him. click OK to fight the Dragon first, or click Cancel to fight the Mimic first.",
    );
    if (choice) {
        fightDragon2();
    } else {
        fightMimic2();
    }
}

function lie() {
    const choice = confirm(
        "He seems to belive you. he is here to kill all the monsters in this dugeon and he invites you to join him. click OK to fight the Dragon first, or click Cancel to fight the Mimic first.",
    );
    if (choice) {
        fightDragon3();
    } else {
        fightMimic3();
    }
}

function fightDragon2() {
    const choice = confirm(
        "You both fight the dragon. you find that you can either injure it's wings or disable it's fire breath. click OK to injure it's wings, or click Cancel to disable it's fire breath.",
    );
    if (choice) {
        injureDragonWings();
    } else {
        disableDragonFireBreath();
    }
}

function injureDragonWings() {
    const choice = confirm(
        "You injure the dragon's wings and it falls to the ground. you both kill it and find a huge pile of gold! now to fight the Mimic. click OK to fight the Mimic with your sword, or click Cancel to run away.",
    );
    if (choice) {
        sword = true;
        fightMimic();
    } else {
        runAway();
    }
}

function disableDragonFireBreath() {
    const choice = confirm(
        "You disable the dragon's fire breath and it falls to the ground. you both kill it and find a huge pile of gold! you did lose your sword in the fight. CLick OK to try and fight the Mimic without a sword, or click Cancel to run away.",
    );
    if (choice) {
        fightMimicWithoutSword();
    } else {
        runAway();
    }
}

function fightMimicWithoutSword() {
    const choice = confirm(
        "You try to fight the mimic without a sword, but you die and are slowly digested. your friend is able to kill the mimic and get a huge pile of gold! you are dead, but your friend is rich and lives happily ever after.",
    );
}

function runAway() {
    const choice = confirm(
        "you try to run away. your friend thinks you are a coward but lets you go. you are alive, and slightly richer, but you lost a firend."
    );
}

function fightMimic2() {
    const choice = confirm(
        "you decide to fight the mimic with your sword. you kill it and get a huge pile of gold! now to kill the dragon. click OK to fight the Dragon, or click Cancel to run away.",
    );
    if (choice) {
        fightDragon4();
    } else {
        runAway();
    }
}

function fightDragon4() {
     const choice = confirm(
        "You both fight the dragon. you find that you can either injure it's wings or disable it's fire breath. click OK to injure it's wings, or click Cancel to disable it's fire breath.",
    );
    if (choice) {
        injureDragonWings2();
    } else {
        disableDragonFireBreath2();
    }
}

function injureDragonWings2() {
    const choice = confirm(
        "You injure the dragon's wings and it falls to the ground. you both kill it and find a huge pile of gold! you are rich and live happily ever after.",
    );
}

function disableDragonFireBreath2() {
    const choice = confirm(
        "You disable the dragon's fire breath and it falls to the ground. you both kill it and find a huge pile of gold! you did lose your sword in the fight. you are rich and live happily ever after.",
    );
}

function fightMimic3() {
    const choice = confirm(
        "you decide to fight the mimic. your firend stabs you in the back because you lied to him. he kills the mimic and gets the gold.",
    );
}

function fightDragon3() {
    const choice = confirm(
        "You both fight the dragon. your firend stabs you in the back because you lied to him. he runs away and leaves you as dragon food.",
    );
}

function stayInDarkness() {
    const choice = confirm(
        "You stay in the darkness and find yourself lost. you bump into something warm and scaly. Click OK to Stab it, or click Cancel to try and sneak past it.",
    );
    if (choice) {
        stabDragon();
    } else {
        sneakPastDragon();
    }
}

function chooseRightDoor() {
	const choice = confirm(
		"You enter the right door and find a sleeping dragon. Click OK to try to sneak past it, or Cancel to go back.",
	);
	if (choice) {
		sneakPastDragon();
	} else {
		chooseLeftDoor();
	}
}

function sneakPastDragon() {
	const choice = confirm(
		"You try to sneak past the dragon, but it wakes up and eats you! Game over.",
	);
}

function stabDragon() {
    const choice = confirm(
        "You stab the dragon and it wakes up! Click OK to fight it, or click Cancel to run away.",
    );
    if (choice) {
        fightDragon();
    } else {
        runAwayFromDragon();
    }
}

function fightDragon() {
    const choice = confirm(
        "You fight the dragon but are just 1 adventurer against a dragon. You die and are slowly digested. Game over.",
    );
}

function runAwayFromDragon() {
    const choice = confirm(
        "you try to run away from the dragon, but it is too fast and catches you! You die and are slowly digested. Game over.",
    );
}