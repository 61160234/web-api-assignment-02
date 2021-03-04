const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(express.json())
let Books = []

const url = 'mongodb+srv://superadmin:B@oat7642@cluster0.pansa.mongodb.net/sample_book?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
let db, moviesCollection

async function connect() {
    await client.connect()
    db = client.db('')
    moviesCollection = db.collection('Books')
}
connect()

app.get('/Books', (req, res) => {
    //input

    //process

    //output
    res.status(200).json(movies)
})


app.get('/Books/:id', (req, res) => {
    //input
    let id = req.params.id

    let book = {}

    //process
    book = Books[id]

    //output
    res.status(200).json(book)
})


// POST /movies
app.post('/Books', async (req, res) => {
    //input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImageurl = req.body.imageurl
    //rating
    // - score
    // - votes

    // key: value
    let newMovie = {
        title: newTitle,
        Price: newPrice,
        Unit: newUnit,
        Isbn: newIsbn,
        Imageurl: newImageurl,
    }
    let movieID = 0

    //process
    const result = await moviesCollection.insertOne(newMovie)
    movieID = result.insertedId

    //output

    res.status(201).json(bookID)
})

const port = 3000
app.listen(3000, () => console.log('Server started at ${port}'))