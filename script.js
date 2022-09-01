/**************FUNCTIONS**************/
function add(a, b) {
    let total =  a + b;
    return total;
};

function subtract(a, b) {
    let total = a - b;
    console.log(a);
    console.log(b);
    return total;
};

function multiply(a, b) {
    let total = a * b;
    return total;
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
            };
            if (b == 0) {
                return 'SYNTAX ERROR!';
            };
            return divide(a, b);
    }
};

/* */
const populate = document.querySelector('.populate');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('#operator');
const equalSign = document.querySelector('.equal-sign');
const results = document.querySelector('.results');

a = '';
b = '';
let n = '';
let e = '';
let conc = '';

number.forEach(num => {
    num.addEventListener('click', () => {
        n += num.textContent;
        populate.textContent = n;
    });
});

operator.forEach(opr => {
    opr.addEventListener('click', () => {
        opera = opr.textContent;
        conc = conc + n + opera;
        console.log(conc);
        if (typeof a == 'string') {
            a = n;
        } else if (typeof a == 'number') {
            a = previous;
            b = n;
        };
        c = operate(opera, Number(a), Number(b));
        populate.textContent = c;
        previous = c;
        b = populate.textContent;
        n = '';
        a = Number(a);
    });
});

equalSign.addEventListener('click', () => {
    a = populate.textContent;
    populate.textContent = '';
    let result = operate(opera,Number(previous) , Number(a));
    populate.textContent = result;
    n = '';
    a = '';
    b = '';
});