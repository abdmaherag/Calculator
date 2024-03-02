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
        result: number1 - number2
    }
    return substractObj['result']
}
console.log(substract(53,23));

multiply = (number1, number2) => {
    multiplyObj = {
        number1,
        multiplication: "x",
        number2,
        result: number1 * number2
    }
    return multiplyObj['result']
}

console.log(multiply(3, 3));

divide = (number1, number2) =>{
    divideObj = {
        number1,
        division: "÷",
        number2,
        result: number1 / number2
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
    let adds = false;
    let subs = false;
    let mults = false;
    let divs = false;

    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', () => {
    adds = true;
    num1 = Number(clickedButtons);
        clickedButtons = '';
    });

    const substractButton = document.querySelector('.substract')
    substractButton.addEventListener('click', () => {
    subs = true;
    num1 = Number(clickedButtons);
    clickedButtons = '';
    });

    const multiplyButton = document.querySelector('.mult')
    multiplyButton.addEventListener('click', () => {
    mults = true;
    num1 = Number(clickedButtons);
    clickedButtons = '';
    });
    
    const divideButton = document.querySelector ('.divs')
    divideButton.addEventListener('click', () =>{
        divs = true;
        num1 = Number(clickedButtons);
        clickedButtons = '';
    })

    const equalsButton = document.querySelector('.eq');
    equalsButton.addEventListener('click', () => {
        const num2 = Number(clickedButtons);
        if (adds) {
            resultBox.textContent = add(num1, num2);
        } else if (subs) {
            resultBox.textContent = substract(num1, num2);
        }
        else if (mults){
            resultBox.textContent = multiply(num1, num2)
        }
        else if (divs){
            resultBox.textContent = divide(num1, num2)
        }
        // Reset adds and subs after calculation
        adds = false;
        subs = false;
        mults = false;
        divs = false;
    });
}
calculate()