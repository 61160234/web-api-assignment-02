const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectId
const app = express()

app.use(express.json())

const url = 'mongodb+srv://superadmin:B@oat7642@cluster0.vufob.mongodb.net/sample_book?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
let db, BooksCollection

async function connect() {
    await client.connect()
    db = client.db('sample_book')
    booksCollection = db.collection('Books')
}
connect()

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
    const result = await BooksCollection.insertOne(newBook)
    bookID = result.insertedId

    //n-1
    BookID = books.length - 1

    //output

    res.status(201).json(BookID)
})
    app.get('/Books/:id', async (req, res) => {
    //input
    let id = req.params.id

    //process
    const Book = await BooksCollection.findOne({ _id: ObjectID(id) })

    //output
    res.status(200).json(Book)
})
const port = 3000
app.listen(3000, () => console.log("Server started at ${port}"))
