var first_name = "Forest"; //global variable

function full_name() {
    var last_name = " Moher"; //local variable
    document.getElementById("name").innerHTML =
    first_name + last_name;
}


function get_date() {
    if (new Date().getHours() < 18){
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function age_require() {
    var age = document.getElementById("agequestion").value;
    if (age >= 18){
        document.getElementById("answer").innerHTML = "You are old enough to see this movie.";
    }
}

function park_question() {
    var answer = document.getElementById("answer").value;
    var result;
    if (answer = "yes") {
        result = "Hurray! Let's go then!";
    }
    else {
        result = "Darn!";
    }
    document.getElementById("parkanswer").innerHTML = result;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time <18) {
        reply = "It's morning time.";
    }
    else if (time > 12 == time < 18) {
        reply = "It's afternoon.";
    }
    else {
        reply = "It's evening time.";
    }
    document.getElementById("Time-of-day").innerHTML = reply;
}

function wont_work() {
    console.log (document.getElementById("broken").innerHTML =
    last_name);
}
