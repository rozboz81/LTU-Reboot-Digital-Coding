//Adding a validation function for the numbers
function isValidNumber(number){
    //We are using a double negative as inNaN returns false on valid numbers
    return !isNaN(number);
}
function calculator(number1,number2,operator){
    //if number1 is not a number
    if(!isValidNumber(number1)){
        //end the function here and pass the message below.
        return 'Argument 1 must be a number';
    }
    //if number 2 is not a number
    if(!isValidNumber(number2)){
        //end the function here and pass the message below.
        return 'Argument 2 must be a number';
    }
    // if the operator does not equal + - * / %
    if(operator != '+' && operator != '-' && operator != '*' && operator != '/' && operator != '%'){
        //end the function here and pass the message below.
        return 'Argument 3 must be an arithmatic operator';
    }
    //all fo the validation has passed so we need to do maths
    var sum;
    //based on the operator passed in argument 3 we will do a different sum
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
    //return the value of the sum
    return sum;
}

// set the value of sum to equal whatever is returned from the calculator function
sum = calculator(10,10,'*');
console.log(sum);

var number = 50;
var percent = 60;
percentage = calculator(calculator(number,100,'/'),percent,'*');
console.log(percentage);