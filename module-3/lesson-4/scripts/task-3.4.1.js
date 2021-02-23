for(multiplyer=1; multiplyer<=12; multiplyer++){
    for(
        counter=1; //set the value of the counter
        counter<=12; //conditional logic
        counter++ //add 1 to counter after each iteration
    ){
        let sum = multiplyer * counter;
        let message = multiplyer + '*' + counter + ' = ' + sum;
        console.log(message);
    }
} 