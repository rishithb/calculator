let num1 = ''
let num2 = ''
let operator = ''
let beforeDisplay = ''
let afterDisplay = ''

document.addEventListener("DOMContentLoaded", function() {
    let numbers = document.querySelectorAll(".num")
    let operators = document.querySelectorAll(".ops")
    let equal = document.querySelector(".equals")
    let clear = document.querySelector(".clear")
    let screen = document.querySelector(".display")

    numbers.forEach((number) => number.addEventListener("click", function(x) {
        screen.innerHTML += x.target.textContent
        beforeDisplay = screen.textContent
    }))

})



function operate(op, n1, n2) {
    switch (op) {
        case "a": add(n1, n2)
            break
        case "s": subtract(n1, n2)
            break
        case "m": multiply(n1, n2)
            break
        case "d": divide(n1, n2)

    }
}

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

