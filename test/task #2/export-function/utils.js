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