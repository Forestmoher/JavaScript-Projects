function count_to_ten() {
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("count_ten").innerHTML = digit;
}

function loop_function() {
    var x = "";
    var i = 0;
    while(i<5) {
        x += "Hello<br>";
        i++;
    }
    document.getElementById("loop").innerHTML = x;
}

function string_length() {
    var str = "Nice to meet you!";
    var length = str.length;
    document.getElementById("string_length").innerHTML = length;
}


var instruments = ["Guitar","Drums","Piano","Bass","Violen","Trumpet","Flute"];
var content = "";
var i;
function for_loop() {
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

var students = {
    "John":"12th",
    "Marry":"11th",
    "Fred":"12th",
    "Cinthia":"10th"
}

var student_grades = Object.values(students);
var student_list = Object.keys(students);
console.log(student_list);

function for_loop2() {
    var result = "";
    var i;
    for (i = 0; i < student_list.length; i++) {
        result += student_list[i] + "<br>";
    }
    document.getElementById("list_of_students").innerHTML = result;
}

function for_loop3() {
    var result = "";
    var i;
    for (i = 0; i < student_grades.length; i++) {
        result += student_grades[i] + "<br>";
    }
    document.getElementById("grade_of_students").innerHTML = result;
}

function array_function() {
    var campList = [];
    campList[0] = "Sleeping bag";
    campList[1] = "Tent";
    campList[2] = "Hotdogs";
    campList[3] = "Marshmellows";
    campList[4] = "Bear repelant"; 
document.getElementById("camp_list").innerHTML = campList[3];
}

const monitor = {
    manufacturer: "LG",
    resolution: "1440p",
    screenSize: "32in",
    refreshRate: "75hz",
}

monitor.resolution = "1080p";
monitor.screenType = "LCD";

function constant_function() {
    document.getElementById("constant").innerHTML = "My " + monitor.screenType + " " + monitor.manufacturer + " monitor has a max resolution of " + monitor.resolution
}


var pet = "Dog";
{
    let betterPet = "Cat"
    document.write("<br>"+ betterPet);
}

function inches_to_feet(inches) {
    var feet = inches / 12;
    return feet;
}

function podcast() {
    var x = "My Brother, ";
    var y = "and me";
    var result = x + x + y;
    return result;
}

document.write("<br>" + inches_to_feet(64));

document.write("<br>" + podcast());

let cat = {
    name : "Calcifer",
    color : "orange",
    breed : "tabby",
    age : 2,
    description: function() {
        return "My " + this.color +" "+ this.breed + " cat's name is " + this.name + "." ;
    },
    ageUpdate : function age_update() {
        return this.age + 1;
    }
}

document.getElementById("cat").innerHTML = cat.description();
document.getElementById("catage").innerHTML = cat.ageUpdate();

function break_function() {
    var text = "";
    var i;
    for (i = 20; i > 0, i--;) {
        if (i === 10) {
            break;
        }
        text += i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continue_function() {
    var text = "";
    var i;
    for (i = 20; i > 0, i--;) {
        if (i === 15) {
            continue;
        }
        if (i === 10){
            break;
        }
        text += i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}