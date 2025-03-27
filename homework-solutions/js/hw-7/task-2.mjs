/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

/* function isPalindrom(word) {
  word = word.toLowerCase().replace(/[^a-zа-я0-9]/g, '')
  return word === word.split('').reverse().join('')
}
console.log(isPalindrom("aka"))
console.log(isPalindrom("abc"))
console.log(isPalindrom("А роза упала на лапу Азора"))

и слово и предложение
  */

function isPalindrom(word) {
  if (typeof word !== 'string') return false
  if (word.includes(' ')) return false
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

console.log(isPalindrom("aka"))
console.log(isPalindrom("А роза упала на лапу Азора"))




/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    return [] 
  } 
  else {
    let words = sentence.trim().split(/\s+/)
    let maxLength = Math.max(...words.map(word => word.length))
    return words.filter(word => word.length === maxLength)
  }
}
console.log(findLongestWords('По вечерам над ресторанами Горячий воздух дик и глух И правит окриками пьяными Весенний и тлетворный дух'))


export { isPalindrom, findLongestWords };
