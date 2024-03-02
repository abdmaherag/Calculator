add = (number1, number2) => {
    let addObj = {
        number1,
        addition: "+",
        number2,
        result: number1 + number2,
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


let clickedButtons = ''; 
const resultBox = document.querySelector('#result'); // Select result box outside the loop

calculate = () => {
    //Top buttons functions
    const numbers = document.querySelectorAll('.numbers, .dot');
    const acButton = document.querySelector('.ac');
    acButton.addEventListener('click', () => {
        clickedButtons = '';
        resultBox.textContent = clickedButtons;
        console.log(clickedButtons);
    });
    
    const postiveSlashNegativeButton = document.querySelector('.top-calc:nth-child(2)');
    postiveSlashNegativeButton.addEventListener('click', () =>{
        clickedButtons = Number(clickedButtons) *-1
        console.log(clickedButtons);
        resultBox.textContent = clickedButtons
    })
    
    const percentButton = document.querySelector('.top-calc:nth-child(3');
    percentButton.addEventListener('click', () =>{
        clickedButtons= Number(clickedButtons)/100;
        resultBox.textContent = clickedButtons
    })
    //end of top buttons functions
    
    //Numbers display function
    numbers.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            clickedButtons += buttonText; // Append the clicked button text to the variable
            resultBox.textContent = Number(clickedButtons); // Set the text content of result box
            console.log(clickedButtons); // Log the clicked buttons string
        });
    });
    //End Numbers display function
}  