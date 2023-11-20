import '../lib/style'

// Извлекаем данные из localStorage
let masString = localStorage.getItem('masarray')
let records = JSON.parse(masString)

// Определяем номер записи
let n = location.search
n = n.substr(3)

let title = document.getElementById('edittitle')
let text = document.getElementById('edittextarea')
let author = document.getElementById('editauthor')
let image = document.getElementById('editimage')

// Извлекаем данные для редактирования записи
if (n !== 'n') {
  title.value = records[n].title
  text.value = records[n].text
  author.value = records[n].author
  image.src = records[n].image
}

// Кнопка сохранения записи
let singleButton = document.getElementById('editbutton')

// Обработчик кнопки сохранения записи
singleButton.addEventListener('click', () => {
// Форматируем поле даты
  let now = new Date()
  let min = now.getMinutes()
  if (min < 10) {
    min = '0' + min
  }
  let month = Number(now.getMonth()) + Number(1)
  let date = now.getDate() + '.' + month + '.' + now.getFullYear() + '  ' + now.getHours() + ':' + min

  if (title.value !== '' && text.value !== '' && author.value !== '') {
// При редактировании имеющейся записи
    if (n !== 'n') {
      records[n].title = title.value
      records[n].text = text.value
      records[n].author = author.value
      records[n].image = document.getElementById('editlist').value
    }
// При создании новой записи
    if (n === 'n') {
      let newrecord = {
        title: title.value,
        text: text.value,
        author: author.value,
        date: date,
        image: document.getElementById('editlist').value}
      records.push(newrecord)
    }
// Сохраняем данные в localStorage
    masString = JSON.stringify(records)
    localStorage.setItem('masarray', masString)
    let a
    a = 'index.html'
    document.location.assign(a)
  } else {
    alert('Пожалуйста, заполните все поля!')
  }
})

// Удаление записи
let deleteButton = document.getElementById('deletebutton')
deleteButton.addEventListener('click', () => {
  if (n !== 'n') {
    records.splice(n, 1)
    document.location.assign('index.html')
    console.log('rec: ', records)
// Сохраняем данные в localStorage
    masString = JSON.stringify(records)
    localStorage.setItem('masarray', masString)
  }
})
