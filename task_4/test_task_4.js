import { prod, where } from "./search.js";

let str1 = 'name-starts-asus&price-<54999-&quantity->=2&description-contains-4ГБ'
let str2 = 'name-contains-VivoBook&price-<=54999-&quantity->=2&description-contains-RAM 6ГБ'
let str3 = 'name-ends-7548&price->20000-&quantity->=5&description-ends-gb'
let str4 = "name-ends-M6500QH&quantity->=5&description-ends-gb"
let str5 = "name-ends-M6500QH&quantity-<5&description-ends-gb"


export const runTaskFour = () => {
    console.log(`\n\n-- -- -- -- Задание 4 -- -- -- -- `)
    console.log(`Создать метод, принимающий строку запроса вида: "name-contains-fd&price=2&quantity>5&description-ends-abc"`)
    console.log(`Запрос имеет параметры:\n -- для строковых: 'contains, starts, ends\n -- для числовых:  '<, =, >, <=, >='`)
    console.log(`На выходе возвращает массив, только с подходящими объектами.\n`)

    console.log(`::::: Массив, где производим поиск :::::`)
    console.log(`: Название, цена, количество, описание :`)
    console.log(prod.map( n => '- '.concat(' ' + n[0] + ', ' + n[1] + ' руб., ' + n[2] + ' шт., "' + n[3] + '" ')).join('\n'))
    console.log('\n')

    console.log(`| Запрос 'starts': ${str1}`)
    console.log(`Результат:`)
    console.log( where(str1, prod) )
    console.log('')

    console.log(`| Запрос 'contains': ${str2}`)
    console.log(`Результат:`)
    console.log( where(str2, prod) )
    console.log('')

    console.log(`| Запрос 'ends': ${str3}`)
    console.log(`Результат:`)
    console.log( where(str3, prod) )
    console.log('')

    console.log(`| Запрос '>=': ${str4}`)
    console.log(`Результат:`)
    console.log( where(str4, prod) )
    console.log('')

    console.log(`| Запрос '<': ${str5}`)
    console.log(`Результат:`)
    console.log( where(str5, prod) )
}


