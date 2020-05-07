//This function will disable the stop button when the window is loaded
window.onload = function () { watch() }
function watch() {
    var btn = document.getElementById("btnStop");
    btnDisabled(btn);
}

//This function will role a random number twice and determine which player gets to go first
function rollForTurn() {
    var xArray = [];
    var ranNum = "";
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) { //iterates twice through 
        ranNum = Math.floor(Math.random() * (maximum - minimum) + minimum);//math.floor will round down to a whole number
        xArray.push(ranNum);//.push puts something into an array
    }
    diceRoll();//calls function to make dice sounds
    //build the string to show which player rolled which die
    for (i = 0; i < xArray.length; i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) {
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled [" + pOne + "]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled [" + pTwo + "] <br><br>";
        setTimeout(function () { writeMsg(txt1); }, 1000); //time delay of 1 second
    }
    //determine and concatonate string showing which player won the roll
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function () { txt1 = txt1 + "Player 1 wins, Please choose a square."; }, 2000);
        setTimeout(function () { writeMsg(txt1); }, 2000);
    }
    else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function () { txt1 = txt1 + "Player 2 wins, Please choose a square."; }, 2000);
        setTimeout(function () { writeMsg(txt1); }, 2000);
    }
    //pass which player won the roll
    return first;
}

// initiats the game, rolls for turn, and determines active player
function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") { // if tie then re roll
        activePlayer = rollForTurn();
    }
    setTimeout(function () { hideGameMsg(); }, 4000);

    //assign proper state of the control buttons
    var btn = document.getElementById("btnStart");
    btnDisabled(btn); // disables start butten since game is started
    var btn = document.getElementById("btnStop");
    stopEnabled(btn); // enables stop button since game is started

    //assignes active player to the console
    var showPlayer = document.getElementById("showPlayer")
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

// this function styles the game buttons while they are disabled
function btnDisabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(153, 153, 102)";
    btn.style.backgroundColor = "rgb(214,214,194)";
    btn.disabled = true;
}

//this function styles the stop button while its enabled
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204,0,0)";
    btn.style.backgroundColor = "rgb(255,51,51)";
    btn.disabled = false;
}

//this function styles the stop button while its enabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0,153,0)";
    btn.style.backgroundColor = "rgb(57,230,0)";
    btn.disabled = false;
}

function stopGame() {
    hideGameMsg(); //clear txt and hide message box
    var btn = document.getElementById("btnStart");
    startEnabled(btn); //enables start btn since game is now stoped
    var btn = document.getElementById("btnStop");
    btnDisabled(btn);//disables stop btn
    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color = "red";

    //resets all squares to starting empty states
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i = 0; i < arrayO.length; i++) {
        arrayO[i].style.transform = "translateY(-100%)";
    }
    for (var i = 0; i < arrayX.length; i++) {
        arrayX[i].style.transform = "translateY(100%)";
    }
    //this clears the log of all game moves
    document.getElementById("boardState").innerHTML = " ";
}

//this function will show the message console and any text it may have 
function showGameMsg() {
    document.getElementById("gameMsgBox").style.display = "block";
}

//this function will conceal the message concole from view
function hideGameMsg() {
    clearMsg()
    document.getElementById("gameMsgBox").style.display = "none";
}
//this will write text to the game message console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById("gameMsg").innerHTML = txt;
}

//this function will clear the message from the screen
function clearMsg() {
    document.getElementById("gameMsg").innerHTML = " ";
}

//this is for the players config panel
//it checks the proposed avatar assignment and prevents them from being the same
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;//options gets the html options tag options, 
    var p1Selected = document.getElementById("player1").options;   //and selected index get the option that is currently selected
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
        alert("Error - Player 1 and Player 2 cannot both be assigned as: " + p1Selected[p1Index].text)
    }
    else {
        document.getElementById("p1Display").innerHTML = p1Selected[p1Index].text;
        document.getElementById("p2Display").innerHTML = p2Selected[p2Index].text;
    }
}

//this function returns the currently assigned avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar, p2Avatar];
    return avatarArray;
}

//this function will return the active players avatar
function determineAvatar() {
    //determine the correct avatar to paint for the active player
    var avatarArray = getAvatars(); // returns an array of both players active avatars
    var active = document.getElementById("showPlayer").innerHTML; //gets active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active == "Player 1") { //check which player is active and their corresponding avatar
        var paintAvatar = p1Avatar;
    }
    else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar; //returns back the correct avatar
}


// this function changes active player over to the other player
function avatarPlaced() {
    var parseText = document.getElementById('gameMsg').innerHTML;
    var showPlayer = document.getElementById('showPlayer'); // select the current element to memory
    // check if there is already a winner...if there is, then dont continue the game
    if (parseText == "That's three in a row, Player 1 wins!" || parseText == "That's three in a row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color = 'red';
    }
    activePlayer = showPlayer.innerHTML; // get the current player from the element
    if (activePlayer == "Player 1") { // once active player selects a square change the active player
        showPlayer.innerHTML = "Player 2";
    } else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie(); // call this function to inquire if there was a cat's game.
}

