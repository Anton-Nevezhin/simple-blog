// Должно вывести этот текст
console.log('Должно быть в консоли config')

import { recSingle } from '../scripts/single.js'
// Должно вывести 'Из single'
console.log('Из single. Должно быть в консоли config: ', recSingle)

export let rec = 'Пример текста'
