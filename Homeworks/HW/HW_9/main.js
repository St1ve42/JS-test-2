let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let createTag = (tag, className = undefined, parent = undefined, innerHTML = undefined) => {
    let tagVar = document.createElement(tag);
    if (className) {
        if (!Array.isArray(className)) {
            tagVar.classList.add(className)
        }
        else {
            for (let element of className) {
                tagVar.classList.add(element)
            }
        }
    }
    if (parent) {
        parent.appendChild(tagVar);
    }
    if (innerHTML) {
        tagVar.innerHTML = innerHTML;
    }
    return tagVar
}
let courses = createTag('div', 'courses', document.body);
for (let coursesArrayElement of coursesArray) {
    let mainDiv = createTag('div', 'main', courses);
    let titleDiv = createTag('div', ['title', 'div-design'], mainDiv, coursesArrayElement.title);
    let durationDiv = createTag('div', 'duration', mainDiv);
    let monthDurationDiv = createTag('div', ['month-duration', 'div-design'], durationDiv, `${coursesArrayElement.monthDuration} місяців`);
    let hourDurationDiv = createTag('div', ['hour-duration', 'div-design'], durationDiv, `${coursesArrayElement.hourDuration} годин`);
    let modulesDiv = createTag('div', ['modules', 'div-design'], mainDiv);
    for (let moduleElement of coursesArrayElement.modules) {
        let module = createTag('div', ['module', 'div-design'], modulesDiv, moduleElement);
    }
}