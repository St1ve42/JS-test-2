let output = (pairList) => {
    let ul = document.createElement('ul');
    let selectedPairListIDs = JSON.parse(localStorage.getItem('selectedPairListID')) || [];

    for (let i = 0; i < pairList.length; i++) {
        let pairListElement = pairList[i];
        let li = document.createElement("li");
        const liId = `li-${pairListElement.name}-${pairListElement.value}`;
        li.setAttribute('id', liId);
        li.innerHTML = `${pairListElement['name']}=${pairListElement['value']}`;

        if (selectedPairListIDs.includes(liId)) {
            li.classList.add('selected-pair');
            li.classList.remove('deleted-pair');
        } else {
            li.classList.remove('selected-pair', 'deleted-pair');
        }

        li.addEventListener('click', e => {
            e.preventDefault();
            let selectedPairListID = JSON.parse(localStorage.getItem('selectedPairListID')) || [];
            if (li.classList.contains('selected-pair')) {
                li.classList.remove('selected-pair');
                li.classList.add('deleted-pair');
                selectedPairListID.splice(selectedPairListID.indexOf(liId), 1);
            } else {
                li.classList.remove('deleted-pair');
                li.classList.add('selected-pair');
                if (!selectedPairListID.includes(liId)) {
                    selectedPairListID.push(liId);
                }
            }
            localStorage.setItem('selectedPairListID', JSON.stringify(selectedPairListID));
        });

        ul.append(li);
    }
    divOutput.innerHTML = '';
    divOutput.appendChild(ul);
}
let sorting = (pairList, key) => {
    pairList.sort((a, b) => {
        if (a[key].length !== b[key].length && isNaN(Number(a[key])) && isNaN(Number(b[key]))){
            return a[key].length - b[key].length;
        }
        else if(!isNaN(Number(a[key])) && !isNaN(Number(b[key]))){
            return Number(a[key]) - Number(b[key]);
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
    localStorage.removeItem('selectedPairListID');
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    output(pairList)
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
        inputAdd.setCustomValidity(`Not correct form data. It must be presented as <name>=<value>\n<name> and <value> must contain only alphanumeric characters.`);
        inputAdd.reportValidity();
        return;
    }
    let pair = value.split("=")
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    pairList.push({name: pair[0], value: pair[1]});
    output(pairList)
    inputAdd.value = '';
    localStorage.setItem('pairList', JSON.stringify(pairList));
    localStorage.setItem('selectedPairListID', JSON.stringify([]))
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
    let pairList = JSON.parse(localStorage.getItem('pairList')) || []
    let selectedPairList = JSON.parse(localStorage.getItem('selectedPairListID')) || []
    let selectedPairListValues = selectedPairList.reduce((accum, value) => {
        let pair = document.getElementById(value).innerText.split('=')
        accum.push(JSON.stringify({name: pair[0], value: pair[1]}))
        return accum
    }, [])
    let updatedPairList = pairList.filter(value => {
        return !selectedPairListValues.includes(JSON.stringify(value))
    })
    selectedPairList.forEach(value => {
        document.getElementById(value).remove()
    })
    localStorage.setItem('pairList', JSON.stringify(updatedPairList));
    localStorage.setItem('selectedPairListID', JSON.stringify([]));
})

