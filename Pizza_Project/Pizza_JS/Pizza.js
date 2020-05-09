function getRecipt() {
    //this initializes our string so it can be passed between functions growing 
    //line by line into a full reciept
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }else if (selectedSize === "Medium Pizza") {
        sizeTotal = 12;
    }else if (selectedSize === "Large Pizza") {
        sizeTotal = 16;
    }else if (selectedSize === "X-Large Pizza") {
        sizeTotal = 24;
    }else if (selectedSize === "Royal Pizza") {
        sizeTotal = 36;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will be passed into each function
    getToppings(runningTotal,text1);
};

function getToppings(runningTotal,text1) {
    var topTotal = 0;
    var selectedtop = [];
    var topArray = document.getElementsByClassName("top");
    for (var i = 0; i < topArray.length; i++) {
        if (topArray[i].checked) {
            selectedtop.push(topArray[i].value);
            console.log("selected toppings: ("+topArray[i].value+")");
            text1 += topArray[i].value+"<br>";
        }
    }
    var topCount = selectedtop.length;
    if (topCount > 1) {
        topTotal = (topCount - 1);
    } else {
        topTotal = 0;
    }
    runningTotal = (runningTotal + topTotal);
    console.log("total selected meat items "+topCount);
    console.log(topCount+" Toppings - 1 free topping = "+"$"+topTotal+".00");
    console.log("top text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <b>$"+runningTotal+".00"+"<b></h3>";
};

