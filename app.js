let scoreboardDiv = document.querySelector(".score")
let buttonDiv = document.querySelector(".buttons")
let teamOneTracker = document.querySelector(".teamOneTracker")
let teamTwoTracker = document.querySelector(".teamTwoTracker")


class Game{
    constructor(){
        this.teamOnePoints = 0;
        this.teamTwoPoints = 0;
        this.possession = "Team One"
        this.shootThree = document.createElement("button")
        this.pass = document.createElement("button")
        this.shootTwo = document.createElement("button")
        this.shootThree.innerText = "Shoot Three"
        this.shootTwo.innerText = "Shoot Two"
        this.pass.innerText = "pass"
        this.scoreboard = document.createElement("div")
        this.scoreboard.classList.add("scoreboard")
        this.scoreboard.innerHTML = "<h2>Team One: 0</h2><h2>Computer: 0</h2><h3>Possession: Team One</h3>"
        this.playerOneWins = 0;
        this.playerTwoWins = 0;
        scoreboardDiv.append(this.scoreboard)
        this.shootTwo.addEventListener("click", ()=>{
            this.scoreboard.innerHTML = ""
            this.chance = Math.round(Math.random())
            if(this.chance === 1 && this.possession === "Team One"){
                alert("Player One scored 2 points!")
                this.teamOnePoints += 2
                this.possession = "Team Two"
            } else if(this.chance !== 1 && this.possession === "Team One"){
                alert("Player One missed the 2 point shot, and the Computer got the rebound!")
                this.possession = "Team Two"
            } 
            if(this.teamOnePoints >= 11){
                alert("Player One Wins!!!")
                this.scoreboard.innerHTML =`<h2>Player One wins ${this.teamOnePoints}-${this.teamTwoPoints}</h2>`
                this.playerOneWins += 1
                teamOneTracker.innerHTML = this.playerOneWins
                this.newGame()
                return
            } 
            this.opponentShot = Math.round(Math.random()*2)
            if(this.opponentShot === 2){
                this.chance = Math.round(Math.random()*2)
                if(this.chance === 2 && this.possession === "Team Two"){
                    alert("The Computer scored 3 points!")
                    this.teamTwoPoints += 3
                    this.possession = "Team One"
                } else if(this.chance !== 2 && this.possession === "Team Two"){
                alert("The Computer missed the 3 point shot, and Player One got the rebound!")
                this.possession = "Team One"
            } 
        } else{
            this.chance = Math.round(Math.random())
            if(this.chance === 1 && this.possession === "Team Two"){
                alert("The Computer scored 2 points!")
                this.teamTwoPoints += 2
                this.possession = "Team One"
            } else if(this.chance !== 1 && this.possession === "Team Two"){
                alert("The Computer missed the 2 point shot, and Player One got the rebound!")
                this.possession = "Team One"
            } 
        }
        if(this.teamTwoPoints >= 11){
            alert("Sorry, The Computer Wins!!!")
            this.scoreboard.innerHTML =`<h2>The Computer wins ${this.teamTwoPoints}-${this.teamOnePoints}</h2>`
            this.playerTwoWins += 1
            teamTwoTracker.innerHTML = this.playerTwoWins
            this.newGame()
            return
        }
        this.scoreboard.innerHTML = `<h2>Player One: ${this.teamOnePoints}</h2><h2>The Computer: ${this.teamTwoPoints}</h2><h3>Possession: ${this.possession}</h3>`
        scoreboardDiv.append(this.scoreboard)
    })
    this.shootThree.addEventListener("click", ()=>{
        this.scoreboard.innerHTML = ""
        this.chance = Math.round(Math.random()*2)
        if(this.chance === 2 && this.possession === "Team One"){
            alert("Player One scored 3 points!")
            this.teamOnePoints += 3
            this.possession = "Team Two"
        } else if(this.chance !== 2 && this.possession === "Team One"){
            alert("Player One missed the 3 point shot, and The Computer got the rebound!")
            this.possession = "Team Two"
        } 
        if(this.teamOnePoints >= 11){
            alert("Player One Wins!!!")
            this.scoreboard.innerHTML =`<h2>Player One wins ${this.teamOnePoints}-${this.teamTwoPoints}</h2>`
            this.playerOneWins += 1
            teamOneTracker.innerHTML = this.playerOneWins
            this.newGame()
            return
        } 
        this.opponentShot = Math.round(Math.random()*2)
        if(this.opponentShot === 2){
            this.chance = Math.round(Math.random()*2)
            if(this.chance === 2 && this.possession === "Team Two"){
                alert("The Computer scored 3 points!")
                this.teamTwoPoints += 3
                this.possession = "Team One"
            } else if(this.chance !== 2 && this.possession === "Team Two"){
                alert("The Computer missed the 3 point shot, and Player One got the rebound!")
                this.possession = "Team One"
            } 
        } else{
            this.chance = Math.round(Math.random())
            if(this.chance === 1 && this.possession === "Team Two"){
                alert("The Computer scored 2 points!")
                this.teamTwoPoints += 2
                this.possession = "Team One"
            } else if(this.chance !== 1 && this.possession === "Team Two"){
                alert("The Computer missed the 2 point shot, and Player One got the rebound!")
                this.possession = "Team One"
            } 
        }
        if(this.teamTwoPoints >= 11){
            alert("Sorry, The Computer Wins!!!")
            this.scoreboard.innerHTML =`<h2>The Computer wins ${this.teamTwoPoints}-${this.teamOnePoints}</h2>`
            this.playerTwoWins += 1
            teamTwoTracker.innerHTML = this.playerTwoWins
            this.newGame()
            return
        }
        this.scoreboard.innerHTML = `<h2>Player One: ${this.teamOnePoints}</h2><h2>The Computer: ${this.teamTwoPoints}</h2><h3>Possession: ${this.possession}</h3>`
        scoreboardDiv.append(this.scoreboard)
    })
    teamOneTracker.innerHTML = this.playerOneWins
    teamTwoTracker.innerHTML = this.playerTwoWins
    buttonDiv.append(this.shootThree)
    buttonDiv.append(this.shootTwo)
}
    newGame(){
        buttonDiv.innerHTML = ""
        this.newButton = document.createElement("button")
        this.newButton.innerText = "New Game"
        buttonDiv.append(this.newButton)
        this.newButton.addEventListener("click", ()=>{
            this.scoreboard.innerHTML = ""
            buttonDiv.innerHTML = ""
            buttonDiv.append(this.shootThree)
            buttonDiv.append(this.shootTwo)
            this.scoreboard.innerHTML = "<h2>Player One: 0</h2><h2>The Computer: 0</h2><h3>Possession: Player One</h3>"
            this.teamOnePoints = 0;
            this.teamTwoPoints = 0;
            this.possession = "Team One"
        }) 
    }
}

