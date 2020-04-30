function rated_R () {
    var age, can_watch;
    age = document.getElementById("Age").value;
    can_watch = (age>=18) ? "You are old enough":"You are too young";
    document.getElementById("movie").innerHTML = can_watch + " to see this movie.";
}

function vote_age () {
    var age, can_vote;
    age = document.getElementById("voters-age").value;
    can_vote = (age>=18) ? "You are old enough" : "You aren't old enough";
    document.getElementById("answer").innerHTML = can_vote + " to vote.";
}

function vehicle(make,model,year,color) { //object constructor function
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Jack = new vehicle("DOdge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawl", 2019, "White and black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year + ".";
}



function house(year,color,rooms,sqrfoot) {
    this.house_year = year;
    this.house_color = color;
    this.house_rooms = rooms;
    this.house_sqrfoot = sqrfoot;
}

var Bill = new house(1970, "Blue" ,3, 1500 + "sqft");
var Jen = new house(2000, "yellow", 5 ,2500 + "sqft");
var Abby = new house(1915, "brick brown", 4, 2000 + "sqft");

function house_function() {
    document.getElementById("New_and_This").innerHTML =
    "Jen lives in a " + Jen.house_sqrfoot + ", " + Jen.house_color + ", " + Jen.house_rooms + " bedroom house, built in " + Jen.house_year + ".";
}



function computer_build(frame,motherboard,cpu,gpu,ram) {
    this.comp_case = frame;
    this.comp_mboard = motherboard;
    this.comp_cpu = cpu;
    this.comp_gpu = gpu;
    this.comp_ram = ram;
}

var Forest = new computer_build("phantex","asus pro","intel I-7","Gigabyte 1070g1", 16 + "GB");

function count_function() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {
            starting_point += 1;
        }
        plus_one();
        return starting_point;
    }
}

function whats_my_name() {
    document.getElementById("nested_function").innerHTML = name();
    function name() {
        var First = "Forest";
        function last_name() {
            First += " Moher!"; // += adds a value to the variable
        }
        last_name();
        return First;
    }
}