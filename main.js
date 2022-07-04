//stores all buttons within an array rather than a NodeList
let numButton = Array.from(document.querySelectorAll(".calculator__button"))
//selects the bottom Div as the current number div
let currentNum = document.getElementById("calculator__current")
let prevNum = document.getElementById("calculator__previous")
let operation = document.getElementById("calculator__opperator")




numButton.forEach (input => input.addEventListener("click", (event) => {

    if (event.target.innerText <= 9 ) {
        currentNum.innerText+= event.target.innerText;
    }
    else if(event.target.innerText == "AC") {
        currentNum.innerText ="";
        prevNum.innerText ="";  
        operation.innerText =""
    }

    else if(event.target.id == "decimalButton") {
        currentNum.innerText+= event.target.innerText;
    }
    else if (event.target.id == "equalButton") {
        let answer = currentNum.innerText + operation.innerText + prevNum.innerText
        console.log(answer)
        answer = eval(answer)
        console.log(answer)
        currentNum.innerText = answer
        prevNum.innerText =""
        operation.innerText = ""
    }
    else if(event.target.id == "plusButton" || "minusButton" || "divButton" ||"timesButton") {
        
        prevNum.innerText = currentNum.innerText;
        currentNum.innerText =""; 
        operation.innerText = event.target.innerText
        
    }



    
    }
))



