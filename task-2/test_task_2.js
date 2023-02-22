import { sum, min, mul, div } from './calcBigNums.js'


export const runTaskTwo = () => {
    let num_one = '59346872963598734258973625872349857634285634295634928763249876347852';
    let num_two = '857203465273465834275693274563456928345'

    console.log(`\n\n-- -- -- -- Задание 2 -- -- -- -- `)

    console.log(`Написать модуль, который способен выполнять операции с числами любой длины\n`)

    console.log(`Сложение:\n`+
        `| Исходные данные - "${num_one} и ${num_two}"\n` +
        `| Результат - "${sum(num_one, num_two)}"\n`
    )
    console.log(`Вычитание:\n`+
        `| Исходные данные - "${num_one} и ${num_two}"\n` +
        `| Результат - "${min(num_one, num_two)}"\n`
    )
    console.log(`Умножение:\n`+
        `| Исходные данные - "${num_one} и ${num_two}"\n` +
        `| Результат - "${mul(num_one, num_two)}"\n`
    )
    console.log(`Деление:\n`+
        `| Исходные данные - "${num_one} и ${num_two}"\n` +
        `| Результат - "${div(num_one, num_two)}"\n`
    )
}
