import '../lib/style'

// let editmas = localStorage.getItem('mas')
// console.log('mas in edit: ', editmas)

// var imagesList = [{title: 'image-1', value: 'https://anton-nevezhin.github.io/simple-blog/dist/static/img/post-1.jpg'}, {title: 'image-2', value: 'https://anton-nevezhin.github.io/simple-blog/dist/static/img/post-2.jpg'}, {title: 'image-3', value: 'https://anton-nevezhin.github.io/simple-blog/dist/static/img/post-3.jpg'}, {title: 'image-4', value: 'https://anton-nevezhin.github.io/simple-blog/dist/static/img/post-4.jpg'}]
// +++

console.log(document.location.href)

let masString = localStorage.getItem('masarray')  // ['Ариша', "Гриша", 'Пахан'] //  localStorage.getItem('mas')
let records = JSON.parse(masString)

// console.log(records)

let now = new Date()
// console.log(now)
let month = Number(now.getMonth()) + Number(1)
let date = now.getDate() + '.' + month + '.' + now.getFullYear() + '  ' + now.getHours() + ':' + now.getMinutes()
// console.log(date)

// Определяем номер записи (элемента массива)
let n = location.search
n = n.substr(3)
// console.log(n)
// if (n < 0) {
//   n = records.length
// }
// let x = -1
// if (n === 'n') {
//   n = records.length
// }
// console.log(n)

let title = document.getElementById('edittitle')
let text = document.getElementById('edittextarea')
let author = document.getElementById('editauthor')
let image = document.getElementById('editimage')
// console.log(image)
// console.log(author)

if (n !== 'n') { // Для изменения записи
  title.value = records[n].title
  text.value = records[n].text
  author.value = records[n].author
// image.src = imagesList[n].value +++

  image.src = records[n].image
}

// const records = [
//     {title: 'Запись 1', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-1.jpg'},
//     {title: 'Запись 2', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-2.jpg'},
//     {title: 'Запись 3', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-3.jpg'},
//     {title: 'Запись 4', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-4.jpg'}]

// let prim = document.createElement('div')
// prim.className = 'author'
// prim.innerHTML = 'Пример текста'
// document.getElementById('editroot').appendChild(prim)

// let card = document.createElement('p')
// card.className = 'text-blogcard-title'
// card.innerHTML = 'records[i].title'
// document.getElementById('editroot').appendChild(card)

// Кнопка "Изменить"
// let singleButton = document.createElement('button')
// // singleButton.className = 'blogcard-button'
// singleButton.innerHTML = 'Изменить'
// document.getElementById('editbtn').appendChild(singleButton)

let singleButton = document.getElementById('editbutton')

singleButton.addEventListener('click', () => {
  // let a
  // a = 'config.html'
  // document.location.assign(a)

  if (n !== 'n') {
    records[n].title = title.value
    records[n].text = text.value
    records[n].author = author.value
    records[n].image = document.getElementById('editlist').value
    console.log('Заменили')
  }

  if (n === 'n') {
    let newrecord = {
      title: title.value,
      text: text.value,
      author: author.value,
      date: date,
      image: document.getElementById('editlist').value}
    // n = length.records
    records.push(newrecord)
    console.log('author.value', records)
    console.log('author.value')
    console.log(newrecord)
  }
  // console.log('a: ', a)
  // localStorage.setItem('mas', a)
  masString = JSON.stringify(records)
  localStorage.setItem('masarray', masString)
  let a
  a = 'index.html'
  document.location.assign(a)
})
// document.getElementById('img').innerHTML = document.getElementById('editlist').value

// document.getElementById('str').innerHTML = document.getElementById('editlist').value.slice(61, 71)

// let editreplace = document.getElementById('editreplace')

// // document.getElementById('editimage').src = 'https://anton-nevezhin.github.io/simple-blog/dist/static/img/post-4.jpg'
// editreplace.addEventListener('click', () => {
//   // document.getElementById('img').innerHTML = document.getElementById('editlist').value
//   document.getElementById('editimage').src = document.getElementById('editlist').value
//   // // let a
//   // // a = 'config.html'
//   // // document.location.assign(a)
//   // records[n].title = title.value
//   // records[n].text = text.value
//   // records[n].author = author.value
//   // // console.log('a: ', a)
//   // // localStorage.setItem('mas', a)
//   // masString = JSON.stringify(records)
//   // localStorage.setItem('masarray', masString)
//   // let a
//   // a = 'single.html?n=' + n
//   // document.location.assign(a)
// })

// console.log('arrghjtyueryt')

let editlist = document.getElementById('editlist')

editlist.addEventListener('change', () => {
  document.getElementById('editimage').src = editlist.value
})

// let arr = [0, 1, 2, 3, 4, 5, 6]
// console.log('arr: ', arr)
// console.log('arrghjtyueryt')

let deleteButton = document.getElementById('deletebutton')
deleteButton.addEventListener('click', () => {
  records.splice(n, 1)
  // arr.splice(3, 2)
  // console.log('arr: ', arr)
  document.location.assign('index.html')
  console.log('rec: ', records)
  masString = JSON.stringify(records)
  localStorage.setItem('masarray', masString)
})
