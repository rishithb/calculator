let num1
let num2
let result
let operator
let beforeDisplay = ''
let afterDisplay = ''

document.addEventListener("DOMContentLoaded", function() {
    let numbers = document.querySelectorAll(".num")
    let operators = document.querySelectorAll(".ops")
    let equal = document.querySelector(".equals")
    let clear = document.querySelector(".clear") 
    let screen = document.querySelector(".display")
    
    // populates display when number is clicked
    numbers.forEach((number) => number.addEventListener("click", function(x) {
        screen.innerHTML += x.target.textContent
    }))

    // records operator variable and stores first number
    operators.forEach((OPERATOR) => OPERATOR.addEventListener("click", function(o) {
        operator = o.target.textContent
        screen.innerHTML += (" " + operator + " ")
    }))

    // stores the second number and calculates
    equal.addEventListener("click", function() {
        var text = screen.innerHTML
        var pos = text.indexOf(operator)
        num1 = Number(text.substring(0, pos - 1))
        num2 = Number(text.substring(pos + 1))

        screen.innerHTML = operate(operator, num1, num2)
    })

    //clears screen and resets all variables
    clear.addEventListener("click", function() {
        screen.innerHTML = ""
        num1, num2, result = undefined 
        operator, beforeDisplay, afterDisplay = ''
    })

})



function operate(op, n1, n2) {
    if (op == "+")
        return n1 + n2
    else if (op == "-")
        return n1 - n2
    else if (op == "X")
        return n1 * n2
    else return n1 / n2
}