//this function will get the array of the current board and check the proposed move for validity
function check(info, square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0); // comparing index of the square (charAt is a built in function that returns a specific character  i.e charAt(0) of 1X is 1)
        if (tempInfo == square) {
            return tempInfo;
        }
    }
}
//as squares are selected, they check in with this function to see if that sqaure has already been assigened
// if not, record square with assigned avatar
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById("boardState").innerHTML; //retrieves board state array
    var info = boardState.split(","); //seperates string by commas to creat an array
    verdict = check(info, square); // call function to check if proposed square is already occupied
    return verdict;
}

//this function will get list of previous moves and then concatenate the current move to it
function recordMove(currentMove) {
    var target = document.getElementById("boardState");
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves + currentMove;
}



// checks for win condition
function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById("boardState");
    var info = target.innerHTML; // raw array squares and avatars
    info = info.substring(1); // removes leading comma
    info = info.split(","); //seperates strings by commas, into an array
    info.sort(); //for the square array in order dispite the actual gameplay sequence
    for (var i in info) {
        squareArray.push(info[i].charAt(0)); // new array with only squares not avatars
    }
    //call this following array of functions to check for any of the possible win conditions
    checkWinCon1(info, squareArray);
    checkWinCon2(info, squareArray);
    checkWinCon3(info, squareArray);
    checkWinCon4(info, squareArray);
    checkWinCon5(info, squareArray);
    checkWinCon6(info, squareArray);
    checkWinCon7(info, squareArray);
    checkWinCon8(info, squareArray);
    //console.log("New CHECK: " +document.getElementById("gameMsg").innerHTML);
    check4Tie();
}

//call this function to check the board state for any ties and act accordingly
function check4Tie() {
    var boardState = document.getElementById("boardState").innerHTML;
    boardState = boardState.substring(1); // remove leading comma
    boardState = boardState.split(","); //seperates string by commas into an array
    var check = document.getElementById("gameMsg").innerHTML;
    if (boardState.length >= 9 && check != "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "Oh no! Nobody wins, it was a tie!";
        tieSound();
        writeMsg(txt1);
        setTimeout(function () { stopGame(); }, 3000);
    }
}

//whenever a win is detected the corresponding functioin will call this function to produce the following winning process for the game
function winner(winDetected, winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById("showPlayer").innerHTML;
        var txt2 = "That's three in a row, " + activePlayer + "wins!";
        writeMsg(txt2);
        var btn = document.getElementById("btnStart");
        startEnabled(btn); //enables the start btn
        var btn = document.getElementById("btnStop");
        btnDisabled(btn); // disables the stop btn 
        document.getElementById("showPlayer").innerText = "Game Stopped";
        glowBoard(winCon); //call function to make game board pulse with colors
    }
}

//this function will make the game board pulse with colors when some one wins
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function () { bg1.style.backgroundColor = "rgb(244,179,66)"; }, 100);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(244,238,66)"; }, 200);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(197,244,66)"; }, 300);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(122,244,66)"; }, 400);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(66,244,235)"; }, 500);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(244,179,66)"; }, 600);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(244,238,66)"; }, 700);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(197,244,66)"; }, 800);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(122,244,66)"; }, 900);
            setTimeout(function () { bg1.style.backgroundColor = "rgb(66,244,235)"; }, 1000);
            setTimeout(function () { bg1.style.backgroundColor = "#d7f3f7"; }, 1100);
        }
        else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function () { bg2.style.backgroundColor = "rgb(66,244,235)"; }, 100);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(122,244,66)"; }, 200);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(197,244,66)"; }, 300);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(244,238,66)"; }, 400);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(244,179,66)"; }, 500);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(66,244,235)"; }, 600);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(122,244,66)"; }, 700);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(197,244,66)"; }, 800);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(244,238,66)"; }, 900);
            setTimeout(function () { bg2.style.backgroundColor = "rgb(244,179,66)"; }, 1000);
            setTimeout(function () { bg2.style.backgroundColor = "#d7f3f7"; }, 1100);
        }
        else if (i == index2) {
            var bg3 = squares[i];
            setTimeout(function () { bg3.style.backgroundColor = "rgb(244,179,66)"; }, 100);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(244,238,66)"; }, 200);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(197,244,66)"; }, 300);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(122,244,66)"; }, 400);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(66,244,235)"; }, 500);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(244,179,66)"; }, 600);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(244,238,66)"; }, 700);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(197,244,66)"; }, 800);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(122,244,66)"; }, 900);
            setTimeout(function () { bg3.style.backgroundColor = "rgb(66,244,235)"; }, 1000);
            setTimeout(function () { bg3.style.backgroundColor = "#d7f3f7"; }, 1100);
        }
    }
    setTimeout(function () { stopGame(); }, 1200);
}

//these functions provide sounds
function squareSound() {
    var sound = document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function () { sound.pause(); }, 400);
    setTimeout(function () { sound.currentTime = 0; }, 500);
}
function tieSound() {
    var sound = document.getElementById("tieGame");
    var check = document.getElementById("gameMsg").innerText;
    setTimeout(function () { sound.play(); }, 500);
}
function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function () { sound.play(); }, 500);
    setTimeout(function () { sound.onpause(); }, 2700);
    setTimeout(function () { sound.currentTime = 0; }, 2800);
}
function diceRoll() {
    var sound = document.getElementById("diceRoll");
    sound.play();
}


