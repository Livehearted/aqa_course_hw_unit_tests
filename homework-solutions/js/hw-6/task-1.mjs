/*
1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень

  Значение добавьте в массив 'forOf' 
*/

const forOf = [];
let newCount = [1,2,3,4,5,6,7,8,9,10]
for (let value of newCount) {
   if (value % 2 === 0) {
    forOf.push (value ** 2) 
   } else {
        forOf.push(value ** 3)
      }
    }                      

console.log(forOf);


/*
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом

  В результате вы должны получить массив [0, 1, 3, 4, 5], присвойте в переменную "result"
*/
let metody = [1,2,3,4,5]
metody.push(6)
metody.unshift(0)
console.log(metody)
metody.splice(2, 1)
console.log(metody)
metody.pop()

let result=metody;
console.log(result)

/*
3. Деструктуризация массивов
  - Создайте массив [3, 11, 32, 7, 20] 
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива

  Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

let destr = [3, 11, 32, 7, 20] 
let [first, second,...rest] = destr
console.log(first)
console.log(second)
console.log(rest)

/* 
let arr = ["Nastya", "Uchit", "JS"]
let [name, action, object] = arr
console.log(name)
console.log(action)
console.log(object)
let userNastya = { name, action, object }
console.log(userNastya)
*/


/*
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Используйте спред оператор

  Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
*/

let massivFirst = [1,2,3,4,5]
let massivSecond = [6,7,8,9,10]
let mergedArray = [...massivFirst,...massivSecond]
console.log(mergedArray)



export { forOf, result, first, second, rest, mergedArray };
