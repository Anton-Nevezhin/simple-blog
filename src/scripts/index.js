'use strict'

import '../lib/style'

// let ind = localStorage.getItem('mas')
// console.log('mas in index: ', ind)
// ind = 48
// localStorage.setItem('mas', ind)

let records

let recordsfirst = [
    {title: 'Запись 1', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-1.jpg', date: '08.10.2023'},
    {title: 'Запись 2', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'Л. Н. Толстой', image: 'static/img/post-2.jpg', date: '10.10.2023'},
    {title: 'Запись 3', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-3.jpg', date: '12.10.2023'},
    {title: 'Путешествия по морю – это одиссея', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-4.jpg', date: '14.10.2023'}]

    // Запись массива в mas
// let mas1String = JSON.stringify(records)
// localStorage.setItem('mas', mas1String)

// let ms = localStorage.getItem('masarr')
// console.log(ms)

// Загрузка пустого localStorage
let masString = localStorage.getItem('masarray') // ['Ариша', "Гриша", 'Пахан'] //  localStorage.getItem('mas')
// console.log('mass: ', masString)
if (masString === null) {
  let masStringFirst = JSON.stringify(recordsfirst)
  localStorage.setItem('masarray', masStringFirst)
}
masString = localStorage.getItem('masarray') // ['Ариша', "Гриша", 'Пахан'] //  localStorage.getItem('mas')
// console.log('massnew: ', masString)

records = JSON.parse(masString)

    // Импортированные данные
// let datImp = document.createElement('div')
// datImp.innerHTML = rec
// document.getElementById('root').appendChild(datImp)

// Пагинация

function buttons () {
  for (let i = 1; i <= pagesMax; i++) {
    let listButton = document.createElement('button')
    listButton.className = 'list-button'
    listButton.innerHTML = i
    listButton.addEventListener('click', () => {
      pages = listButton.innerHTML - 1
      document.getElementById('posts').innerHTML = ''
      createContent()
    })
    paginationButtons.appendChild(listButton)
  }
}

let blogButtonPlus = document.getElementById('blogbuttonplus')
let blogButtonMinus = document.getElementById('blogbuttonminus')
let posts = 3
let pages = 0
let pagesMax = Math.ceil(records.length / posts)
let paginationButtons = document.getElementById('paginationbuttons')
// paginationButtons.innerHTML = pages + 1
// let listButton = document.createElement('button')
// listButton.innerHTML = pages + 1
// paginationButtons.appendChild(listButton)
buttons()
console.log(pagesMax)
blogButtonPlus.addEventListener('click', () => {
  if ((pages + 1) * posts <= records.length) {
    pages = pages + 1
    // paginationButtons.innerHTML = pages + 1
    // buttons()
    // listButton.innerHTML = pages + 1
    // paginationButtons.appendChild(listButton)
    document.getElementById('posts').innerHTML = ''
    createContent()
  }
})
blogButtonMinus.addEventListener('click', () => {
  if (pages > 0) {
    pages = pages - 1
    // paginationButtons.innerHTML = pages + 1
    // buttons()
    // listButton.innerHTML = pages + 1
    // paginationButtons.appendChild(listButton)
    document.getElementById('posts').innerHTML = ''
    createContent()
  }
})

// for (let i = records.length - 1; i > records.length - 1 - posts; i--) {

createContent()

function createContent () {
  for (let i = records.length - 1 - posts * pages; i > records.length - 1 - posts * (pages + 1); i--) {
  // Карточка поста
    let blogcontent = document.createElement('div')
    blogcontent.className = 'blog-content'

    // Карточка поста
    let blogcard = document.createElement('div')
    blogcard.className = 'blogcard'

  // Автор, дата
    let blogcardFooter = document.createElement('div')
    blogcardFooter.className = 'blogcard-footer'

    // Все текстовое содержание (кроме картинки)
    let blogcardText = document.createElement('div')
    blogcardText.className = 'blogcard-text'

    // Заголовок
    let card = document.createElement('p')
    card.className = 'text-blogcard-title'
    card.innerHTML = records[i].title

    // Дата
    let date = document.createElement('p')
    date.className = 'text-blogcard-date'
    date.innerHTML = records[i].date

    // Текст
    let singleText = document.createElement('div')
    singleText.className = 'text-small'
    singleText.innerHTML = records[i].text.substr(0, 200) + '...'

    // Автор
    let singleAuthor = document.createElement('div')
    singleAuthor.className = 'author'
    singleAuthor.innerHTML = records[i].author

    // Картинка
    let singleImage = document.createElement('img')
    singleImage.className = 'image-small'
    singleImage.src = records[i].image

    // Кнопка "Читать полностью"
    let blogcardButton = document.createElement('button')
    blogcardButton.className = 'blogcard-button'
    blogcardButton.innerHTML = 'Читать полностью'

    blogcardText.appendChild(card)
    blogcardText.appendChild(singleText)
    blogcardFooter.appendChild(singleAuthor)
    blogcardFooter.appendChild(date)
    blogcardFooter.appendChild(blogcardButton)
    blogcard.appendChild(singleImage)
    blogcard.appendChild(blogcardText)
    blogcardText.appendChild(blogcardFooter)
    blogcontent.appendChild(blogcard)
    document.getElementById('posts').appendChild(blogcontent)

    // let prim = document.createElement('div')
    // prim.className = 'author'
    // prim.innerHTML = 'Пример текста'
    // document.getElementById('rec').appendChild(prim)

    // console.log(card)

    blogcardButton.addEventListener('click', () => {
      let a
      a = 'single.html?n=' + i // records[i].date
      document.location.assign(a)
    })
  }
}
