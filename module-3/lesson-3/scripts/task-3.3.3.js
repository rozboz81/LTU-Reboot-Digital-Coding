function isValidNumber(number){
    return !isNaN(number);
    }
    function calculator(number1,number2,operator){
    strMessage = '';
    if(!isValidNumber(number1)){
    return 'Argument 1 must be a number';
    }
    if(!isValidNumber(number2)){
    return 'Argument 2 must be a number';
    }
    if(operator != '+' && operator != '-' && operator != '*' && operator != '/' && operator != '%'){
    return 'Argument 3 must be an arithmatic operator';
    }
    var sum;
    switch(operator){
    case '+':
    sum = number1 + number2;
    break;
    case '-':
    sum = number1 - number2;
    break;
    case '*':
    sum = number1 * number2;
    break;
    case '/':
    sum = number1 / number2;
    break;
    case '%':
    sum = number1 % number2;
    break;
    }
    return sum;
    }
    sum = calculator(10,10,'%');
    console.log(sum);