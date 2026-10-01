let first_number ;
let operator ;
let active_input = "number";
document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("number");
    let expField = document.getElementById("exponent_input");
    let remField = document.getElementById("remove_input");

    if (inputField) inputField.addEventListener("focus", function () { active_input = "number"; });
    if (expField) expField.addEventListener("focus", function () { active_input = "exponent_input"; });
    if (remField) remField.addEventListener("focus", function () { active_input = "remove_input"; });
});
    function validate(type) {
        let inputField = document.getElementById("number");
        let value = inputField.value;

        if (value === "") {
        inputField.value = "Error: empty input";
        return false;
            }

        if (type === "csv") {
        let arr = value.split(",");
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
        inputField.value = "Error: CSV list contains empty elements";
        return false;
                    }
                }
            }

        return true;
        }
    function allClear() {
            let inputField = document.getElementById("number");
            let infoField = document.getElementById("info");
            let extraField = document.getElementById("exponent_input");
            let removeField = document.getElementById("remove_input");
            inputField.value = "";
            infoField.innerHTML = "Info: ";
            if (extraField) {
                extraField.value = "";
            }
            if (removeField) {
                removeField.value = "";
            }
        }
    function appendNumber(num) {
            let targetField = document.getElementById(active_input);
            if (targetField) {
                targetField.value += num;
            }
        }
    function fill_info() {
            let inputField = document.getElementById("number");
            let infoField = document.getElementById("info");
            let result = +inputField.value;

            if (result < 100) {
                infoField.innerHTML = "Info: The result is less than 100";
            } else if (result >= 100 && result <= 200) {
                infoField.innerHTML = "Info: The result is between 100 and 200";
            } else {
                infoField.innerHTML = "Info: The result is greater than 200";
            }
        }
    function square() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let result = +inputField.value;
            inputField.value = result * result;
            fill_info();
        }
    function squareRoot() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let result = +inputField.value;
                if (result < 0) {
                    inputField.value = "Error: Square root of negative number is undefined";
                } else {
                    inputField.value = Math.sqrt(result);
                }
                fill_info();
        }
    function mod() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let result = +inputField.value;
            if (result < 0) {
               result = -result;
            }
            inputField.value = result;
            fill_info();
        }
    function fact() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let x = +inputField.value;
            if (x < 0) {
                inputField.value = "Error: Factorial of negative number is undefined";
            } else {
                let factorial = 1;
                for (let i = 1; i <= x; i++) {
                    factorial *= i;
                }
                inputField.value = factorial;
            }
            fill_info();
        }
    function multiplication() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            first_number = +inputField.value;
            operator = "multiplication";
            inputField.value = "";
        }
    function divide() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            first_number = +inputField.value;
            operator = "divide";
            inputField.value = "";
        }
    function eq() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let second_number = +inputField.value;
            let result;
            if (operator === "addition") {
                result = first_number + second_number;
            } else if (operator === "divide") {
                result = first_number / second_number;
            } else if (operator === "multiplication") {
                result = first_number * second_number;
            }
            inputField.value = result;
            fill_info();
        }
    function sum() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
            total = total + +arr[i];
            }
            inputField.value = total;
            fill_info();
        }
    function sortCSV() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            arr.sort((a,b) => a - b);
            inputField.value = arr.join(",");
        }
    function reverse() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            arr.reverse();
            inputField.value = arr.join(",");
        }
    function exponentiation() {
            let inputField = document.getElementById("number");
            if(!validate("single")) { return; }
            let extraField = document.getElementById("exponent_input");
            if (extraField.value === "") {
            inputField.value = "Error: Enter exponent in extra input";
            return;
    }
            let base = +inputField.value;
            let exp = +extraField.value;
            inputField.value = Math.pow(base, exp);
            fill_info();
        }
    function addition() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            first_number = +inputField.value;
            operator = "addition";
            inputField.value = "";
        }
    function removelast() {
            let inputField = document.getElementById("number");
            if (!validate("csv")) { return; }
            let extraField = document.getElementById("remove_input");
            let arr = inputField.value.split(",");
            let count = 1;
            if (extraField && extraField.value !== "") {
            count = parseInt(extraField.value);
    }

        for (let i = 0; i < count; i++) {
        arr.pop();
    }
        inputField.value = arr.join(",");
}