/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

import { setSeconds } from "date-fns";

let resultUnique = [];
let resultNull = null

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(pizzazComp => pizzazComp.toLowerCase());
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'].map(pizzazT1 => pizzazT1.toLowerCase());
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(pizzazT2 => pizzazT2.toLowerCase());

for (let element of myPizzasT1) {
  if (!competitorPizzas.includes(element)) {
    resultUnique.push(element)
  }
}

for (let element2 of myPizzasT2) {
  if (!competitorPizzas.includes(element2)) {
    resultUnique.push(element2)
  }
}
if (resultUnique.length === 0) {
  resultNull = null
} 


console.log(resultUnique)
console.log(resultNull)


/*
resultUnique = myPizzasT1.filter( ( element ) => !competitorPizzas.includes( element));
resultNull = myPizzasT2.filter( ( element ) => !competitorPizzas.includes( element));
*/


export { resultNull, resultUnique };
