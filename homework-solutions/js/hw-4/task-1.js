/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */

  let salary = 800
  let grade 
  if (salary >= 1000) {
    grade = "middle";
} else {
    grade = "junior";
}
console.log(grade)

// через тернарный оператор
let salary2 = 2000; 
let grade2 = salary2 >= 1000 ? "middle" : "junior";

console.log(grade2);  
