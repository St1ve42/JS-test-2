if(!localStorage.getItem('isLoggedIn')){
    array = []
    for (let i = 0; i < 100; i++) {
        array.push({name: 'Oleksandr', age: 32, status: true})
    }
    localStorage.setItem('isLoggedIn', JSON.stringify(array))
}
let outputUserInfo = (index) => {
    let div = document.getElementById('info')
    let p = document.getElementById('text')
    p.innerText = ``
    let divBlock = document.createElement('div')
    let array = JSON.parse(localStorage.getItem('isLoggedIn'))
    let vocabulary = {name: 'Ім`я', age: 'Вік', status: 'Статус'};
    for (let i = index; i < index + 10; i++) {
        let divUser = document.createElement('div');
        divUser.classList.add('user');
        for (let key in array[i]) {
            let p = document.createElement('p');
            p.innerText = `${vocabulary[key]}: ${array[i][key]}`;
            divUser.appendChild(p);
        }
        divBlock.appendChild(divUser)
    }
    div.appendChild(divBlock)
}
let deleteUserInfo = () => {
    let div = document.getElementById('info')
    div.children[div.children.length - 1].remove()
}

let prevBtn = document.getElementById('prev-btn')
let nextBtn = document.getElementById('next-btn')
window.addEventListener('load', e => {
    outputUserInfo(0)
    localStorage.setItem('index', '0')
})
nextBtn.addEventListener('click', e => {
    let index = +JSON.parse(localStorage.getItem('index'));
    if(0 <= index && index < 90){
        outputUserInfo(index + 10)
        localStorage.setItem('index', `${index + 10}`)
    }
    else{
        let p = document.getElementById('text')
        p.innerText = `В об'єкті немає 10 наступних елементів до нижче виведених`
    }
})
prevBtn.addEventListener('click', e => {
    let index = +JSON.parse(localStorage.getItem('index'));
    if(0 < index && index <= 90){
        deleteUserInfo()
        localStorage.setItem('index', `${index - 10}`)
    }
    else{
        let p = document.getElementById('text')
        p.innerText = `В об'єкті немає 10 попередніх елементів до нижче виведених`
    }
})


