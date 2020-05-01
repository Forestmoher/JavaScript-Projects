function countdown() {
    var seconds = document.getElementById("seconds").innerHTML.value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); // program pauses for 100 milliseconds (1 second)
        if (seconds == -1) {
            alert("Time's Up!");
        }

    }
    tick();
}
