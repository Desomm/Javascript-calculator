const operator = prompt('Please, enter operator you want to perform: \n eg, +,-,*,/');


const operator1 = Number(prompt('First Number' + ':'));
const operator2 = Number(prompt('Second number' + ' ' + operator1 + ' ' + operator ));


let result;

if (operator == '+') {
   result = operator1 + operator2
    
}   
else if (operator == '-') {
    result = operator1 - operator2
    
}
else if (operator == '*') {
    result = operator1 * operator2
    
}
    
else if (operator == '/') {
    result = operator1 / operator2
    
}
alert(result);
    