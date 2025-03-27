/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...massiv) {
  return [].concat(...massiv)
}
console.log(mergeArrays([10,9,8], [7,6,5], [4,3,2,1,0]))


/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
 
    function devideBy(sentence) {
      let slovo = sentence.trim().split(/\s+/)
      let result = slovo[0].toLowerCase()
   
    for (let i = 1; i< slovo.length; i++) {
      result += '_' + slovo[i].charAt(0).toUpperCase() + slovo[i].slice(1).toLowerCase()
    }
   
    return result
    }
   
    console.log(devideBy('I am super engineer'))


/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */



function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let fibFirst = 0;
  let fibSecond = 1;

  for (let i = 2; i <= n; i++) {
    let result = fibFirst + fibSecond
    fibFirst = fibSecond
    fibSecond = result;
  }

  return fibSecond
}

console.log(fibonacci(88));





export { mergeArrays, fibonacci, devideBy };
