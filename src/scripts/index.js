'use strict'

import '../lib/style'

const records = [
    {title: 'Запись 1', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-1.jpg', date: '10.10.2023'},
    {title: 'Запись 2', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'Л. Н. Толстой', image: 'static/img/post-2.jpg', date: '10.10.2023'},
    {title: 'Запись 3', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-3.jpg', date: '12.10.2023'},
    {title: 'Путешествия по морю – это одиссея', text: 'Путешествия по морю – это непрерывная и захватывающая одиссея, которая влечет за собой приключения, открывает новые горизонты и позволяет ощутить глубокую связь с природой. Когда ты разглядываешь бескрайние просторы океана, ты невольно понимаешь, насколько малы мы во вселенной. Море – это могущественная сила, способная сменить направление твоей жизни в мгновение ока. Вся история человечества пронизана подвигами, сделанными на его волнах. Подняв паруса и отпустив швартовые веревки, путешествуешь из порта в порт, погружаясь в морские приключения. Каждая поездка на судне – это искусство покорения ветра и волн, единение с элементами. Море – поистине учитель жизни, обучающий тебя не только справляться с непредсказуемыми силами природы, но и находить гармонию с самим собой. Веками люди исследовали неизведанные уголки нашей планеты, отправляясь в далекие плавания, в поисках новых земель, приключений, богатств и познания. Основатели новых цивилизаций были искателями приключений, смельчаками, способными покорить море, даже если это означало преодоление своих собственных страхов. Однако путешествия по морю – это не только оставить привычную сушу позади. Это и возможность заглянуть в глубины своей души, преодолевать внутренние барьеры, о которых ты раньше и не задумывался. Вдали от суеты и шума городской жизни, ты можешь переосмыслить свои приоритеты, обрести внутренний покой и вдохновение. Находясь на судне, пребываешь в постоянной гармонии с водными просторами. Они подчиняются своим законам, и лишь благодаря доверию к морю и своим навыкам, можно извлечь из этой силы наилучшую выгоду. Путешествуя по морю, познаешь и обретаешь себя, расширяешь свои границы и погружаешься в бесконечный поток морской энергии.', author: 'А. С. Пушкин', image: 'static/img/post-4.jpg', date: '14.10.2023'}]

for (let i = records.length - 1; i > -1; i--) {
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
  console.log(card)
}
