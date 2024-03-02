add = (number1, number2) => {
    let addObj = {
        number1,
        addition: "+",
        number2,
        result: `the answer of ${number1} + ${number2} is ${number1 + number2}`,
    }
    return addObj['result'] 
}

console.log(add(2,3));

substract = (number1, number2) => {
    let substractObj = {
        number1,
        substraction : "-",
        number2,
        result: `the answer of ${number1} - ${number2} is ${ number1 - number2}`
    }
    return substractObj['result']
}
console.log(substract(53,23));

multiply = (number1, number2) => {
    multiplyObj = {
        number1,
        multiplication: "x",
        number2,
        result: `the answer of ${number1} x ${number2} is ${ number1 * number2}`
    }
    return multiplyObj['result']
}

console.log(multiply(3, 3));

divide = (number1, number2) =>{
    divideObj = {
        number1,
        division: "÷",
        number2,
        result:`the answer of ${number1} ÷ ${number2} is ${ number1 / number2}`
    }
    return divideObj['result']
}
console.log(divide(3, 3));

operate = (operator, number1, number2) => {
    operator(number1,number2)
}
console.log(divide(5,5));


populate = () => {
    const number = document.querySelectorAll('.numbers, .dot');
    number.forEach(button =>{
        button.addEventListener('click', () =>{
            const resultBox = document.querySelector('#result')
            const displayValue = document.createElement('p');
            displayValue.textContent = button.textContent
            resultBox.appendChild(displayValue)
            console.log(displayValue);
        })
    })}
populate()