class Employee {
  #salary
  constructor(firstName, lastName, profession, salary) {
  this._firstName = firstName
  this._lastName = lastName
  this._profession = profession
  this.#salary = salary
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`
  }
  get firstName(){
    return this._firstName
  }
  get lastName(){
    return this._lastName
  }
  get profession(){
    return this._profession
  }
  get salary(){
    return this.#salary
  }
  set firstName(value) {
    this._firstName = value
  }
  set lastName(value) {
    this._lastName = value;
  }
  set profession(value) {
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) throw new Error('Неверная зарплата');
    this.#salary = value;
  }
  }


const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
console.log(emp1.getFullName())
emp1.salary = 3100;
console.log(emp1.salary); // 3100
const emp2 = new Employee('John2', 'Doe2', 'Developer2', 9);
console.log(emp2.salary)



class Company {
#employees // Инициализация #employees = [] прямо при объявлении, либо в конструкторе this.#employees = employees
constructor(title, phone, address, employees = []) {
  this._title = title
  this._phone = phone
  this._address = address
  this.#employees = employees
}
get title() {
  return this._title
}
get phone() {
  return this._phone
}
get address() {
  return this._address
}
addEmployee(employee) {
  if (!(employee instanceof Employee)) {
    throw new Error ('Работник должен быть из класса Работник')
  }
  this.#employees.push(employee)
}
getEmployees() {
  return this.#employees
}
getInfo() {
  return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`
}
}


const company = new Company('Tech Corp', 123456, 'Main Street');
const empl1 = new Employee('John', 'Doe', 'Developer', 3000);
const empl2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(empl1);
company.addEmployee(empl2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo())


export { Employee, Company };








/* 
Вариант 1
class Company {
  #employees; // значение по-умолчанию

  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }


Вариант 2
class Company {
  #employees = []; // тут инициализируем, employees не нужно передавать в конструктор

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }


name ?? Boris
вернет Boris если левая часть null/undefined

1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')
// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake



// создаем класс Animal

class Animal {
constructor(type, color, weight, height,placeOfOrigin, name) {//пишем какие параметры принимает класс ! приватные поля не наследуются
this.type = type;
this._color = color; //если для поля есть геттер, используем _
this.weight = weight;
this.height = height;
this.placeOfOrigin = placeOfOrigin;
this.name = name
}
getInfo() {
  return `Type: ${this.type} \nColor: ${this.color} \nWeight: ${this.weight}\nHeight: ${this.height}\nPlaceOfOrigin: ${this.placeOfOrigin}\nName: ${this.name}`
}
get color() { //для того, чтобы получить
  return this._color
}
set color(color) { // для того, чтобы что-то вставить
  if(!color || typeof color !== 'string'){
    throw new Error('Color must be a string')
  } else if(color !== 'red' && color !== 'black' && color !== 'white' && color !== 'blue') {
    throw new Error ('Color must be red, black, white or blue')
  }
  this._color = color
}
} 

console.log(new Animal('cat', 'black','5', '10','Russia', 'Mehr').getInfo()) //выведем в консоль, животное в классе 

//расширяем класс Animal

class Snake extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, name, isPoisonous) { //сначала переписываем все то, что принадлежит род классу, а затем новые поля
  super(type, color, weight, height, placeOfOrigin, name); // вызывает Animal constructor
  this.isPoisonous = isPoisonous; //isPoisonous новое поле, которое мы добавили, когда расширили класс
}
}
// Без super() не можешь использовать this в конструкторе подкласса — будет ошибка this только к новым полям, которые добавили при расширении

class Bird extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, name, isFlying) { //сначала переписываем все то, что принадлежит род классу, а затем новые поля
    super(type, color, weight, height, placeOfOrigin, name); // вызывает Animal constructor
    this.isFlying = isFlying; //isFlying новое поле, которое мы добавили, когда расширили класс
  }
}

class CatLike extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, name, isSafeForPet) { //сначала переписываем все то, что принадлежит род классу, а затем новые поля
    super(type, color, weight, height, placeOfOrigin, name); // вызывает Animal constructor
    this.isSafeForPet = isSafeForPet; //isSafeForPet новое поле, которое мы добавили, когда расширили класс
  }
}

//создаем класс Zoo

class Zoo {
  #animals = [] 
  #workers = []
  constructor(address, title, ticketPrice) {
    this.address = address;
    this.title = title;
    this.ticketPrice = ticketPrice;
    }
    setAnimal(animal) {
    if (!(animal instanceof Animal)) {
    throw new Error("Animal must be an instance of Animal");
    }
    this.#animals.push(animal);
    }
    showAnimals() {
    return this.#animals;
}
removeAnimal(animalName) {
this.#animals.splice(this.#animals.findIndex(({name}) => name === animalName),1 )
}
setWorker(worker) {
if (!(worker instanceof ZooWorker)) {
throw new Error("Worker must be an instance of Worker");
}
this.#workers.push(worker);
}
showWorkers() {
return this.#workers;
}
}

const zoo = new Zoo("1st avenue", "Zoo", 10);

//создаем класс рабочих

class ZooWorker {
constructor(firstName, lastName, phone) {
this.firstName = firstName;
this.lastName = lastName;
this.phone = phone;
}
  getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}

//создаем животных

const bird = new Bird("Bird", "black", 1, 1, "Russia", "Kakadu", true);
const snake = new Snake("Snake", "black", 1, 1, "Russia", "Kaa", true);
const cat = new CatLike("Cat", "black", 1, 1, "Russia", "Boris", true);


zoo.setAnimal(bird) 
zoo.setAnimal(new Bird("Kolibri", "blue", 1, 1, "Russia", "Koli", true)) //создаем новую птичку через вызов
zoo.setAnimal(snake)
zoo.setAnimal(cat)
console.log(zoo.showAnimals())
console.log(zoo.removeAnimal('Koli')) //удаляем новую птичку, на этом этапе console.log(zoo.removeAnimal('Koli')) возвращает undefined, потому что метод removeAnimal ничего не возвращает. Он просто удаляет, если находит
console.log(zoo.showAnimals()); // выводим список животных после удаления
zoo.setWorker(new ZooWorker("Ivan", "Ivanov", "8-800-555-35-35"))
zoo.setWorker(new ZooWorker("Petr", "Petrov", "8-800-555-35-35"));
zoo.setWorker(new ZooWorker("Sidor", "Sidorov", "8-800-555-35-35"));
console.log(zoo.showWorkers())

//this всегда ссылвется на тот объект который будет создан в классе
//super всегда ссылается на класс родителей, если присутствует наследование
// если нужно прятать какие-то поля в классе и не даем обращаться к нему извне то делаем его приватным #
//приватное поле указать до конструктора
// классы обладают методами

//Static методы, которые не требуют создания объектов из данных классов
// методы можно вызывать у класса напрямую


class Calculator {
  static series = "Casio";
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

class ComplexCalculator extends Calculator {
  static sqrt(a) {
    return Math.sqrt(a);
  }
}

const result = Calculator.add(1, 2);//вызываем метод у класса
console.log(Calculator.series); 
const calc = new Calculator();
// calc.add(1, 2); //ошибка alc.add is not a function
console.log(result);

ComplexCalculator.add(1, 2);
console.log(ComplexCalculator.add(1,2)) //вызываем статически метод родителя
ComplexCalculator.sqrt(4);
console.log(ComplexCalculator.sqrt(4)) // вызываем статический метод наследника
*/
