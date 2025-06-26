fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => {
    let url = new URL("file:///C:/Education/Fullstack/Front-end/JS/test/task%20%232/users-details.html")
    let divMain = document.createElement('div');
    divMain.classList.add('main');
    for (let item of users) {
        let divUser = document.createElement('div');
        divUser.classList.add('user');
        let ul = document.createElement('ul');
        let a = document.createElement('a');
        a.href = url.toString();
        let btn = document.createElement('button');
        let arrKeys = ['id', 'name']
        for (let arrKey of arrKeys) {
            let li = document.createElement('li');
            li.innerHTML = `${arrKey}: ${item[arrKey]}`;
            ul.appendChild(li);
        }
        a.innerHTML = `Check user's details`
        btn.appendChild(a);
        divUser.appendChild(ul);
        divUser.appendChild(btn);
        divMain.appendChild(divUser);
        document.body.appendChild(divMain);
    }
})