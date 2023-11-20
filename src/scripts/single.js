import '../lib/style'

// Извлекаем данные из localStorage
let masString = localStorage.getItem('masarray')
let records = JSON.parse(masString)

// Определяем номер записи
let n = location.search
n = n.substr(3)

// Выводим содержимое записи
function postout (i) {
  document.getElementById('stitle').innerHTML = records[i].title
  document.getElementById('stext').innerHTML = records[i].text
  document.getElementById('sauthor').innerHTML = records[i].author
  document.getElementById('sdate').innerHTML = records[i].date
  document.getElementById('simage').src = records[i].image
}

// Кнопка перехода на страницу редактирования записи
let sButton = document.getElementById('singlebutton')

sButton.addEventListener('click', () => {
  let a
  a = 'edit.html?n=' + n
  document.location.assign(a)
})

postout(n)
