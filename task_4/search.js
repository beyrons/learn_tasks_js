/*
    == Задача №4 ==

    Метод, принимающий строку запроса вида:
    - "name-contains-fd&price=2&quantity>5&description-ends-abc"
    - "name-starts-fd&quantity=5"

    Запрос имеет параметры:
    для строковых: 'contains, starts, ends'
    для числовых:  '<, =, >, <=, >='

    На выходе возвращает массив, только с подходящими объектами
*/


// Массив, в котором будем осуществлять поиск:
export const prod = [
    // Название, цена, количество, описание
    ["ASUS Laptop 15 D543MA", 19999, 2, "Intel Celeron N4020, ядра: 2 х 1.1 ГГц, RAM 4ГБ, HDD 1000 gb"],
    ["ASUS VivoBook PRO 15 M6500QH", 54999, 5, "AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 6ГБ, SSD 512 gb"],
    ["ASUS VivoBook PRO 15 M6500QH", 54009, 4, "AMD Ryzen 5 5600H, ядра: 4 х 3.3 ГГц, RAM 6ГБ, SSD 512 gb"],
    ["Lenovo V15 G2 ITL", 41999, 3, "Intel Core i3-1115G4, ядра: 2 х 3 ГГц, RAM 8ГБ, SSD 256 ГБ"],
    ["Dell Inspiron 3511-0772", 42999, 25, "Intel Core i3-1115G4, ядра: 2 х 3 ГГц, RAM 12ГБ, SSD 256 gb"],
    ["Dell G515-7548", 79999, 10, "Intel Core i7-11800H, ядра: 8 х 2.3 ГГц, RAM 16ГБ, SSD 512 gb"],
]


// :: Тест ::
// Строка запроса:
// let str = 'name-contains-VivoBook&price-<=54999-&quantity->=2&description-contains-RAM 6ГБ'
// let str = 'name-starts-asus&price-<54999-&quantity->=2&description-contains-4ГБ'
// let str = 'name-ends-7548&price->20000-&quantity->=5&description-ends-gb'
// let str = 'name-ends-M6500QH&quantity->=5&description-ends-gb'

// console.log( where(str, prod) )


/*
    Следуя принципу "Single responsibility" (одна функция - одно действие) разделяем функционал и к основной функции
    пишем две дополнительные, для обработки строковых и числовых данных из запроса: "intSearch" и "strSearch"
*/

// Поиск по числовым, ind :: price = 1, quantity = 2
function intSearch (ind, sign, value, arr) {
    if(value === undefined) return []
    let res = arr.reduce((acc, elem, index) => {
        switch (sign) {
            case '>': if( elem[ind] > +value )   { acc.push(index) } break
            case '<': if( elem[ind] < +value )   { acc.push(index) } break
            case '=': if( elem[ind] === +value ) { acc.push(index) } break
            case '<=': if( elem[ind] <= +value ) { acc.push(index) } break
            case '>=': if( elem[ind] >= +value ) { acc.push(index) } break
        }

        return acc;
    }, [])

    return [...new Set(res)]
}


// Поиск по строковым, ind :: name = 0, description = 3
function strSearch (ind, range, value, arr) {
    if(value === undefined) return []
    let res = arr.reduce((acc, elem, index) => {
        if( elem[ind].toLowerCase().startsWith(value.toLowerCase()) && range === 'starts')  { acc.push(index) }
        if( elem[ind].toLowerCase().includes(value.toLowerCase()) && range === 'contains')  { acc.push(index) }
        if( elem[ind].toLowerCase().endsWith(value.toLowerCase()) && range === 'ends')      { acc.push(index) }

        return acc;
    }, [])

    return [...new Set(res)]
}


// Основной метод, принимающий строку запроса и на выходе возвращающий массив, только с подходящими объектами
export function where(request, arr) {

    // Разбиваем строку запроса на блоки ( index 0 - name, 1 - price, 2 - quantity, 3 - description )
    // Записываем значение каждого блока в отдельную переменную
    const data = request.split('&')
    const name = data.filter( x => x.includes('name')).join('').split('-').slice(1,3)
    const price = data.filter( x => x.includes('price')).join('').replace(/[price -]/g, '')
    const quantity = data.filter( x => x.includes('quantity')).join('').replace(/[quantity -]/g, '')
    const description = data.filter( x => x.includes('description')).join('').split('-').slice(1,3)

    // Формируем данные
    const resName = strSearch(0, name[0], name[1], arr)
    const resDescription = strSearch(3, description[0], description[1], arr)
    const resPrice = intSearch(1, price.substring(0, price.replace(/[0-9]/g, '').length), price.slice(price.replace(/[0-9]/g, '').length), arr)
    const resQuantity = intSearch(2, quantity.substring(0, quantity.replace(/[0-9]/g, '').length), quantity.slice(quantity.replace(/[0-9]/g, '').length), arr)


    // Сумма массивов со значениями, которые будем обрабатывать
    const countArr = [resName, resPrice, resQuantity, resDescription].filter( n => n.length !== 0 ).length

    // Составляем список с подсчетом совпадений
    // Например: equals = { '0': 2, '1': 4, '2': 4, '3': 2, '4': 2, '5': 1 } - индексы 1 и 2 имеются во всех четырех массивах,
    // а значит подходят всем параметрам запроса
    const equals = [...resName, ...resPrice, ...resQuantity, ...resDescription].reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1;
        return acc;
    }, {})

    // Сравниваем список "equals" (количество совпадений) с "countArr" (количество непустых массивов)
    const result = []
    for (const [key, value] of Object.entries( equals )) {
        if (value === countArr) {
            result.push(+key);
        }
    }

    // выводим список подходящий параметрам запроса
    return result.map( i => arr[i] ).join('\n')
}
