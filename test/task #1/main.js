let output = (pairList) => {
    let ul = document.createElement('ul');
    for (const pairListElement of pairList) {
        let li = document.createElement("li")
        li.innerHTML = `${pairListElement['name']}=${pairListElement['value']}`;
        ul.append(li)
    }
    if (divOutput.children.length !== 0) {
        divOutput.lastChild.remove()
    }
    divOutput.appendChild(ul)
}

let sorting = (pairList, key) => {
    pairList.sort((a, b) => {
        if (a[key].length !== b[key].length) {
            return a[key].length - b[key].length;
        }
        return a[key].localeCompare(b[key], 'en')
    });
}

let btnAdd = document.querySelector('input[name="add"]');
let btnRemove = document.querySelector('input[name="delete"]');
let btnSortByName = document.querySelector('input[name="sort-by-name"]');
let btnSortByValue = document.querySelector('input[name="sort-by-value"]');
let inputAdd = document.forms[0]['name-value']
let isValidAdd = true;
let divOutput = document.getElementById('lst-output')
window.addEventListener('load', e => {
    let pairList = JSON.parse(localStorage.getItem('pairList'))
    if(pairList){
        output(pairList)
    }
})
inputAdd.addEventListener('input', e => {
    if (!isValidAdd) {
        inputAdd.setCustomValidity('');
        isValidAdd = true;
    }
})
btnAdd.addEventListener('click', e => {
    e.preventDefault();
    let value = inputAdd.value.replace(/\s+/g, '');
    if(!value.match(/^\w+=\w+$/g)) {
        isValidAdd = false;
        inputAdd.setCustomValidity(`Not correct form data. It must be presented as <name>=<value>`)
        inputAdd.reportValidity();
        return;
    }
    let pair = value.split("=")
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    pairList.push({name: pair[0], value: pair[1]});
    output(pairList)
    localStorage.setItem('pairList', JSON.stringify(pairList));
})
btnSortByName.addEventListener('click', e => {
    e.preventDefault();
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    sorting(pairList, 'name')
    output(pairList)
    localStorage.setItem('pairList', JSON.stringify(pairList));

})
btnSortByValue.addEventListener('click', e => {
    e.preventDefault();
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    sorting(pairList, 'value')
    output(pairList)
    localStorage.setItem('pairList', JSON.stringify(pairList));

})
btnRemove.addEventListener('click', e => {
    e.preventDefault();
    divOutput.lastChild.remove();
    localStorage.setItem('pairList', JSON.stringify([]));
})
