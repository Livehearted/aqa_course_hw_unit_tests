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
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error('Не верное имя')
    }
     this._firstName = value;
  }
  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
       throw new Error('Не верная фамилия')
      }
    this._lastName = value;
  }
  set profession(value) {
    if (typeof value !== 'string' || value.trim() === '' || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error('Не верная профессия')
    }
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000 ) {
      throw new Error('Неверная зарплата')}
    this.#salary = value;
  }
  }



class Company {
#employees
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
findEmployeeByName(firstName) {
  const employee = this.#employees.find(employee => employee.firstName === firstName)
     if (!employee) {
       throw new Error('Такого нет');
     }
     return employee;//возвращает объект сотрудника, если такой найден
   }
   #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(employee => employee.firstName === firstName);
  }
  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error('Не удален работник');
    }
    this.#employees.splice(index, 1);
  }

getTotalSalary() {
  return this.#employees.reduce((sum, employee) => sum + employee.salary, 0)
  }
}
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
