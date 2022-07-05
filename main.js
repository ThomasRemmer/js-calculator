let numButton = Array.from(document.querySelectorAll(".calculator__button"))
let currentNum = document.getElementById("calculator__current")
let prevNum = document.getElementById("calculator__previous")
let operation = document.getElementById("calculator__opperator")
numButton.forEach(input => input.addEventListener("click", (event) => {

    if (event.target.innerText <= 9) {
        handleAddNum();
    }
    else if (event.target.id == "clearButton") {
        handleClear();
    }

    else if (event.target.id == "decimalButton") {
        handleDecimal();

    }
    else if (event.target.id == "delButton") {
        currentNum.innerText = currentNum.innerText.slice(0, -1)
    }
    else if (event.target.id == "equalButton") {
        handleEquals();

    }
    else if (event.target.id == "plusButton" || "minusButton" || "divButton" || "timesButton") {
        handleOpperator();

    }
}
))

const handleOpperator = () => {
    switch (operation.innerText) {
        case "":
            prevNum.innerText = currentNum.innerText;
            currentNum.innerText = "";
            operation.innerText = event.target.innerText
            break;
        default:
            operation.innerText = event.target.innerText
            break;
    }

}
const handleEquals = () => {
    switch (operation.innerText) {
    case "+":
        currentNum.innerText = Number(prevNum.innerText) + Number(currentNum.innerText);
        prevNum.innerText = ""
        operation.innerText = ""
        break;
    case "-":
        currentNum.innerText = Number(prevNum.innerText) - Number(currentNum.innerText);
        prevNum.innerText = ""
        operation.innerText = ""
        break;
    case "*":
        currentNum.innerText = Number(prevNum.innerText) * Number(currentNum.innerText);
        prevNum.innerText = ""
        operation.innerText = ""
        break;
    case "/":
        currentNum.innerText = Number(prevNum.innerText) / Number(currentNum.innerText);
        prevNum.innerText = ""
        operation.innerText = ""
        break;
}
}

const handleDecimal = () => {
    if (currentNum.innerText.includes(".")) {
        alert("Current number already has one decimal")
    }
    else {
        currentNum.innerText += event.target.innerText;
    }
}

const handleClear = () => {
    currentNum.innerText = "";
    prevNum.innerText = "";
    operation.innerText = ""
}

const handleAddNum = () => {
    currentNum.innerText += event.target.innerText;
}