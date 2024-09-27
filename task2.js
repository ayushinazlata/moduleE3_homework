// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.


function simpleNumber(number) {
    let result = `Число ${number} простое`;
    let sum = 0;

    if (number > 1 && number <= 1000) {
        for (let i = 2; i < number; i++) {  
            if (number % i === 0 ) {
                result = `Число ${number} составное`;
            } 
        }
    } else if (number > 1000) {
        result = "Данные неверны";
    } else {
        result = `Число ${number} не является ни составным, ни простым`;
    }
    return result;
  }
  
const numb = simpleNumber(2);
console.log(numb);
