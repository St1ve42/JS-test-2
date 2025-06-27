let createList = (obj, elementToAppend) => {
    let ul = document.createElement('ul');
    for (let key in obj) {
        if(typeof obj[key] !== 'object') {
            let li = document.createElement('li');
            li.innerHTML = `${key}: ${obj[key]}`;
            ul.appendChild(li);
        }
        else{
            ul.appendChild(createList(obj[key],ul))
        }
    }
    elementToAppend.appendChild(ul);
    return ul;
}

let url = (window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).split('/')
let userID = new URL(url.join('/')).searchParams.get('userID');
url.pop()
let urlUpdated = url.join('/')
let postBtn = document.createElement('button');
postBtn.classList.add('post-btn');
fetch(`https://jsonplaceholder.typicode.com/users/${userID}`).then(res => res.json()).then((user) => {
    let div = document.createElement('div');
    div.classList.add('user');
    let ul = createList(user, div);
    let a = document.createElement('a');
    a.innerHTML = `post of current user`
    postBtn.appendChild(a);
    div.appendChild(postBtn);
    document.body.appendChild(div);
});
postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`).then(res => res.json()).then((post) => {
        if(document.body.children[document.body.children.length - 1].classList.contains('posts')) {
           return;
        }
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('posts');
        for (let postElement of post) {
            let div = document.createElement('div');
            div.classList.add('post');
            let p = document.createElement('p');
            p.innerHTML = `${postElement.title}`;
            let a = document.createElement('a');
            let newURL = new URL(`${urlUpdated}/post-details.html${window.location.search}`);
            newURL.searchParams.set('postID', postElement.id)
            a.href = newURL.toString();
            a.target = `_blank`;
            let postInfoBtn = document.createElement('button');
            postInfoBtn.classList.add('post-info-btn');
            postInfoBtn.innerHTML = `detail information`
            div.appendChild(p);
            a.appendChild(postInfoBtn);
            div.appendChild(a);
            mainDiv.appendChild(div);
        }
        document.body.appendChild(mainDiv);
    })
})
