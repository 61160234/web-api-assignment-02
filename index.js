const express = require('express')
const app = express()

app.use(express.json())
let Books = []

// POST /books
app.post('/Books', (req, res) => {
    //input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImage = req.body.imageurl

    // key: value
    let newBook = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        imageurl: newImage,
    }

    let BookID = 0

    //process
    Books.push(newBook)

    //n-1
    BookID = books.length - 1

    //output

    res.status(201).json(BookID)
})

const port = 3000
app.listen(3000, () => console.log("Server started at ${port}"))
