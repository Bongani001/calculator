/**************FUNCTIONS**************/
function add(a, b) {
    let total =  Number(a) + Number(b);
    return total;
};

function subtract(a, b) {
    let total = a - b;
    return total;
};

function multiply(a, b) {
    if (typeof b == 'string') {
        return a;
    } else {
        let total = a * b;
        return total;
    };
};

function divide(a, b) {
    let total = a / b;
    return total;
};

function operate(opera, a, b) {
    switch (opera) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (typeof b == 'string') {
                return a;
            } else if (b == 0) {
                return 'SYNTAX ERROR!';
            } else {
                return divide(a, b);
            };   
        };
};

function equals() {
    b = populate.textContent;
    populate.textContent = '';
    let result = operate(opera,Number(previous) , Number(b));
    previous = result;
    n = '';
    b = '';
    let newResults = Math.round(result * 10000) / 10000;
    populate.textContent = newResults;
};

function backSpace() {
    let back = String(populate.textContent);
    arr = back.split('');
    arr.pop();
    let newer = arr.join('');
    populate.textContent = Number(newer);
    n = populate.textContent;
};

function clearCalc() {
    populate.textContent = '';
    a = '';
    b = '';
    n = '';
    e = '';
    conc = '';
    pair = '';
    opera = '';
    lastOpera = '';
    previous = '';
    arr = [];
};

function pointBtn() {
    if (n.includes('.')) {
        point.disabled = true;
    } else {
        n += point.textContent;
        populate.textContent = n;
    };
}

/* */
const populate = document.querySelector('.populate');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('#operator');
const equalSign = document.querySelector('.equal-sign');
const results = document.querySelector('.results');
const point = document.querySelector('.point');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

a = '';
b = '';
let n = '';
let e = '';
let conc = '';
let pair = '';
let opera = '';
let lastOpera = '';
let arr = [];
let displayArr = [];

number.forEach(num => {
    num.addEventListener('click', () => {
        n += num.textContent;
        populate.textContent = n;
        if (n.length > 23) {            //reduce numbers so they don't overflow the screen
            let newNum = n;
            displayArr = newNum.split('');
            displayArr.shift();
            let numbers = displayArr.join('');
            n = numbers;
            populate.textContent = n;
        };
    });
});

operator.forEach(opr => {
    opr.addEventListener('click', () => {
        opera = opr.textContent;
        conc = conc + n + opera;
        if (typeof a == 'string') {
            a = n;
        } else if (typeof a == 'number') {
            a = previous;
            b = n;
            b = Number(b);
        };
        n = '';
        c = operate(opera, a, b);
        //populate.textContent = c;
        //previous = c;
        a = Number(a);

        if (lastOpera == '') {
            c = operate(opera, a, b);
            populate.textContent = c;
            previous = c;
        } else if (opera !== lastOpera) {
            c = operate(lastOpera, a, b);
            populate.textContent = c;
            previous = c;
            //populate.textContent = operate(opera, previous, b);
            //`${previous} ${opera} ${b}`;
        } else {  
            populate.textContent = c;
            previous = c;
        };
        lastOpera = opera;
        point.disabled = false;
    });
});


/******* EVENT LISTENERS ******/

equalSign.addEventListener('click', equals);

clear.addEventListener('click', clearCalc);

backspace.addEventListener('click', backSpace);

point.addEventListener('click', pointBtn);

window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
        let keyboardNum = e.key;
        n = n + keyboardNum;
        populate.textContent = n;
    };
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        newOpera = e.key;
        callOperator();
    };
    if (e.key === 'Enter') {
        equals();
    };
    if (e.key === 'Backspace') {
        backSpace();
    };
    if (e.key === 'Escape') {
        clearCalc();
    };
    if (e.key === '.') {
        pointBtn();
    };

});


function callOperator() {
    opera = newOpera;
    conc = conc + n + opera;
    if (typeof a == 'string') {
        a = n;
    } else if (typeof a == 'number') {
        a = previous;
        b = n;
        b = Number(b);
    };
    n = '';
    c = operate(opera, a, b);
    a = Number(a);

    if (lastOpera == '') {
        c = operate(opera, a, b);
        populate.textContent = c;
        previous = c;
    } else if (opera !== lastOpera) {
        c = operate(lastOpera, a, b);
        populate.textContent = c;
        previous = c;

    } else {
        
        populate.textContent = c;
        previous = c;
    };
    lastOpera = opera;
    point.disabled = false;
};