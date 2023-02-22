/*
    == Задача №1 ==

    Написать модуль с четырьмя методами работы со строками
*/


// 1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
export const trueRegister = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}


// 2. Преобразование строки с целью правильной расстановки пробелов
export const trueSpace = (str) => {
    return str.replace(/(\s,|,)/g, ', ').replace(/(\s\.|\.)/g, '. ').replace(/(^\s+|\s+$)|\s\s+/g, ' ').slice(0,-1)
}


// 3. Подсчет количества слов в строке
export const countWords = (str) => {
    return str.length ? str.split(' ').length : 0
}


// 4. Подсчет, уникальных слов (в массиве 'arr' задаем список уникальных слов)
export const countUniqueWords = (str, arr) => {
    let s = 'раз'
    let res = str.replace(/[^А-Яа-я\s]/g, '').toLowerCase().split(' ').filter( x => arr.includes(x)).reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1
            return acc
        }, {}
    )

    return Object.entries(res).map(value => '-- ' +value[0] + ' - ' + value[1] + ' ' + s + `${value[1] %2 === 0 ? 'а': ''}`).join('\n')
}
