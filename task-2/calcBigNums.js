/*
    == Задача №2 ==

    Написать модуль, который способен выполнять операции с числами любой длины
*/

const sum = (firstNum, secondNum) => BigInt(firstNum) + BigInt(secondNum)
const min = (firstNum, secondNum) => BigInt(firstNum) - BigInt(secondNum)
const mul = (firstNum, secondNum) => BigInt(firstNum) * BigInt(secondNum)
const div = (firstNum, secondNum) => BigInt(firstNum) / BigInt(secondNum)


export { sum, min, div, mul }
