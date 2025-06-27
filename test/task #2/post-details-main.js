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

let url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
let postID = new URL(url).searchParams.get('postID');
let post = fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(res => res.json()).then((post) => {
    let div = document.createElement('div');
    div.classList.add('post');
    let ul = createList(post, div);
    return div;
});
let comments = fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`).then(res => res.json()).then((comments) => {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('comments');
    for (let commentElement of comments) {
        let div = document.createElement('div');
        div.classList.add('comment');
        let ul = createList(commentElement, div);
        div.appendChild(ul);
        mainDiv.appendChild(div);
    }
    return mainDiv;
})
Promise.all([post, comments]).then(result => {
    for (let element of result) {
        document.body.appendChild(element);
    }
})