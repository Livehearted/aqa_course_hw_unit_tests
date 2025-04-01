/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/
const numbers = [1, 2, 2, 3, 4, 4, 4, 5]

function countOccurrences(arr) {
const counterObject = {}
for (const num of arr) {
  counterObject[num] = (counterObject[num] || 0) + 1
}
return counterObject


}
console.log(countOccurrences(numbers))



export { countOccurrences };
