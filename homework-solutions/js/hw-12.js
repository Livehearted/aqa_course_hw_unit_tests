//1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

    function delayTwoSeconds(callback) {
        setTimeout(callback, 2000);
      }
   
      delayTwoSeconds(() => {console.log('Hi')})

//2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//его резолва в консоль

const myPromis = new Promise((resolve, reject) => {
    resolve(1)
})
myPromis.then((result) => console.log(result))

//3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
// Обработайте промис методом .catch и выведите результат его реджекта в консоль

const myFalsePromis = new Promise((resolve, reject) => {
    reject('Promise failed');
  });
 
  myFalsePromis.catch((err) => console.log(err));

//4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
    return new Promise((resolve, reject) => {
      resolve(number);
    });
  }


//5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
   .then(([p1, p2, p3]) => {
     console.log(p1);
     console.log(p2);
     console.log(p3);
   })
   .catch((rej) => console.log(rej));


//6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
// в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
   .then(([p1, p2, p3]) => {
     console.log(p1);
     console.log(p2);
     console.log(p3);
   })
   .catch((rej) => console.log(rej));

//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function allPromises() {
    try {
      const [p1, p2, p3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
 
      console.log(p1);
      console.log(p2);
      console.log(p3);
    } catch (error) {
      console.log(err);
    }
  }
 
  async function runPromises() {
    try {
      const [p1, p2, p3] = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
 
      console.log(p1);
      console.log(p2);
      console.log(p3);
    } catch (error) {
      console.log(error);
    }
  }


  /* Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/


async function createTodo(todoBody) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoBody),
      });
 
      if (response.status !== 201) {
        throw new Error(`Incorrect todo. Status: ${response.status}`);
      }
 
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.error(err.message);
    }
  }
 
  const Nastya = {
    userId: 1,
    title: 'catch me',
    completed: false,
  };
 
  createTodo(Nastya).then((result) => {
    if (result) {
      console.log(result);
    }
  });




//замыкание
// возможность вернувшись из функции иметь доступ к окружению внешней функции, ко всем перменным объявленным внутри функции до ее возврата

/* setTimeout(() => console.log("after 1 second"), 1000); //что-то произойдет через 1 секунду

 const bomb = (seconds) => {
    let count = seconds;
    const interval = setInterval(() => {
    console.log(--count);
    }, 1000);
    setTimeout(() => {
    clearInterval(interval);
    console.log("Explode!");
    }, 
    seconds * 1000);
    };
    
    bomb(10);

    
setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 1000);

const foo = () => console.log("First");
const bar = () => {
    setTimeout(() => console.log("Second"), 500);
    console.log("after second");
};
const baz = () => console.log("Third");

bar();
foo();
baz();

//сначала весь синхронный код , а потом весь асинхронный, поэтому сначала кончоль лог старт-финиш, затем таймаут 0-таймаут 1

setTimeout(() => console.log("Timeout 0"), 0);
console.log("Outside timeout start");

setTimeout(() => console.log("Timeout 1"), 1000);
console.log("Outside finish");

//Промисы

console.log("Sending request");
setTimeout(() => {
    console.log("Backend received request");
    setTimeout(() => {
        console.log("Backend received the data from DB");
        setTimeout(() => {
            console.log("Received response from Backend");
        }, 1000);
    }, 1000);
}, 1000);


const p = new Promise((resolve, reject) => {
resolve("Hello");
});


//resolve -  что должно вернуться, если закончится с успехом reject - что должно вернуться, если закончится с ошибкой
//console.log(p); будет испольняться до промиса т к консоль лог синхронный

//p.then((result) => console.log(result)).then(() => console.log("After promise")); //если надо что-то вывести после промиса

const p = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum > 4) {
        resolve(`Resolved with ${randomNum}`);
    }
    reject(`Failed with ${randomNum}`);
});
    p.then((result) => console.log(result))
    .catch((reject) => console.log(reject)) //для обработки реджекта
    .finally(() => console.log("Finally"));//исполняется после всей цепочки



console.log("Send request");

const p = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log("Preparing response")
        const response = {
            status: 200,
            data: {
                name: "Nastya",
                age:32
            },
        } 
        if(response === 200) {
            resolve(response)
        }
        reject(response)
    }, 2000)
})

p.then((resolve)=> console.log(resolve)).catch((reject)=> console.log(reject))


const db = [
    { name: "Dzmitry", age: 30 },
    { name: "Tatiana", age: 30 },
    { name: "Anastasia", age: 30 },
  ];
  
  
  function getUser(userName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Preparing response");
        const userFromDataBase = db.find((user) => user.name === userName);
        if (userFromDataBase) {
          const response = {
            status: 200,
            data: JSON.stringify(userFromDataBase),
          };
          resolve(response);
        } else {
          const response = {
            status: 400,
            message: "User not found",
          };
          reject(response);
        }
      }, 2000);
    });
  }

  getUser("Dzmitry")
.then((response)=> JSON.parse(response.data))
.then((user)=> console.log(user))
.catch((reject)=> console.log(reject))

getUser("Tatiana")
.then((response) => JSON.parse(response.data))
.then((user) => console.log(user))
.catch((reject) => console.log(reject));

Promise.all([getUser("Dzmitry"), getUser("Tatiana"), getUser("Nikita")]) //передаем массив промисов и получаем массив резолвов
.then(([dzmitry, tatiana]) => {
console.log(dzmitry);
console.log(tatiana);
})
.catch((rej) => console.log(rej));
//промис олл выполнится успешно если каждый резола успешен, если какой-то реджектнулся то мы падаем  кетч

Promise.allSettled([getUser("Dzmitry"), getUser("Tatiana"), getUser("Nikita")])
.then(([dzmitry, tatiana, nikita]) => {
console.log(dzmitry);
console.log(tatiana);
console.log(nikita);
})
.catch((rej) => console.log(rej));

//промис олл сетлед выдаст нам и успешный и неуспешный результат

console.log(1);
setTimeout(() => {
console.log(2);
}, 1000);

setTimeout(() => {
console.log(3);
}, 0);
console.log(4);

let p3 = new Promise((resolve, reject) => {
resolve();
});

p3.then(() => {
console.log(5);
});
console.log(6);

//1 - 4 - 6 - 5 - 3 - 2

//сначала макротаски (сеттаймаут, сетинтервал, сетиммидиэйт, а потом микротаски (промисы)
//синхронные->промисы->таймауты

for (let i = 0; i < 10; i++) {
    console.log(i);
    Promise.resolve().then(() => console.log(`Promise ${i}`));
}



//Async/await

async function hello() {
 return "Hello"; //new Promise((res, rej) => res("Hello"));
} // можем указать что любая функция может быть асинхронная

async function f() {
//const tatiana = await getUser("Tatiana");//не перейдет на след строчкук пока не исполнится авейт даже если дальше синхронная функция
//console.log(tatiana);
//const dzmitry = await getUser("Dzmitry");
//console.log(dzmitry);
//setTimeout(() => console.log("Hello"), 2000);
try { const [dzmitry, tatiana] = await Promise.all([getUser("Dzmitry"), getUser("Tatiana"), getUser("Nikita")]);
console.log(dzmitry);
console.log(tatiana);
} catch (rej) {
    console.log(rej)
}
}

f();
//авейт внутри асинхронных функций

try {
    throw new Error("Some error");
} catch (e) {
    console.log(e);
    }

//Fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "post",
    headers: {},
    body: {
    userId: 1,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));


    async function getDataFromApi(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (e) {
        console.error(e.message);
    }
}

getDataFromApi("https://jsonplaceholder.typicode.com/todos");

const url = "https://jsonplaceholder.typicode.com/todos";

async function sendRequest(url, { method, body, headers }) {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers,
        });
        if (response.status !== 201) { //или писать if (!response.ok)
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
} catch (e) {
    console.error(e.message);
}
}

sendRequest(url, {
    method: "post",
    body: {
        userId: 1,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
},
});

//TODO: Errors

try {
  // throw new Error("Custom error");
  throw "Nikita is the best";
  // const a = 2;
  // a = 3;
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error);
}
/*