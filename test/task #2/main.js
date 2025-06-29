let url = (window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).split('/')
url.pop()
let urlUpdated = url.join('/')
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => {
    let divMain = document.createElement('div');
    divMain.classList.add('main');
    for (let item of users) {
        let divUser = document.createElement('div');
        divUser.classList.add('user');
        let ul = document.createElement('ul');
        let a = document.createElement('a');
        let newURL = new URL(`${urlUpdated}/users-details.html`);
        newURL.searchParams.set('userID', item.id)
        a.href = newURL.toString();
        a.target = `_blank`;
        let btn = document.createElement('button');
        let arrKeys = ['id', 'name']
        for (let arrKey of arrKeys) {
            let li = document.createElement('li');
            li.innerHTML = `${arrKey}: ${item[arrKey]}`;
            ul.appendChild(li);
        }
        btn.innerHTML = `Check detailed information`
        a.appendChild(btn);
        divUser.appendChild(ul);
        divUser.appendChild(a);
        divMain.appendChild(divUser);
        document.body.appendChild(divMain);
    }
})