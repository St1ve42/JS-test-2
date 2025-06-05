// Task #I2XsG6f
console.log(`Task #I2XsG6f`)
rectangle_square = (a,b) => a*b;
console.log(rectangle_square(3,2));
console.log(``);

// Task #ETGAxbEn8l
console.log(`Task #ETGAxbEn8l`)
circle_square = (r) => Math.PI*r**2;
console.log(circle_square(1));
console.log(``);

// Task #Mbiz5K4yFe7
console.log(`Task #Mbiz5K4yFe7`)
cylinder = (r, h) => Math.PI*r**2*h;
console.log(cylinder(1, 2));
console.log(``);

// Task #SIdMd0hQ
console.log(`Task #SIdMd0hQ`)
printArray = (array) => {
    for(let element of array) {
        console.log(element);
    }
}
printArray([1,2,3])
console.log(``);

// Task #59g0IsA
document.write(`<h2> Task #59g0IsA </h2>`)
createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph(`Apple coala banana coconut`)

// Task #hOL6126
document.write(`<h2> Task #hOL6126 </h2>`)
createList = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
createList("Hello World!")

// Task #0Kxco1edSN
document.write(`<h2> Task #0Kxco1edSN </h2>`)
createNList = (text, N = 3) => {
    document.write(`<ul>`);
    for (let i = 0; i < N; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createNList(`Hello World!`, 8);

// Task #gEFoxMMO
document.write(`<h2> Task #gEFoxMMO </h2>`)
createPrimitiveList = (array) => {
    document.write(`<ul>`);
    for (let element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
createPrimitiveList([1,'string', true])

// Task #bovDJDTIjt
document.write(`<h2> Task #bovDJDTIjt </h2>`)
printArrayObjects = (array) => {
    document.write(`<div class = "cards">`);
    for (let element of array) {
        document.write(`<ul class = "card">`);
        for (let key in element) {
            document.write(`<li>${key}: ${element[key]}</li>`);
        }
        document.write(`</ul>`);
    }
    document.write(`</div>`);
}
printArrayObjects([{id: 1, name: 'Ivan', age: 20}, {id: 2, name: 'Yura', age: 25}, {id: 3, name: 'Ruslan', age: 23}]);

// Task #pghbnSB
console.log(`Task #pghbnSB`);
arrayMinValue = (array) => {
    minValue = array[0];
    for (const arrayElement of array) {
        minValue = arrayElement;
    }
    return minValue;
}
console.log(arrayMinValue([2,5,3]))
console.log(``)

// Task #EKRNVPM
console.log(`Task #EKRNVPM`);
sum = (arr) => {
    sumValues = 0;
    for (let arrayElement of arr) {
        sumValues+=arrayElement;
    }
    return sumValues;
}
console.log(sum([2,5,4]))
console.log(``);

// Task #kpsbSQCt2Lf
console.log(`Task #kpsbSQCt2Lf`);
swap = (arr,index1,index2) => {
    t = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t;
}
arr = [1,2,3];
console.log(arr);
swap(arr, 0, 1)
console.log(arr);
console.log(``);

//Task #mkGDenYnNjn
document.write(`<h2 class = "last-task-h2"> Task #mkGDenYnNjn </h2>`)
exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i][`currency`] === exchangeCurrency){
            return sumUAH / currencyValues[i][`value`];
        }
    }
}

sumUAH = +prompt(`Input the sum in UAH you want to convert`, `10000`)
currency_convert = prompt(`Input the currency you want to convert to`, `USD`)
value_convert = exchange(sumUAH,[{currency:`USD`,value:25},{currency:`EUR`,value:42}],currency_convert)
document.write(`<h2 class = "last-task-h2_2">${sumUAH} ${currency_convert} - ${value_convert} UAH</h2>`)