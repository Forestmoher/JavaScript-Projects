function concat_function() {
    var part1 = "Hello ";
    var part2 = "my name is ";
    var part3 = "Forest "
    var part4 = "Moher."
    var full = part1.concat(part2,part3,part4);
    document.getElementById("concat").innerHTML = full;
}

function slice_function() {
    var song = "Do you believe in a thing called love!?";
    var slice = song.slice(33,37);
    document.getElementById("slice").innerHTML = slice;
}

function uppercase() {
    var sentence = "How are you today?";
    var capsentence = sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = capsentence;
}

function search() {
    var sentence = "What position is the word 'Hello' in this sentence?";
    var searchsentence = sentence.search("Hello");
    document.getElementById("search").innerHTML = searchsentence;
}

function tostring() {
    var num = 200;
    var stringnum = num.toString();
    document.getElementById("tostring").innerHTML = stringnum;
}

function precision() {
    var num = 1908742409.47902;
    document.getElementById("precision").innerHTML = num.toPrecision(10);
}

function tofixed() {
    var num = 4.30370;
    document.getElementById("fixed").innerHTML = num.toFixed(3);
}

function valueof() {
    var num = 455;
    document.getElementById("valueof").innerHTML = num.valueOf();
}