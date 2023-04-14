let gameBlock = $('.game-block')
let playerTurn = $('#player-turn')
let resetBtn = $('#reset-btn')
let tr = $('tr')
const container = $('#container')
// playerTurn = playerTurn[0]
// gameBlock = Array.from(gameBlock)

let playerOne = null
let playerOneChar = "X"
let playerTwo = null
let playerTwoChar = "O"


resetBtn.on('click', start)

        // Start the game -- clear all spaces and choose who's turn.
function start(){
    playerOne = false
    playerTwo = false
    gameBlock.off('click')
    
    gameBlock.on('click', function() {
        checkBlock($(this))})
        
    playerTurn.text( pickTurn() );
    
    gameBlock.each(() => {
        gameBlock.text(" ")
        // console.log(gameBlock)
        
        })
}

start()

        //make balloons float up to top on win

function checkBlock(element) {
    if (playerOne == true){
        // console.log("clicks")
        element.text(playerOneChar)
        playerTurn.text(`${playerTwoChar}'s Turn`)
        winCheck()
        playerOne = false
        playerTwo = true
        element.off('click')
    } else {
        element.text(playerTwoChar)
        playerTurn.text(`${playerOneChar}'s Turn`)
        winCheck()
        playerOne = true
        playerTwo = false
        element.off('click')
    }
}

function pickTurn() {
    let choice = Math.floor(Math.random() * 2)
    if(choice == 0){
        playerTwo = true
        return "O Starts!!"
    } else {
        playerOne = true
       return "X Starts!!"
    }
    
}
function winCheck(){
    let te = gameBlock.text()
    console.log(te)
    if (    te.charAt(0) === te.charAt(1) && te.charAt(1) === te.charAt(2) && te.charAt(0) != " "||
            te.charAt(3) === te.charAt(4) && te.charAt(3) === te.charAt(5) && te.charAt(3) != " "||
            te.charAt(6) === te.charAt(7) && te.charAt(7) === te.charAt(8) && te.charAt(6) != " "||
            te.charAt(0) === te.charAt(3) && te.charAt(3) === te.charAt(6) && te.charAt(0) != " "||
            te.charAt(1) === te.charAt(4) && te.charAt(4) === te.charAt(7) && te.charAt(1) != " "||
            te.charAt(2) === te.charAt(5) && te.charAt(5) === te.charAt(8) && te.charAt(2) != " "||
            te.charAt(0) === te.charAt(4) && te.charAt(4) === te.charAt(8) && te.charAt(0) != " "||
            te.charAt(2) === te.charAt(4) && te.charAt(4) === te.charAt(6) && te.charAt(2) != " "
        ){
            if(playerOne === true){
                playerTurn.text("🎉 Player One Win's! 🎉")
                makeBalloons()
                // console.log("winner1")
            } else if (playerTwo === true){
                playerTurn.text("🎉 Player Two Win's! 🎉")
                makeBalloons()
            }
        }
    // console.log(table.children().length)
    
}

function setChar(inp){
    if(inp.id === "player1-input" && inp.value !== playerTwoChar && inp.value !== " "){
        gameBlock.each(function (i) {
            // console.log(gameBlock.text())
            gameBlock.eq(i).text(gameBlock.eq(i).text().replace(playerOneChar, inp.value))
            
        })
        playerOneChar = inp.value
    } else if ( inp.id === "player2-input" && inp.value !== playerOneChar && inp.value !== " "){
        gameBlock.each(function (i) {
            // console.log(gameBlock.text())
            gameBlock.eq(i).text(gameBlock.eq(i).text().replace(playerTwoChar, inp.value))
            
        })
        playerTwoChar = inp.value
    }
}

// .replace()

function makeBalloons(){
    let balloons = $("<div class='balloon'>🎈</div>")
    let balPosX = Math.floor(Math.random() * window.innerWidth)
    let balloonLen = 50
    for(let i = 0; i < balloonLen; i++){
        // console.log(balPosX)
        balloons.css("position", "absolute")
        balloons.css("left", balPosX + "px")
        balloons.css("top", "50px")
        container.append(balloons[i]);
    }
}