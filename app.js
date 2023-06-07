let scoreboardDiv = document.querySelector(".score");
let buttonDiv = document.querySelector(".buttons");
let teamOneTracker = document.querySelector(".teamOneTracker");
let teamTwoTracker = document.querySelector(".teamTwoTracker");
let players = document.querySelector(".players")

class Game {
  constructor() {
    this.teamOnePoints = 0;
    this.teamTwoPoints = 0;
    this.possession = "Team One";
    this.shootThree = document.createElement("button");
    this.pass = document.createElement("button");
    this.shootTwo = document.createElement("button");
    this.shootTwo.innerText = `Shoot Two: 30%`;
    this.shootThree.innerText = `Shoot Three: 20%`;
    this.pass.innerText = "Pass";
    this.scoreboard = document.createElement("div");
    this.scoreboard.classList.add("scoreboard");
    this.scoreboard.innerHTML =
      "<h2>Team One: 0</h2><h2>Computer: 0</h2><h3>Possession: Team One</h3><h3>Number of Passes: 0</h3>";
    this.playerOneWins = 0;
    this.playerTwoWins = 0;
    this.passes = 0;
    scoreboardDiv.append(this.scoreboard);
    teamOneTracker.innerHTML = this.playerOneWins;
    teamTwoTracker.innerHTML = this.playerTwoWins;
    buttonDiv.append(this.shootThree);
    buttonDiv.append(this.shootTwo);
    buttonDiv.append(this.pass);
    this.pass.addEventListener("click", () => {
      this.scoreboard.innerHTML = "";
      this.chance = Math.round(Math.random() * 2);
      if (this.chance === 2 && this.possession == "Team One") {
        alert("The Computer stole the pass!");
        this.possession = "Team Two";
        this.passes = 0;
        this.opponentTurn();
      } else if (this.chance != 2 && this.possession == "Team One") {
        alert("Player One Successfully passed the ball!");
        this.passes += 1;
      }
      if (this.teamOnePoints < 11 && this.teamTwoPoints < 11) {
        this.scoreboard.innerHTML = `<h2>Player One: ${this.teamOnePoints}</h2><h2>The Computer: ${this.teamTwoPoints}</h2><h3>Possession: ${this.possession}</h3><h3>Number of Passes: ${this.passes}</h3>`;
      }
      this.setButtons(this.passes);
    });
    this.shootTwo.addEventListener("click", () => {
      this.scoreboard.innerHTML = "";
      this.playerShootTwo(this.passes);
      if (this.teamOnePoints < 11) {
        this.opponentTurn();
      }
      if (this.teamOnePoints < 11 && this.teamTwoPoints < 11) {
        this.scoreboard.innerHTML = `<h2>Player One: ${this.teamOnePoints}</h2><h2>The Computer: ${this.teamTwoPoints}</h2><h3>Possession: ${this.possession}</h3><h3>Number of Passes: ${this.passes}</h3>`;
      }
      this.shootTwo.innerText = `Shoot Two: 30%`;
      this.shootThree.innerText = `Shoot Three: 20%`;
      this.pass.innerText = "Pass";
      scoreboardDiv.append(this.scoreboard);
    });
    this.shootThree.addEventListener("click", () => {
      this.scoreboard.innerHTML = "";
      this.PlayerShootThree(this.passes);
      if (this.teamOnePoints < 11) {
        this.opponentTurn();
      }
      if (this.teamOnePoints < 11 && this.teamTwoPoints < 11) {
        this.scoreboard.innerHTML = `<h2>Player One: ${this.teamOnePoints}</h2><h2>The Computer: ${this.teamTwoPoints}</h2><h3>Possession: ${this.possession}</h3><h3>Number of Passes: ${this.passes}</h3>`;
      }
      this.shootTwo.innerText = `Shoot Two: 30%`;
      this.shootThree.innerText = `Shoot Three: 20%`;
      this.pass.innerText = "Pass";
      scoreboardDiv.append(this.scoreboard);
    });
  }
  newGame() {
    buttonDiv.innerHTML = "";
    this.newButton = document.createElement("button");
    this.newButton.innerText = "New Game";
    this.newButton.classList.add("newButton")
    buttonDiv.append(this.newButton);
    this.newButton.addEventListener("click", () => {
      this.scoreboard.innerHTML = "";
      buttonDiv.innerHTML = "";
      buttonDiv.append(this.shootThree);
      buttonDiv.append(this.shootTwo);
      buttonDiv.append(this.pass)
      this.scoreboard.innerHTML =
        "<h2>Player One: 0</h2><h2>The Computer: 0</h2><h3>Possession: Player One</h3><h3>Number of Passes: 0</h3>";
      this.teamOnePoints = 0;
      this.teamTwoPoints = 0;
      this.possession = "Team One";
      this.shootTwo.innerText = `Shoot Two: 30%`;
      this.shootThree.innerText = `Shoot Three: 20%`;
      this.pass.innerText = "Pass";
    });
  }
  playerShootTwo(passes) {
    this.chance = Math.round(Math.random() * 9);
    console.log(`passes: ${passes}`);
    if (passes === 0) {
      console.log(`chance: ${this.chance}`);
      if (this.chance <= 2 && this.possession === "Team One") {
        alert("Player One scored 2 points!");
        this.teamOnePoints += 2;
        this.possession = "Team Two";
      } else if (this.chance > 2 && this.possession === "Team One") {
        alert(
          "Player One missed the 2 point shot, and the Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 1) {
      console.log(`chance: ${this.chance}`);
      if (this.chance <= 3 && this.possession === "Team One") {
        alert("Player One scored 2 points!");
        this.teamOnePoints += 2;
        this.possession = "Team Two";
      } else if (this.chance > 3 && this.possession === "Team One") {
        alert(
          "Player One missed the 2 point shot, and the Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 2) {
      console.log(`chance: ${this.chance}`);
      if (this.chance <= 4 && this.possession === "Team One") {
        alert("Player One scored 2 points!");
        this.teamOnePoints += 2;
        this.possession = "Team Two";
      } else if (this.chance > 4 && this.possession === "Team One") {
        alert(
          "Player One missed the 2 point shot, and the Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 3) {
      console.log(`chance: ${this.chance}`);
      if (this.chance <= 5 && this.possession === "Team One") {
        alert("Player One scored 2 points!");
        this.teamOnePoints += 2;
        this.possession = "Team Two";
      } else if (this.chance > 5 && this.possession === "Team One") {
        alert(
          "Player One missed the 2 point shot, and the Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 4) {
      console.log(`chance: ${this.chance}`);
      if (this.chance <= 7 && this.possession === "Team One") {
        alert("Player One scored 2 points!");
        this.teamOnePoints += 2;
        this.possession = "Team Two";
      } else if (this.chance > 7 && this.possession === "Team One") {
        alert(
          "Player One missed the 2 point shot, and the Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    this.passes = 0;
    this.checkForPlayerWin();
    return;
  }
  PlayerShootThree(passes) {
    this.chance = Math.round(Math.random() * 9);
    console.log(`Passes: ${passes}`);
    console.log(`Chance: ${this.chance}`);
    if (passes === 0) {
      if (this.chance <= 1 && this.possession === "Team One") {
        alert("Player One scored 3 points!");
        this.teamOnePoints += 3;
        this.possession = "Team Two";
      } else if (this.chance > 1 && this.possession === "Team One") {
        alert(
          "Player One missed the 3 point shot, and The Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 1) {
      if (this.chance <= 2 && this.possession === "Team One") {
        alert("Player One scored 3 points!");
        this.teamOnePoints += 3;
        this.possession = "Team Two";
      } else if (this.chance > 2 && this.possession === "Team One") {
        alert(
          "Player One missed the 3 point shot, and The Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 2) {
      if (this.chance <= 3 && this.possession === "Team One") {
        alert("Player One scored 3 points!");
        this.teamOnePoints += 3;
        this.possession = "Team Two";
      } else if (this.chance > 3 && this.possession === "Team One") {
        alert(
          "Player One missed the 3 point shot, and The Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 3) {
      if (this.chance <= 4 && this.possession === "Team One") {
        alert("Player One scored 3 points!");
        this.teamOnePoints += 3;
        this.possession = "Team Two";
      } else if (this.chance > 5 && this.possession === "Team One") {
        alert(
          "Player One missed the 3 point shot, and The Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    if (passes === 4) {
      if (this.chance <= 5 && this.possession === "Team One") {
        alert("Player One scored 3 points!");
        this.teamOnePoints += 3;
        this.possession = "Team Two";
      } else if (this.chance > 5 && this.possession === "Team One") {
        alert(
          "Player One missed the 3 point shot, and The Computer got the rebound!"
        );
        this.possession = "Team Two";
      }
    }
    this.passes = 0;
    this.checkForPlayerWin();
  }
  opponentTurn() {
    this.opponentShot = Math.round(Math.random() * 3);
    if (this.opponentShot === 3) {
      alert("You stole the Computers pass");
      this.possession = "Team One";
    } else if (this.opponentShot === 2) {
      this.chance = Math.round(Math.random() * 2);
      if (this.chance === 2 && this.possession === "Team Two") {
        alert("The Computer scored 3 points!");
        this.teamTwoPoints += 3;
        this.possession = "Team One";
      } else if (this.chance !== 2 && this.possession === "Team Two") {
        alert(
          "The Computer missed the 3 point shot, and Player One got the rebound!"
        );
        this.possession = "Team One";
      }
    } else {
      this.chance = Math.round(Math.random());
      if (this.chance === 1 && this.possession === "Team Two") {
        alert("The Computer scored 2 points!");
        this.teamTwoPoints += 2;
        this.possession = "Team One";
      } else if (this.chance !== 1 && this.possession === "Team Two") {
        alert(
          "The Computer missed the 2 point shot, and Player One got the rebound!"
        );
        this.possession = "Team One";
      }
    }
    this.shootTwo.innerText = `Shoot Two: 30%`;
    this.shootThree.innerText = `Shoot Three: 20%`;
    this.pass.innerText = `Pass`
    this.checkforOpponentWin();
  }
  checkforOpponentWin() {
    if (this.teamTwoPoints >= 11) {
      alert("Sorry, The Computer Wins!!!");
      this.scoreboard.innerHTML = `<h2>The Computer wins ${this.teamTwoPoints}-${this.teamOnePoints}</h2>`;
      this.playerTwoWins += 1;
      teamTwoTracker.innerHTML = this.playerTwoWins;
      this.newGame();
    }
  }
  checkForPlayerWin() {
    if (this.teamOnePoints >= 11) {
      alert("Player One Wins!!!");
      this.scoreboard.innerHTML = `<h2>Player One wins ${this.teamOnePoints}-${this.teamTwoPoints}</h2>`;
      this.playerOneWins += 1;
      teamOneTracker.innerHTML = this.playerOneWins;
      this.newGame();
    }
  }
  setButtons(passes) {
    if (passes === 0) {
      this.shootTwo.innerText = `Shoot Two: 30%`;
      this.shootThree.innerText = `Shoot Three: 20%`;
    }
    if (passes === 1) {
      this.shootTwo.innerText = `Shoot Two: 40%`;
      this.shootThree.innerText = `Shoot Three: 30%`;
    }
    if (passes === 2) {
      this.shootTwo.innerText = `Shoot Two: 50%`;
      this.shootThree.innerText = `Shoot Three: 40%`;
    }
    if (passes === 3) {
      this.shootTwo.innerText = `Shoot Two: 60%`;
      this.shootThree.innerText = `Shoot Three: 50%`;
    }
    if (passes === 4) {
      this.shootTwo.innerText = `Shoot Two: MAX BOOST (80%)`;
      this.shootThree.innerText = `Shoot Three: MAX BOOST (60%)`;
      this.pass.innerText = `Pass: Caution Max Boost Applied` 
    }
  }
}

const startingScreen = function () {
  let container = document.createElement("div");
  container.classList.add("startScreen");
  document.body.prepend(container);
  container.innerHTML =
    "<h1>Welcome</h1><h2>Play against the computer in a basketball game</h2><h3>Rules:  Click the buttons to chose to shoot a 2 point shot, a 3 point shot, or chose to pass. For every pass you make, a boost will be applied to the next shot you take. The more passes you make, a bigger boost will be applied. The biggest boost is applied if you make 4 successful passes. Any passes after that will have the same boost. Be careful though, the computer can steal your pass! After you take a shot, or have a pass stolen, the computer will get the ball and take their shot. First team to 11 points wins!</h3>";
  let startButton = document.createElement("button");
  startButton.innerText = "Start Game";
  container.append(startButton);
  startButton.addEventListener("click", () => {
    container.innerHTML = "";
    let game = new Game();
  });
};

startingScreen();