const startingScreen =  function(){
   let container = document.createElement("div")
   container.classList.add("startScreen")
   document.body.prepend(container)
   container.innerHTML = "<h1>Welcome</h1><h2>Play against the computer in a basketball game</h2><h3>Rules:  Click the buttons to chose to shoot a 2 point shot or a 3 point shot. After you take a shot, the computer will get the ball and take their shot. First team to 11 points wins!</h3>"
    let startButton = document.createElement("button")
    startButton.innerText = "Start Game"
    container.append(startButton)
    startButton.addEventListener("click", ()=>{
        container.innerHTML = ""
        let game = new Game()
    })
}

startingScreen()



// this.pass.addEventListener("click", ()=>{
    //     this.scoreboard.innerHTML = ""
    //     this.chance = Math.round(Math.random()*3)
    //     if(this.chance === 3 && this.possession == "Team One"){
        //         alert("Team two stole the pass!")
        //         this.possession = "Team Two"
        //     } else if(this.chance != 3 && this.possession == "Team One"){
            //         alert("Team one Successfully passed the ball!")
            //     } 
            //     this.chance = Math.round(Math.random()*3)
            //     if(this.chance === 3 && this.possession == "Team Two"){
                //         alert("Team one stole the pass!")
                //         this.possession = "Team One"
                //     }else if(this.chance != 3 && this.possession == "Team Two"){
                    //         alert("Team Two Successfully passed the ball!")
                    //     }
                    //     this.scoreboard.innerHTML = `<h2>Team one: ${this.teamOnePoints}</h2><h2>Team Two: ${this.teamTwoPoints}</h2><h2>Possession: ${this.possession}</h2>`
                    //     document.body.append(this.scoreboard)
                    //     if(this.teamOnePoints >= 11){
                        //         alert("Team One Wins")
                        //     } 
                        //     if(this.teamTwoPoints >= 11){
                            //         alert("Team Two Wins")
                            //     }
                            // })