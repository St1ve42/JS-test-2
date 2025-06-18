let button = document.getElementsByTagName('button')[0]
let p = document.createElement('p')
button.addEventListener('click', function(evt){
    evt.preventDefault()
    let age = +document.forms['age-form']['age'].value
    if (0 < age && age < 18){
        p.innerText = 'Вам менше 18 років'
    }
    else if (age === 18){
        p.innerHTML = 'Вам 18 років'
    }
    else if (age > 18 && age < 100){
        p.innerHTML = 'Вам більше 18 років'
    }
    else{
        p.innerHTML = 'Введіть коректне значення віку'
    }
    document.body.append(p)
})

