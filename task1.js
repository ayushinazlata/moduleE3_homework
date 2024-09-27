function getKindOfNumbers() {
    const arr = [1, NaN, 'hello', null, 0, 4, 0, 'type', 3, true]
  
    let zeroNumber = 0;
    let oddNumber = 0;
    let evenNumber = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zeroNumber += 1;
            } else if (arr[i] % 2 === 0) {
                evenNumber += 1;
            } else {
                oddNumber += 1;
            }
        }
    }
  
    console.log(`Количество чётных чисел: ${evenNumber}`);
    console.log(`Количество нечётных чисел: ${oddNumber}`);
    console.log(`Количество нулей: ${zeroNumber}`);
  
  }
  
  getKindOfNumbers();