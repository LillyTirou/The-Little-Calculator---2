let first_number ;
let operator ;
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
    function appendNumber(num) {
            let inputField = document.getElementById("number");
            inputField.value = inputField.value + num;
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
    function exponentiation() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            let x = +inputField.value;
            inputField.value = x ** 2;
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
    function sort() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            arr.sort() ;
            inputField.value = arr.join(",");
        }
    function reverse() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            arr.reverse();
            inputField.value = arr.join(",");
        }
    function removelast() {
            let inputField = document.getElementById("number");
            if(!validate("csv")) {return; }
            let arr = inputField.value.split(",");
            arr.pop();
            inputField.value = arr.join(",");
        }
    function addition() {
            let inputField = document.getElementById("number");
            if(!validate("single")) {return; }
            first_number = +inputField.value;
            operator = "addition";
            inputField.value = "";
        }