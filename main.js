//stores all buttons within an array rather than a NodeList
let numButton = Array.from(document.querySelectorAll(".calculator__button"))
//selects the bottom Div as the current number div
let currentNum = document.getElementById("calculator__current")
let prevNum = document.getElementById("calculator__previous")




numButton.forEach (input => input.addEventListener("click", (event) => {


    if (event.target.innerText <= 9) {
        currentNum.innerText+= event.target.innerText;
    }
    else if(event.target.innerText == "AC") {
        currentNum.innerText ="";
        prevNum.innerText ="";  
    }
    else if(event.target.innerText == "+" || "-" || "/" ||"*") {
        
        prevNum.innerText = currentNum.innerText;
        currentNum.innerText =""; 
    }

    else if(event.target.innerText = "=") {
        alert("you did it")
    }
    
    }
// }
))



