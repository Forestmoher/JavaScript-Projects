document.write(typeof "word");

function Nan(num1,num2) {
    var sum = num1/num2;
    document.getElementById("nan").innerHTML = sum;
}


document.getElementById("false").innerHTML = isNaN(8);

document.getElementById("true").innerHTML = isNaN("Eight");

document.getElementById("infinity").innerHTML = 2E310;

document.getElementById("Negative-infinity").innerHTML = -2E310;

document.getElementById("bool-true").innerHTML = (100>=99);

document.getElementById("bool-false").innerHTML = (99>150);

console.log(5*5);

document.getElementById("coercion").innerHTML = ("100" + 10 + "00100");

console.log(5<2);

document.getElementById("doubleequal").innerHTML = (10==10);

function name_function(name1,name2) {
    var A = name1;
    var B = name2;
    if (A === B) {
        document.getElementById("Namecompare").innerHTML = "True";
    }
    else {
        document.getElementById("Namecompare").innerHTML = "False";
    }
  
}

var x = 10;
var y = 10;

document.write(x===y);

var a = 10;
var b = 11;

document.write(a===b);

var a = "10";

document.write(a===b);

document.getElementById("and").innerHTML = (6>7 && 7>5);

document.getElementById("or").innerHTML = (6>7 || 7>5);

function notfunction() {
    document.getElementById("not").innerHTML = !(30>20);
}

