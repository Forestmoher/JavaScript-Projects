function game_choice() {
    var result = "";
    var game = document.getElementById("game").value;
    var text = "You have chosen: ";
    switch(game) {
        case "Doom":
            result = text + "Doom Eternal!";
        break;
        case "Animal Crossing":
            result = text + "a life of relaxation and comfort!";
        break;
        case "Dark Souls":
            result = text + "to die repeatedly!";
        break;
        case "Half-Life":
            result = text + "to be disappointed in the end";
        break;
        case "Pokemon":
            result = text + "to catch'em all!";
        break;
        default:
            result = "Please enter a game exactly as it appears above";
    }
    document.getElementById("answer").innerHTML = result;
}

function class_name() {
    var x = document.getElementsByClassName("example");
    x[2].innerHTML = "Goodbye";
}

var canvas = document.getElementById("art_box");
var ctx = canvas.getContext("2d");


ctx.fillRect(0,0,100,100);
ctx.fillRect(200,0,100,100);
ctx.fillRect(0,200,100,100);
ctx.fillRect(100,100,100,100);
ctx.fillRect(400,0,100,100);
ctx.fillRect(0,400,100,100);
ctx.fillRect(200,200,100,100);
ctx.fillRect(600,0,100,100);
ctx.fillRect(0,600,100,100);
ctx.fillRect(300,100,100,100);
ctx.fillRect(800,0,100,100);
ctx.fillRect(0,800,100,100);
ctx.fillRect(400,200,100,100);
ctx.fillRect(1000,0,100,100);
ctx.fillRect(800,200,100,100);
ctx.fillRect(200,400,100,100);
ctx.fillRect(800,400,100,100);
ctx.fillRect(500,100,100,100);
ctx.fillRect(700,100,100,100);
ctx.fillRect(600,200,100,100);
ctx.fillRect(900,100,100,100);

var canvas2 = document.getElementById("art_box2");
var ctx2 = canvas2.getContext("2d");
var grade = ctx2.createLinearGradient(0,400,1000,300);
grade.addColorStop(0, "green");
grade.addColorStop(.5, "blue");
grade.addColorStop(1, "red");
ctx2.fillStyle = grade;
ctx2.fillRect(0,0,1000,300);
