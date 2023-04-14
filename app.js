let gameBlock = $('.game-block')
let playerTurn = $('#player-turn')
let resetBtn = $('#reset-btn')
// playerTurn = playerTurn[0]
// gameBlock = Array.from(gameBlock)

let playerOne = null
let playerTwo = null

// let activeBlock = true;

// $('#title').on('click', function(){
//     console.log("titelclick")
// })
resetBtn.on('click', start)

// $("td").on('click', function() {
//     checkBlock($(this))})
// console.log(playerTurn.innerText)
        // Start the game -- clear all spaces and choose who's turn.
function start(){
    playerTurn.text( pickTurn() );
    gameBlock.each(() => {0
        gameBlock.text("XOXO")
        // console.log(gameBlock)
        gameBlock.on('click', function() {
            checkBlock($(this))})
        })
}

start()


        // 
function checkBlock(element) {
    if (playerOne == true){
        // console.log("clicks")
        element.text("X")
        playerTurn.text("O's Turn")
        playerOne = false
        playerTwo = true
        element.off('click')
    } else {
        element.text("O")
        playerTurn.text("X's Turn")
        playerOne = true
        playerTwo = false
        element.off('click')
    }
    winCheck(element)
}

function pickTurn() {
    let choice = Math.floor(Math.random() * 2)
    if(choice == 0){
        return "X Starts!!"
        playerTurn = false
    } else {
       return "O Starts!!"
        playerOne = false
    }
    
}

function winCheck(element){
    for(let i = 0; i < gameBlock.length; i++){
        console.log(element.text())
    }
}