Array.prototype.myForEach = function(callback) {
    if (typeof(callback) !== 'function') {
        throw new TypeError('callback must be a function');
    }
    let array = []
    for (let element of this) {
        array.push(callback(element));
    }
    return array;
}

Array.prototype.myFilter = function(callback) {
    if (typeof(callback) !== 'function') {
        throw new TypeError('callback must be a function');
    }
    let array = []
    for (let element of this) {
        if(typeof(callback(element)) === 'boolean') {
            if (callback(element)) {
                array.push(element);
            }
        }
        else {
            throw new TypeError('callback must return a boolean type');
        }
    }
    return array;
}

array = [1,2,3,4,5,6]
console.log(array);
console.log(array.myForEach(value => value + 1));
console.log(array.myFilter(value => value % 2 === 0));

