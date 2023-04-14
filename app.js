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
let balloon = [];

let gameOver = false
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
        
   // let ballonTime = setTimeout(clearBall, 3000)
    // clearTimeout(ballonTime)
}
start()
// function clearBall(){
//     $('.balloon').remove()
//     clearInterval(ballonTime)
// }


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
    checkTie()
    let te = gameBlock.text()
    // console.log(te)
    
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
                gameBlock.off('click')
                // console.log("winner1")
            } else if (playerTwo === true){
                playerTurn.text("🎉 Player Two Win's! 🎉")
                makeBalloons()
                gameBlock.off('click')
            } 
        }
        // console.log(gameBlock.text().indexOf(' ')) 
    }
    
    function checkTie(){
        if( gameBlock.text().indexOf(' ') == -1 ){
            console.log("Tie")
            playerTurn.text(`Tie Game!`)
        }
    // for(let i = 0; i < gameBlock.length; i++){
    //     console.log(gameBlock.toString().indexOf(" "))
        
    
    //     if(gameBlock.toString().indexOf(" ") === 0 && gameOver === false){
    //         console.log("tie")
    //     }
    // }
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
    for(let i = 0; i <= 50; i++){
        let balPosX = Math.floor(Math.random() * window.innerWidth)
        let balPosY = Math.floor(Math.random() * window.innerHeight / 3 + window.innerHeight)
        balloon[i] = $("<div class='balloon'>🎈</div>")
        balloon[i].css({"position": "absolute",
                        "user-select": "none"})
        balloon[i].css("left", balPosX + "px")
        balloon[i].css("top", balPosY + "px")
        container.append(balloon[i]);
        balloon[i].animate({
            top: "-25px"
        }, 4000, function(){$(this).remove()})
    }
    

    // console.log(balloon)
}