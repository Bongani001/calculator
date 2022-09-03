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
let pair = '';
let opera = '';

number.forEach(num => {
    num.addEventListener('click', () => {
        n += num.textContent;
        populate.textContent = n;
    });
});

operator.forEach(opr => {
    opr.addEventListener('click', () => {
        let lastOpera = opera;
        opera = opr.textContent;
        
        conc = conc + n + opera;
        console.log(conc);
        if (typeof a == 'string') {
            a = n;
        } else if (typeof a == 'number') {
            a = previous;
            b = n;
            b = Number(b);
        };
        c = operate(opera, a, b);
        n = '';
        //populate.textContent = c;
        previous = c;
        a = Number(a);
        if (opera != lastOpera) {
            c = operate(lastOpera, a, b);
            populate.textContent = c;
            //populate.textContent = operate(opera, previous, b);
            //`${previous} ${opera} ${b}`;
        } else {
            populate.textContent = c;

        };
        
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