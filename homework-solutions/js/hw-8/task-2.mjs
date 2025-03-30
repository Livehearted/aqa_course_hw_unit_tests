/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowelsList = 'aeiouAEIOU'

function sortedByVowels(wordsArr) {
  const countVowels = function(word) {
    return word.split('').reduce((count, el) => count + vowelsList.includes(el), 0);
  }
  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));

export { sortedByVowels };
