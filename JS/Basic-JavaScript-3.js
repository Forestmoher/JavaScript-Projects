function add(num1,num2) {
    var sum = num1 + num2;
    document.getElementById("math").innerHTML = "3+4 = " + sum;
}

function subtract(num1,num2) {
    var sum2 = num1 - num2;
    document.getElementById("math2").innerHTML = "5-7 = " + sum2;
}


function multiply(num1,num2) {
    var sum3 = num1 * num2;
    document.getElementById("math3").innerHTML = "5*5 = " + sum3;
}

function divide(num1,num2) {
    var sum4 = num1/num2;
    document.getElementById("math4").innerHTML = "6/8 = " + sum4;
}

function more_math(num1,num2,num3,num4) {
    var sum5 = (num1-num2) * (num3/num4);
    document.getElementById("math5").innerHTML = "(5-6) * (9/3) = " + sum5;
}

function modulus(num1,num2) {
    var sum6 = (num1%num2);
    document.getElementById("math6").innerHTML = "The remainder of 40/7 = " + sum6;
}

function negative(num1) {
    var sum7 = (-num1);
    document.getElementById("math7").innerHTML = " The opposite form of 10 = " + sum7;

}

function increment(num1) {
    var sum8 = (num1);
    sum8++;
    document.getElementById("math8").innerHTML = "11 incremented by 1 = " + sum8;
}

function decrement(num1) {
    var sum9 = (num1);
    sum9--;
    document.getElementById("math9").innerHTML = "11 decremented by 1 = " + sum9;
}

function random() {
    var sum10 = (Math.random() * 100);
    document.getElementById("math10").innerHTML = "Here is a random number between 0 and 100 " + sum10;
}

function squareroot(num1) {
    var sum11 = Math.sqrt(num1);
    document.getElementById("math11").innerHTML = "The square root of 87 = " + sum11;
}