//this function will make the entire background blink differnt colors
function blink() {
    var body = document.getElementById("body");
    setTimeout(function () { body.style.backgroundColor = "#94f7ed" }, 100);
    setTimeout(function () { body.style.backgroundColor = "#94cef7" }, 200);
    setTimeout(function () { body.style.backgroundColor = "#94a6f7" }, 300);
    setTimeout(function () { body.style.backgroundColor = "#b094f7" }, 400);
    setTimeout(function () { body.style.backgroundColor = "#cc94f7" }, 500);
    setTimeout(function () { body.style.backgroundColor = "#c894f7" }, 600);
    setTimeout(function () { body.style.backgroundColor = "#f794d9" }, 700);
    setTimeout(function () { body.style.backgroundColor = "#f73881" }, 800);
    setTimeout(function () { body.style.backgroundColor = "#c6034e" }, 900);
    setTimeout(function () { body.style.backgroundColor = "#e00202" }, 1000);
    setTimeout(function () { body.style.backgroundColor = "#ffffff" }, 1100);

}

// checking for win conditions
function checkWinCon1(info, squareArray) {
    var winCon1 = [0, 1, 2];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match0Avatar != undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win";
            winner(winDetected, winCon1);
            return;
        }
    }
    winner(winDetected, winCon1);
}
function checkWinCon2(info, squareArray) {
    var winCon2 = [3, 4, 5];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match3Avatar != undefined && match4Avatar != undefined && match5Avatar != undefined) {
        if (match3Avatar == match4Avatar && match3Avatar == match5Avatar) {
            winDetected = "win";
            winner(winDetected, winCon2);
            return;
        }
    }
    winner(winDetected, winCon2);
}
function checkWinCon3(info, squareArray) {
    var winCon3 = [6, 7, 8];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "7") {
            var match7Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match6Avatar != undefined && match7Avatar != undefined && match8Avatar != undefined) {
        if (match6Avatar == match7Avatar && match6Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon3);
            return;
        }
    }
    winner(winDetected, winCon3);
}
function checkWinCon4(info, squareArray) {
    var winCon4 = [0, 3, 6];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match0Avatar != undefined && match3Avatar != undefined && match6Avatar != undefined) {
        if (match0Avatar == match3Avatar && match0Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon4);
            return;
        }
    }
    winner(winDetected, winCon4);
}
function checkWinCon5(info, squareArray) {
    var winCon5 = [1, 4, 7];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "7") {
            var match7Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match1Avatar != undefined && match4Avatar != undefined && match7Avatar != undefined) {
        if (match1Avatar == match4Avatar && match1Avatar == match7Avatar) {
            winDetected = "win";
            winner(winDetected, winCon5);
            return;
        }
    }
    winner(winDetected, winCon5);
}
function checkWinCon6(info, squareArray) {
    var winCon6 = [2, 5, 8];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match2Avatar != undefined && match5Avatar != undefined && match8Avatar != undefined) {
        if (match2Avatar == match5Avatar && match2Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon6);
            return;
        }
    }
    winner(winDetected, winCon6);
}
function checkWinCon7(info, squareArray) {
    var winCon7 = [0, 4, 8];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match0Avatar != undefined && match4Avatar != undefined && match8Avatar != undefined) {
        if (match0Avatar == match4Avatar && match0Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon7);
            return;
        }
    }
    winner(winDetected, winCon7);
}
function checkWinCon8(info, squareArray) {
    var winCon8 = [2, 4, 6];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
    }
    if (match2Avatar != undefined && match4Avatar != undefined && match6Avatar != undefined) {
        if (match2Avatar == match4Avatar && match2Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon8);
            return;
        }
    }
    winner(winDetected, winCon8);
}


//these functions are for each click event on their corresponding square element
function square1Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "0"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square2Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "1"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[1]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square3Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "2"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[2]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square4Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "3"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[3]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square5Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "4"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[4]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square6Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "5"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[5]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square7Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "6"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[6]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square8Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "7"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[7]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}
function square9Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") { //if game has not yet started, prevent avatar placement
        var square = "8"; //identifies the square selected
        // check if the proposed sqaure is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if the verdict is empty(undefined) then the square is unoccupied
            var paintAvatar = determineAvatar(); // gets the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[8]; // paint avatar
            if (paintAvatar == "O") {
                animateO(selected); // call function to animate O
            }
            else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," + square + paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); //call function to see if current move completes a winning condition
            avatarPlaced(square, paintAvatar); // end current turn and pass turn to the other player
            squareSound(); // plays a sound when an avatar is placed
        }
    }
}








//these functions perform an animation for the O and X avatars
function animateO(selected) {
    selected.style.transform = (selected.style.transform == "translateY(0%)" || null) ? "translateY(0%)" : "translateY(0%)";
}
function animateX(selected) {
    selected.style.transform = (selected.style.transform == "translateY(0%)" || null) ? "translateY(0%)" : "translateY(0%)";
}