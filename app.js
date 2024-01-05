const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

const ul = document.createElement('ul')
// const innerHtml = books.reduce((str, book) => {
//     const { author, name, price } = book
//     if ( author && name && price){
//         return str += `<li>author: ${author} <br> name: ${name} <br> price: ${price} <hr></li>`
//     }else {
//         let error = ''
//         if (!author) error = 'author'
//         if (!name) error = 'name'
//         if (!price) error = 'price'
//         console.error(`не хватает ${error}`)
//         return resalt
//     }
//  }, '')
//  console.log(innerHtml())




let innerHTML = ''
for (let book of books) {
    try {
        const { author, name, price } = book
        if (author && name && price) {
            innerHTML += `<li>author: ${author} <br> name: ${name} <br> price: ${price} <hr></li>`
        } else {
            let error = " "
            if (!author) error = 'author'
            if (!name) error = 'name'
            if (!price) error = 'price'
            throw new Error(`не хватает ${error}`)
        }
    } catch(error) {
        // throw new Error(error)
        console.log(error)
    }
}
ul.innerHTML = innerHTML
ul.style.listStyle = 'none'
const root = document.getElementById('root')
root.appendChild(ul)


