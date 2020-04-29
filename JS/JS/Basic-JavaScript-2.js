function button() {
    var name = "Hello my name is Forest";
    var age = 27;
    document.getElementById("name_and_age").innerHTML = name + ", and I am " + age + " years old!";
  
}

function girlfriendfunction() {
var girlfriend = "I have a partner,";
girlfriend += " and her name is Abii.";
document.getElementById("Abii").innerHTML = girlfriend;
}

function multiply(num1,num2) {
    return num1*num2;
}

document.getElementById("math").innerHTML = multiply(10,5);