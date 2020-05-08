//create an object to keep track of values
const Calculator = {
    Display_value: "0",
    First_operand: null,
    Wait_second_operand: false,
    operator: null
};

// this modifies values each time a button is clicked
function inputDigit(digit) {
    const {Display_value, Wait_second_operand} = Calculator;
    //we are checking to see if Wait_decond_operand is true and set Display_value to the key that was clicked
    if (Wait_second_operand === true) {
        Calculator.Display_value = digit;
        Calculator.Wait_second_operand = false;
    } else {
     //this overwrites Display_value if the current vlaue is 0, otherwise it adds on to it
     Calculator.Display_value = Display_value === "0" ? digit : Display_value + digit;
    }
}
//this section handles decimal points
function inputDecimal(dot) {
    //this insures accidental clicking on the decimal point doesnt cause any bugs
    if (Calculator.Wait_second_operand === true) return;
    if (!Calculator.Display_value.includes(dot)) {
        //we are saying that if the Display_value does not contain a decial point, we want to add one
        Calculator.Display_value += dot;
    }
}

//this section handles operators
function handleOperator(next_operator) {
    const { First_operand, Display_value, operator } = Calculator
    //when an operator key is pressed we covert the current number displayed on the screen to a number
    // and then store the result in Calculator.First_operand if it doesnt already exist
    const Value_of_input = parseFloat(Display_value);
    //checks if an operator already exists and if Wait_second_operand is true,
    //then updates tge operator and exits from the function
    if (operator && Calculator.Wait_second_operand) {
        Calculator.operator = next_operator;
        return;
    }
    if (First_operand == null) {
        Calculator.First_operand = Value_of_input;
    } else if (operator) { //checks if operator already exists
        const Value_now = First_operand || 0;
        //if operator already exists, property lookup is performed for the operator in the perform_calculator object
        //and the function that matches the operator is executed
        const result = Perform_calculation[operator](Value_now, Value_of_input);

        Calculator.Display_value = String(result);
        Calculator.First_operand = result;
    }

    Calculator.Wait_second_operand = true;
    Calculator.operator = next_operator;
}

const Perform_calculation = {
    "/": (First_operand, Second_operand) => First_operand / Second_operand,
    "*": (First_operand, Second_operand) => First_operand * Second_operand,
    "+": (First_operand, Second_operand) => First_operand + Second_operand,
    "-": (First_operand, Second_operand) => First_operand - Second_operand,
    "=": (First_operand, Second_operand) => Second_operand
};

function calculatorReset() {
    Calculator.Display_value = "0";
    Calculator.First_operand = null;
    Calculator.Wait_second_operand = false;
    Calculator.operator = null;
}

//this function updates the screen with the contents of Display_value
function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_value;
}

updateDisplay();
//this section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //the target variable is an object that represents the element that was clicked
    const {target} = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches("button")){
        return;
    }
    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    // ensures that AC clears numbers from the calculator
    if (target.classList.contains("all-clear")) {
        calculatorReset();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})