/*
    == Задача №3 ==

    Создать класс данных “Товар”, с полями: Название, Цена, Количество, Описание.
    Наполнить массив объектами такого класса.
*/


export class Product {
    constructor(name = "noname", price = 0, quantity = 0, description = "no description") {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description
    }
}

let x1 = new Product("ASUS Laptop 15 D543MA", 19999, 2, "Intel Celeron N4020, ядра: 2 х 1.1 ГГц, RAM 4ГБ, HDD 1000 gb");
let x2 = new Product("ASUS VivoBook PRO 15 M6500QH", 54999, 5, "AMD Ryzen 5 5600H, ядра: 6 х 3.3 ГГц, RAM 6ГБ, SSD 512 gb");
let x3 = new Product("ASUS VivoBook PRO 15 M6500QH", 54009, 4, "AMD Ryzen 5 5600H, ядра: 4 х 3.3 ГГц, RAM 6ГБ, SSD 512 gb");
let x4 = new Product("Dell Inspiron 3511-0772", 42999, 25, "Intel Core i3-1115G4, ядра: 2 х 3 ГГц, RAM 12ГБ, SSD 256 gb");
let x5 = new Product("Dell G515-7548", 79999, 10, "Intel Core i7-11800H, ядра: 8 х 2.3 ГГц, RAM 16ГБ, SSD 512 gb");
let x6 = new Product("Lenovo V15 G2 ITL", 41999, 3, "Intel Core i3-1115G4, ядра: 2 х 3 ГГц, RAM 8ГБ, SSD 256 ГБ");
let x7 = new Product()


let result = []
result.push(x1, x2, x3, x4, x5, x6, x7)
result = result.map( n => `Название: ${n.name}  Цена: ${n.price} руб.  Количество: ${n.quantity}  Описание: ${n.description}`)


export { result }
