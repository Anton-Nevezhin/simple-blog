// Должно вывести этот текст
console.log('Должно быть в консоли config')

// import { recSingle } from '../scripts/single.js'
// // Должно вывести 'Из single'
// console.log('Из single. Должно быть в консоли config: ', recSingle)

// export let rec = 'Пример текста'

let editmas = localStorage.getItem('mas')
console.log('mas in config: ', editmas)
console.log('Simple text in config')

// Кнопка "Изменить"
let singleButton = document.createElement('button')
// singleButton.className = 'blogcard-button'
singleButton.innerHTML = 'Изменить'
document.getElementById('recconfig').appendChild(singleButton)

singleButton.addEventListener('click', () => {
  let a
  // a = 'config.html'
  // document.location.assign(a)
  a = document.getElementById('ed').value
  localStorage.setItem('mas', a)
})
