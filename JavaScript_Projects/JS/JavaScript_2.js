


function checkForm(form) {
    var errors = []
if (form.name.value == "") {
    errors.push("Please enter your name");

}
if (form.phone.value.length < 10) {
    errors.push("Please enter a 10 digit phone number")

}
if (form.email.value == "") {
    errors.push("Please enter a valid email")
   
}

if (errors.length > 0) {
    var msg = "ERRORS:\n\n";
    var i;
    for(i=0; i<errors.length; i++){
        msg += errors[i] + "\n";
    }
    alert(msg);
    return false;
}
return true;
}
