debugger;
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
i = 2
value = coursesAndDurationArray[i].monthDuration;
switch (value) {
    case 4:
        console.log('Погано')
        break;
    case 5:
        console.log('Супер')
        break;
    case 6:
        console.log('Супер')
        break;
    case 7:
        console.log('Супер')
        break;
    default:
        console.log('Невідомо')
        break;
}


