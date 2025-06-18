let div = document.getElementById("value")
let button = document.getElementById("reset");
let refreshTime = +localStorage.getItem('refreshTime') || 0
let loadTime = +localStorage.getItem('loadTime') || 0
let value = +localStorage.getItem('value') || 100;
div.innerHTML = `${value} грн`
window.addEventListener("load", e => {
    if ((refreshTime - loadTime)/1000 > 10) {
        div.innerHTML = `${value + 10} грн`
        localStorage.setItem('value', (value + 10).toString())
    }
    localStorage.setItem('loadTime', performance.now().toString());
})
window.addEventListener("pagehide", e => {
    localStorage.setItem('refreshTime', performance.now().toString());
})
button.addEventListener("click", e => {
    localStorage.setItem('value', '100');
    div.innerText = `100 грн`
})
